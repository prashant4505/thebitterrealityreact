import '../css/Login.css';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login form submitted');
  };

  return (
    <div className="login-container">
      {/* Login Header */}
      <h1>Login</h1>
      <p><em>Welcome back! Please log in to continue.</em></p>

      {/* Login Form */}
      <form onSubmit={handleSubmit}>
        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your email" required />
        </div>

        {/* Password Field */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Your password" required />
        </div>

        {/* Login Button */}
        <button type="submit">Login</button>
      </form>

      {/* Signup Link */}
      <div className="signup-link">
        Don’t have an account? <a href="/">Sign up here</a>.
      </div>
    </div>
  );
}

export default Login;
