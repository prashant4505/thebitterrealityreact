import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import Preloader from "../components/Preloader";
import "../css/UserListing.css";

const UserListing = () => {
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const token = user?.token;

      if (!token) {
        setError("Access token is missing. Redirecting to login...");
        return;
      }

      try {
        const response = await fetch("https://api.thebitterreality.com/api/users", {
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
        setUsers(result.data);
      } catch (err) {
        console.error("Error fetching users:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [user]);

  if (loading) {
    return <Preloader />;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="user-listing container">
      <h2>User Listing</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{new Date(user.created_at).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserListing;