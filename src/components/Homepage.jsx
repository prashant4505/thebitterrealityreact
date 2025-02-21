import { Link } from "react-router-dom";

const Homepage = () => {
    return (
        <div className="content-area">
            <section class="hero">
                <div>
                <h2>Welcome to The Bitter Reality</h2>
                <p>Raw humor. Unfiltered thoughts. Real-life experiences.</p>
                <Link className="nav-link" to="/blogs"><button>Explore Now</button></Link>
                </div>
            </section>
            <section class="featured">
                <h3>Featured Content</h3>
                <div class="featured-grid">
                <div class="featured-item">
                    <h4>Latest Blog</h4>
                    <p>Why adulting is overrated – a bitter take.</p>
                </div>
                <div class="featured-item">
                    <h4>Trending Joke</h4>
                    <p>I told my plants a joke. They didn’t laugh. Guess they’re bitter too.</p>
                </div>
                <div class="featured-item">
                    <h4>Deep Thought</h4>
                    <p>Is happiness just a myth created by coffee companies?</p>
                </div>
                </div>
            </section>
        </div>
    )
}

export default Homepage;