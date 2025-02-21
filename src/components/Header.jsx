import { Link } from "react-router-dom";


const Header = () => {
    return (
        <header>
            <h1>The Bitter Reality</h1>
            <p>Where humor meets honesty – no sugar-coating here.</p>
            <nav>
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/blogs">Blogs</Link>
                <Link className="nav-link" to="/jokes">Jokes</Link>
                <Link className="nav-link" to="/deep-thoughts">Deep Thoughts</Link>
                <Link className="nav-link" to="/about">About Us</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
            </nav>
        </header>
    )
}

export default Header;