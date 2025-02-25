import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <h2>Welcome, {user?.name}!</h2>
      <h3>User role: {user?.role}</h3>
      <h3>User Email: {user?.email}</h3>
      <button onClick={logout} className="logout-btn">Logout</button>
    </div>
  );
};

export default Dashboard;