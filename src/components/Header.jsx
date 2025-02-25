import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const { user, permissions, logout } = useContext(AuthContext);

  return (
    <header>
      <h1>The Bitter Reality</h1>
      <p>Where humor meets honesty – no sugar-coating here.</p>
      
      <nav>
        {/* Show Dashboard for both "user" and "admin" roles */}
        {permissions.includes("admin") && (
            <Link className="nav-link" to="/dashboard">Dashboard</Link>
        )}
        {permissions.includes("content editor") && (
            <Link className="nav-link" to="/user">Dashboard</Link>
        )}
        {(permissions.includes("content editor") || permissions.includes("admin")) && (
            <Link className="nav-link" to="/blog/create">Post Blog</Link>
        )}

        {/* Public Links */}
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/blogs">Blogs</Link>
        <Link className="nav-link" to="/jokes">Jokes</Link>
        <Link className="nav-link" to="/deep-thoughts">Thoughts</Link>
        <Link className="nav-link" to="/about">About Us</Link>
        <Link className="nav-link" to="/contact">Contact</Link>



        {/* <Link className="nav-link" to="/admin">Admin</Link>
        <Link className="nav-link" to="/user">User</Link> */}

        {/* Authenticated User Links */}
        {user ? (
          <>
            {/* Show User Page for "user" role */}
            {permissions.includes("user") && (
              <Link className="nav-link" to="/user">User</Link>
            )}
            <Link className="nav-link" onClick={logout}>Logout</Link>
          </>
        ) : (
            <>
            {permissions.includes("anonymous") && (
                <Link className="nav-link" to="/login">Login</Link>
            )}
            </>
        )}
      </nav>
    </header>
  );
};

export default Header;
