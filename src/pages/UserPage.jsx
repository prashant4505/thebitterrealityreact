import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const UserPage = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <div className="container">
      <h2>Welcome, {user?.name}!</h2>
      <button onClick={logout}>Logout</button>
    </div>
  )
};

export default UserPage;