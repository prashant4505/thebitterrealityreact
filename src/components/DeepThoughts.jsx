import '../css/DeepThoughts.css';

const DeepThoughts = () => {
  return (
    <div className="container">
      {/* Deep Thoughts Header */}
      <h1>Deep Thoughts</h1>
      <p><em>Because sometimes, reality hits harder than humor.</em></p>

      {/* Deep Thoughts Listing */}
      <div className="thoughts-list">
        {/* Thought 1 */}
        <div className="thought-card">
          <p>Is happiness just a myth created by coffee companies?</p>
          <div className="thought-meta">- Jane Doe, October 1, 2023</div>
        </div>

        {/* Thought 2 */}
        <div className="thought-card">
          <p>We’re all just stars with amnesia, trying to remember where we came from.</p>
          <div className="thought-meta">- John Smith, September 25, 2023</div>
        </div>

        {/* Thought 3 */}
        <div className="thought-card">
          <p>The more you know, the more you realize how little you know.</p>
          <div className="thought-meta">- Emily Brown, September 20, 2023</div>
        </div>

        {/* Thought 4 */}
        <div className="thought-card">
          <p>If life is a game, why does it feel like I’m always losing?</p>
          <div className="thought-meta">- Anonymous, September 15, 2023</div>
        </div>

        {/* Thought 5 */}
        <div className="thought-card">
          <p>Time is the one thing we can’t buy, yet we waste it so freely.</p>
          <div className="thought-meta">- Jane Doe, September 10, 2023</div>
        </div>
      </div>
    </div>
  );
}

export default DeepThoughts;
