import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const UserPage = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <div>
      <h2>User Page</h2>
      <h3>Hello {user?.name}!</h3>
      <button onClick={logout}>Logout</button>
    </div>
  )
};

export default UserPage;