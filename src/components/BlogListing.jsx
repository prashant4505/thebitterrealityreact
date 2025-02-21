import '../css/BlogListing.css';
import { Link } from "react-router-dom";

const BlogListing = () => {
  return (
    <div className="container">
      {/* Blog Header */}
      <h1>Blog</h1>
      <p><em>Raw humor. Unfiltered thoughts. Real-life experiences.</em></p>

      {/* Blog Listing */}
      <div className="blog-list">
        {/* Blog Item 1 */}
        <div className="blog-item">
          <img src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-28802-346529.jpg&fm=jpg" alt="Blog Thumbnail" />
          <div className="blog-content">
            <Link className="nav-link" to="/blog"><h2>Why Adulting is Overrated</h2></Link>
            <p>Adulting is like a bitter cup of coffee—necessary but not always enjoyable. Here’s why we need to stop glorifying it.</p>
            <div className="blog-meta">Published on October 1, 2023</div>
          </div>
        </div>

        {/* Blog Item 2 */}
        <div className="blog-item">
          <img src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-28802-346529.jpg&fm=jpg" alt="Blog Thumbnail" />
          <div className="blog-content">
            <Link className="nav-link" to="/blog"><h2>The Art of Sarcasm</h2></Link>
            <p>Sarcasm is the language of the wise. Learn how to master it without offending everyone around you.</p>
            <div className="blog-meta">Published on September 25, 2023</div>
          </div>
        </div>

        {/* Blog Item 3 */}
        <div className="blog-item">
          <img src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-28802-346529.jpg&fm=jpg" alt="Blog Thumbnail" />
          <div className="blog-content">
            <Link className="nav-link" to="/blog"><h2>10 Signs You’re a Coffee Addict</h2></Link>
            <p>If your blood type is espresso, this one’s for you. Here are 10 undeniable signs you’re a coffee addict.</p>
            <div className="blog-meta">Published on September 15, 2023</div>
          </div>
        </div>

        {/* Blog Item 4 */}
        <div className="blog-item">
          <img src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-28802-346529.jpg&fm=jpg" alt="Blog Thumbnail" />
          <div className="blog-content">
            <Link className="nav-link" to="/blog"><h2>Is Happiness Just a Myth?</h2></Link>
            <p>We’re all chasing happiness, but is it even real? Let’s dive into the bittersweet truth.</p>
            <div className="blog-meta">Published on September 10, 2023</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogListing;
