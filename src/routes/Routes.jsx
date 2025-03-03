import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import AdminPage from "../pages/AdminPage";
import UserPage from "../pages/UserPage";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from "../components/Homepage";
import About from '../components/About';
import BlogDetails from '../components/BlogDetails';
import BlogListing from '../components/BlogListing';
import ContactUs from '../components/ContactUs';
import Terms from '../components/Terms';
import Privacy from '../components/Privacy';
import JokesListing from '../components/JokesListing';
import DeepThoughts from '../components/DeepThoughts';
import ShowJoke from '../components/ShowJoke';
import MusicPlayer from "../components/MusicPlayer";
import BlogPost from '../components/blogs/BlogPost';
import UserListing from "../components/UserListing";
import ContactUsListing from '../components/ContactUsListing';
import ContactDetails from '../components/ContactDetails';

const PrivateRoute = ({ children, requiredPermissions }) => {
  const { user, permissions } = useContext(AuthContext);

  // Check if user is logged in and has required permissions
  if (!user) {
    return <Navigate to="/login" />;
  }
  if (requiredPermissions && !requiredPermissions.some((p) => permissions.includes(p))) {
    return <Navigate to="/dashboard" />; // Redirect if no permission
  }
  return children;
};

const AppRoutes = () => {
  return (
    <Router>
      <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs/:blogId" element={<BlogDetails />} />
            <Route path="/blogs" element={<BlogListing />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/jokes" element={<JokesListing />} />
            <Route path="/jokes/:jokeId" element={<ShowJoke />} />
            <Route path="/deep-thoughts" element={<DeepThoughts />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/music" element={<MusicPlayer />} />
            <Route
            path="/dashboard"
            element={
              <PrivateRoute requiredPermissions={["admin"]}>
                <Dashboard />
              </PrivateRoute>
            }
            />
            <Route
            path="/blog/create"
            element={
              <PrivateRoute requiredPermissions={["admin","content editor"]}>
                <BlogPost />
              </PrivateRoute>
            }
            />
            <Route
            path="/admin"
            element={
              <PrivateRoute requiredPermissions={["admin","content editor"]}>
                <AdminPage />
              </PrivateRoute>
            }
            />
            <Route
            path="/users"
            element={
              <PrivateRoute requiredPermissions={["admin"]}>
                <UserListing />
              </PrivateRoute>
            }
            />
            <Route
            path="/contacts"
            element={
              <PrivateRoute requiredPermissions={["admin"]}>
                <ContactUsListing />
              </PrivateRoute>
            }
            />
            <Route
            path="/contact/:id"
            element={
              <PrivateRoute requiredPermissions={["admin"]}>
                <ContactDetails />
              </PrivateRoute>
            }
            />
            <Route
            path="/user"
            element={
              <PrivateRoute requiredPermissions={["admin","content editor"]}>
                <UserPage />
              </PrivateRoute>
            }
            />
        </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;