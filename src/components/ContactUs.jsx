import '../css/ContactUs.css';
import { useState } from "react";
import Preloader from "./Preloader"; // Ensure this component exists

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const response = await fetch("https://api.thebitterreality.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage({ type: "success", text: "Message sent successfully!" });
        setFormData({ name: "", email: "", description: "" });
      } else {
        setMessage({ type: "error", text: data.message || "Something went wrong" });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage({ type: "error", text: "Failed to send message. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Contact Us</h1>
      <p><em>Got something to say? We’d love to hear from you!</em></p>

      {/* Show Preloader when Submitting */}
      {loading && <Preloader />}

      <form onSubmit={handleSubmit}>
        {/* Display Success or Error Message */}
        {message.text && (
          <div className={`alert ${message.type === "success" ? "alert-success" : "alert-error"}`}>
            {message.text}
          </div>
        )}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="description" value={formData.description} onChange={handleChange} placeholder="Your message" required></textarea>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
