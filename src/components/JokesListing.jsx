import '../css/JokesListing.css';

const JokesListing = () => {
  return (
    <div className="container">
      {/* Jokes Header */}
      <h1>Jokes</h1>
      <p><em>Because laughter is the best medicine—even if it’s a little bitter.</em></p>

      {/* Jokes Listing */}
      <div className="jokes-list">
        {/* Joke 1 */}
        <div className="joke-card">
          <p>I told my plants a joke. They didn’t laugh. Guess they’re bitter too.</p>
          <div className="joke-meta">Category: Sarcastic | Posted on October 1, 2023</div>
        </div>

        {/* Joke 2 */}
        <div className="joke-card">
          <p>Why don’t skeletons fight each other? They don’t have the guts.</p>
          <div className="joke-meta">Category: Dark Humor | Posted on September 25, 2023</div>
        </div>

        {/* Joke 3 */}
        <div className="joke-card">
          <p>I’m on a seafood diet. I see food, and I eat it. Especially if it’s free.</p>
          <div className="joke-meta">Category: Witty | Posted on September 20, 2023</div>
        </div>

        {/* Joke 4 */}
        <div className="joke-card">
          <p>I told my computer I needed a break. Now it won’t stop sending me Kit-Kats.</p>
          <div className="joke-meta">Category: Sarcastic | Posted on September 15, 2023</div>
        </div>

        {/* Joke 5 */}
        <div className="joke-card">
          <p>Why did the scarecrow win an award? Because he was outstanding in his field.</p>
          <div className="joke-meta">Category: Witty | Posted on September 10, 2023</div>
        </div>
      </div>
    </div>
  );
}

export default JokesListing;
