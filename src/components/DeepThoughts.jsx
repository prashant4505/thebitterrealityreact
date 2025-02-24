import { useEffect, useState } from "react";
import "../css/DeepThoughts.css";
import Preloader from "./Preloader";

const DeepThoughts = () => {
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchThoughts = async () => {
      try {
        const response = await fetch("https://api.thebitterreality.com/api/deep-thoughts");
        const data = await response.json();
        setThoughts(data);
      } catch (error) {
        console.error("Error fetching deep thoughts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchThoughts();
  }, []);

  return (
    <div className="container">
      <h1>Deep Thoughts</h1>
      <p><em>Because sometimes, reality hits harder than humor.</em></p>

      {loading ? (
        <Preloader />
      ) : (
        <div className="thoughts-list">
          {thoughts.length > 0 ? (
            thoughts.map((thought) => (
              <div key={thought.id} className="thought-card">
                <p>{thought.content}</p>
                <div className="thought-meta">
                  - {thought.user.name}, {new Date(thought.created_at).toLocaleDateString()}
                </div>
              </div>
            ))
          ) : (
            <p>No thoughts available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default DeepThoughts;
