import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Preloader from "../components/Preloader";
import { AuthContext } from "../context/AuthContext";
import '../css/Dashboard.css';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCount = async () => {
      const token = user?.token;

      if (!token) {
        setError("Access token is missing. Redirecting to login...");
        setTimeout(() => navigate("/login"), 2000);
        return;
      }

      try {
        const response = await fetch("https://api.thebitterreality.com/api/dashboard", {
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
        console.log("API Response:", result); // Debugging

        setCount(result.data); // Extract "data" object
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCount();
  }, [navigate]);

  if (loading) {
    return <Preloader />; // Show Preloader while loading
  }

  return (
    <div className="container main">
      <h2>Welcome, {user?.name}!</h2>
      <hr/><br/>
      <div class="dashboard">
        <div class="card">
          <h2>Total Users</h2>
          <p>{count?.user_count}</p>
          <Link to="/dashboard" className="btn link-btn">Show Users</Link>
        </div>

        <div class="card">
          <h2>Total Jokes</h2>
          <p>{count?.jokes_count}</p>
          <Link to="/Jokes" className="btn link-btn">Show Jokes</Link>
        </div>

        <div class="card">
          <h2>Total Blogs</h2>
          <p>{count?.blog_count}</p>
          <Link to="/blogs" className="btn link-btn">Show Blogs</Link>
        </div>

        <div class="card">
          <h2>Total Contact Us</h2>
          <p>{count?.contact_message_count}</p>
          <Link to="/dashboard" className="btn link-btn">Show Contact Us</Link>
        </div>

        <div class="card">
          <h2>Total Thoughts</h2>
          <p>6</p>
          <Link to="/deep-thoughts" className="btn link-btn">Show Thoughts</Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;