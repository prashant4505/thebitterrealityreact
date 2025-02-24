import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import '../css/ShowJoke.css';
import Preloader from "./Preloader";

const ShowJoke = () => {
  const [joke, setJoke] = useState(null);  // State to store joke data
  const { jokeId } = useParams();

  // Fetch joke data from API
  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const response = await fetch(`https://api.thebitterreality.com/api/jokes/${jokeId}`);
        const data = await response.json();
        if (data.success) {
          setJoke(data.data);  // Store the joke data in state
        }
      } catch (error) {
        console.error("Error fetching joke:", error);
      }
    };

    fetchJoke();
  }, [jokeId]);  // Only run when jokeId changes

  if (!joke) {
    return <Preloader />; // Show loading state until the data is fetched
  }

  return (
    <div className="container">
      <h1>{joke.title}</h1>
      <div className="joke-card">
        <p>{joke.description}</p>
        <div className="joke-meta">
          Category: {joke.category} | Posted on {new Date(joke.created_at).toLocaleDateString()}
        </div>
      </div>

      {/* Static Content for Encouragement */}
      <div className="static-content">
        <h3>Laughing is Important in Life!</h3>
        <p>When we laugh, both our mind and body stay healthy. Laughing is a natural stress-buster, and it keeps you happy. So if you're laughing more in life, you're on the path to better health!</p>

        <p>Our goal is to give people another reason to laugh. If you have a fun joke or idea you'd like to share with us, let us know via the "Contact Us" form. We'll work on your idea, and you may even get a special shout-out for your contribution!</p>

        <h3>Keep Laughing and Stay Healthy!</h3>
        <p>Laughing isn't just important—it's essential for our well-being. Whether it's a small or big joke, never forget to laugh and stay healthy!</p>
      </div>
    </div>
  );
};

export default ShowJoke;
