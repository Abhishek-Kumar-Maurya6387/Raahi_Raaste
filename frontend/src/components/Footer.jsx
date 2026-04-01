import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-logo">Raahi Raaste</p>
      <p className="footer-tagline">See what others skip</p>
      <ul className="footer-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/packages">Packages</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <p className="footer-copy">
        © {new Date().getFullYear()} Raahi Raaste · Made for wanderers of India
      </p>
    </footer>
  );
}

export default Footer;