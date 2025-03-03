import { Link } from "react-router-dom";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <p>© {currentYear} The Bitter Reality – because life’s too short for fake smiles.</p>
            <p><Link className="nav-link" to="/privacy">Privacy Policy</Link> | <Link className="nav-link" to="/terms">Terms of Use</Link></p>
        </footer>
    )
}

export default Footer;