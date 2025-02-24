import "../css/JokesListing.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Preloader from "./Preloader";

const JokesListing = () => {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.thebitterreality.com/api/jokes")
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setJokes(data.data);
        } else {
          setError("Failed to fetch jokes");
        }
      })
      .catch((err) => setError("Error fetching jokes"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Preloader />;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="container">
      <h1>Jokes</h1>
      <p><em>Because laughter is the best medicine—even if it’s a little bitter.</em></p>

      <div className="jokes-list">
        {jokes.length > 0 ? (
          jokes.map((joke) => (
            <div key={joke.id} className="joke-card">
              <Link className="nav-link" to={`/jokes/${joke.id}`}><h3>{joke.title}</h3></Link>
              <div className="joke-meta">Category: {joke.category} | Posted on {new Date(joke.created_at).toDateString()}</div>
            </div>
          ))
        ) : (
          <p>No jokes available.</p>
        )}
      </div>
    </div>
  );
};

export default JokesListing;
