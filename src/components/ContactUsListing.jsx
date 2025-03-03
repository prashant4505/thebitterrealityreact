import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Preloader from "../components/Preloader";
import "../css/ContactUsListing.css";

const ContactUsListing = () => {
  const { user } = useContext(AuthContext);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContacts = async () => {
      const token = user?.token;

      if (!token) {
        setError("Access token is missing. Redirecting to login...");
        return;
      }

      try {
        const response = await fetch("https://api.thebitterreality.com/api/contact", {
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
        setContacts(result.data.data);
      } catch (err) {
        console.error("Error fetching contacts:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, [user]);

  if (loading) {
    return <Preloader />;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="contact-listing container">
      <h2>Contact Us Listing</h2>
      <table className="contact-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Received At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.id}</td>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{new Date(contact.created_at).toLocaleDateString()}</td>
              <td>
                <button className="view-btn" onClick={() => navigate(`/contact/${contact.id}`)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactUsListing;