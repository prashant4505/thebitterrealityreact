import '../css/BlogListing.css';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Preloader from "./Preloader";

const BlogListing = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("https://api.thebitterreality.com/api/blogs");
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        setBlogs(data.blogs.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const stripHtml = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };
  
  const truncateText = (text, limit) => {
    return text.length > limit ? text.substring(0, limit) + "..." : text;
  };

  if (loading) return <Preloader />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container">
      <h1>Blog</h1>
      <p><em>Raw humor. Unfiltered thoughts. Real-life experiences.</em></p>
      
      <div className="blog-list">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-item">
            <img src={`https://api.thebitterreality.com/storage/${blog.image}` || "https://via.placeholder.com/300"} alt="Blog Thumbnail" />
            <div className="blog-content">
              <Link className="nav-link" to={`/blogs/${blog.id}`}>
                <h2>{blog.title}</h2>
              </Link>
              <p>{truncateText(stripHtml(blog.description), 200)}</p>
              <div className="blog-meta">Published on {new Date(blog.created_at).toLocaleDateString()}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogListing;
