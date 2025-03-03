import { useState, useEffect } from "react";
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Preloader from '../Preloader';
import '../../css/PostBlog.css';

const BlogPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const initializeEditor = () => {
      if (window.CKEDITOR && !window.CKEDITOR.instances.description) {
        window.CKEDITOR.replace("description");
        window.CKEDITOR.instances.description.on("change", function () {
          setDescription(this.getData());
        });
      }
    };

    if (window.CKEDITOR) {
      initializeEditor();
    } else {
      const script = document.createElement("script");
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/ckeditor/4.9.2/ckeditor.js";
      script.async = true;
      script.onload = initializeEditor;
      document.body.appendChild(script);
    }

    return () => {
      if (window.CKEDITOR && window.CKEDITOR.instances.description) {
        window.CKEDITOR.instances.description.destroy(true);
      }
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const token = user?.token;
    if (!token) {
      setMessage("Authentication token not found.");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (image) formData.append("image", image);

    try {
      const response = await fetch("https://api.thebitterreality.com/api/blogs", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        setMessage("Blog posted successfully!");
        setTitle("");
        setDescription("");
        setImage(null);
        if (window.CKEDITOR && window.CKEDITOR.instances.description) {
          window.CKEDITOR.instances.description.setData(""); // Reset CKEditor content
        }
      } else {
        setMessage(result.message || "Failed to post blog.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5 p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Create a Blog Post</h2>
      {message && <p className="text-danger mb-4">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="form-label">Description</label>
          <textarea id="description" className="form-control"></textarea>
        </div>
        <div className="mb-4">
          <label className="form-label">Image</label>
          <input
            type="file"
            className="form-control file-upload"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-sm mb-5" disabled={loading}>
          {loading ? <Preloader /> : "Post Blog"}
        </button>
      </form>
    </div>
  );
};

export default BlogPost;