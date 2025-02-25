import '../css/Login.css';
import React, { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { user, login } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      if (user.role == 'admin'){
        navigate("/dashboard");
      }else{
        navigate("/user");
      }
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      const success = await login(email, password);
      if (success) {
        navigate("/dashboard"); // Redirect on successful login
      } else {
        setError("Invalid email or password"); // Show error if login fails
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error("Login error:", err);
    }
  };

  return (
    <div className="login-container">
      {/* Login Header */}
      <h1>Login</h1>
      <p>
        <em>Welcome back! Please log in to continue.</em>
      </p>

      {/* Login Form */}
      <form onSubmit={handleSubmit}>
        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password Field */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Error Message */}
        {error && <p className="error-message">{error}</p>}

        {/* Login Button */}
        <button type="submit">Login</button>
      </form>

      {/* Signup Link */}
      <div className="signup-link">
        Don’t have an account? <Link className="nav-link" to="/">Sign up here</Link>.
      </div>
    </div>
  );
};

export default Login;
