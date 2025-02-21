import '../css/BlogDetails.css';

const BlogDetails = () => {
    return (
      <div className="container">
        <div className="blog-header">
          <h1>Why Adulting is Overrated</h1>
          <img
            src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-28802-346529.jpg&fm=jpg"
            alt="A cup of coffee on a table, symbolizing adulting and responsibilities"
          />
          <div className="blog-meta">
            <p>By <a href="/">Jane Doe</a> | Published on October 1, 2023</p>
          </div>
        </div>
  
        <div className="blog-content">
          <p>Adulting is like a bitter cup of coffee—necessary but not always enjoyable. Here’s why we need to stop glorifying it.</p>
          <p>Let’s face it: adulting is hard. From paying bills to dealing with responsibilities, it’s a never-ending cycle of stress and exhaustion. But why do we act like it’s some kind of achievement? Spoiler alert: it’s not.</p>
          <p>Here are a few reasons why adulting is overrated:</p>
          <ul>
            <li><strong>Bills, Bills, Bills:</strong> Who knew being an adult meant spending half your paycheck on things you don’t even want?</li>
            <li><strong>Responsibility Overload:</strong> Remember when your biggest worry was finishing homework? Yeah, those were the days.</li>
            <li><strong>No Time for Fun:</strong> Between work, chores, and errands, there’s barely any time left for yourself.</li>
          </ul>
          <p>So, the next time someone brags about how great adulting is, just smile and nod. Deep down, we all know the truth: it’s overrated.</p>
        </div>
  
        <div className="comments">
          <h2>Comments</h2>
  
          {/* Comment Form */}
          <div className="comment-form">
            <textarea placeholder="Join the conversation..."></textarea>
            <button type="submit">Post Comment</button>
          </div>
  
          <div className="comment-list">
            <div className="comment">
              <p>This is so true! Adulting is the worst. Thanks for keeping it real!</p>
              <div className="comment-meta">- John Doe, October 2, 2023</div>
            </div>
  
            <div className="comment">
              <p>I needed this today. Adulting is exhausting, but at least we’re all in it together.</p>
              <div className="comment-meta">- Jane Smith, October 3, 2023</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default BlogDetails;
  