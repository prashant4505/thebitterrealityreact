import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import About from './components/About';
import BlogDetails from './components/BlogDetails';
import BlogListing from './components/BlogListing';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import JokesListing from './components/JokesListing';
import DeepThoughts from './components/DeepThoughts';
import ShowJoke from './components/ShowJoke';

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs/:blogId" element={<BlogDetails />} />
          <Route path="/blogs" element={<BlogListing />} />
          <Route path="/jokes" element={<JokesListing />} />
          <Route path="/jokes/:jokeId" element={<ShowJoke />} />
          <Route path="/deep-thoughts" element={<DeepThoughts />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
