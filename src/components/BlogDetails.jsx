import '../css/BlogDetails.css';
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Preloader from "./Preloader";

const BlogDetails = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`https://api.thebitterreality.com/api/blogs/${blogId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch blog details");
        }
        const data = await response.json();
        setBlog(data.blog);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchComments = async () => {
      try {
        const response = await fetch(`https://api.thebitterreality.com/api/blogs/${blogId}/comments`);
        if (!response.ok) {
          throw new Error("Failed to fetch comments");
        }
        const data = await response.json();
        setComments(data.comments || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlog();
    fetchComments();
  }, [blogId]);

  const handleCommentSubmit = async () => {
    const token = sessionStorage.getItem("access_token");
    if (!comment.trim()) return;
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: JSON.stringify({ comment:comment }),
    };

    try {
      const response = await fetch(`https://api.thebitterreality.com/api/blogs/${blogId}/comments`, requestOptions);
      console.log(response);
      
      if (!response.ok) {
        throw new Error("Failed to post comment");
      }
      const data = await response.json();
      setComments((prev) => [...prev, data.comment]);
      setComment("");
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) return <Preloader />;
  if (error) return <p>Error: {error}</p>;
  if (!blog) return <p>No blog found</p>;

  return (
    <div className="container">
      <div className="blog-header">
        <h1>{blog.title}</h1>
        <img src={`https://api.thebitterreality.com/storage/${blog.image}`} alt={blog.title} />
        <div className="blog-meta">
          <p>By  <Link className="nav-link" to={`/blogs/${blog.id}`}>{blog.user_name}</Link> | Published on {new Date(blog.created_at).toLocaleDateString()}</p>
        </div>
      </div>

      <div className="blog-content" dangerouslySetInnerHTML={{ __html: blog.description }} />

      <div className="comments">
        <h2>Comments</h2>
        <div className="comment-form">
          <textarea value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Join the conversation..."></textarea>
          <button type="button" onClick={handleCommentSubmit}>Post Comment</button>
        </div>

        <div className="comment-list">
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div key={comment.id} className="comment">
                <p>{comment.comment}</p>
                <div className="comment-meta">- {comment.name}, {new Date(comment.date).toLocaleDateString()}</div>
              </div>
            ))
          ) : (
            <p>No comments yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
