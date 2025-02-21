import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <p>© 2025 The Bitter Reality – because life’s too short for fake smiles.</p>
            <p><Link className="nav-link" to="/privacy">Privacy Policy</Link> | <Link className="nav-link" to="/terms">Terms of Use</Link></p>
        </footer>
    )
}

export default Footer;