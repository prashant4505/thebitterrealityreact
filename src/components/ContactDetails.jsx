import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Preloader from "../components/Preloader";
import "../css/ContactDetail.css";

const ContactDetail = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContactDetail = async () => {
      const token = user?.token;
      if (!token) {
        setError("Access token is missing. Redirecting to login...");
        setTimeout(() => navigate("/login"), 2000);
        return;
      }
      try {
        const response = await fetch(`https://api.thebitterreality.com/api/contact/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
        }
        const result = await response.json();
        setContact(result.data);
      } catch (err) {
        console.error("Error fetching contact details:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchContactDetail();
  }, [id, user, navigate]);

  if (loading) {
    return <Preloader />;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="contact-detail container">
      <h2>Contact Detail</h2>
      <div className="detail-card">
        <p><strong>ID:</strong> {contact?.id}</p>
        <p><strong>Name:</strong> {contact?.name}</p>
        <p><strong>Email:</strong> {contact?.email}</p>
        <p><strong>Message:</strong></p>
        <p className="description">{contact?.description}</p>
        <p><strong>Received At:</strong> {new Date(contact?.created_at).toLocaleString()}</p>
        <button className="back-btn" onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
};

export default ContactDetail;