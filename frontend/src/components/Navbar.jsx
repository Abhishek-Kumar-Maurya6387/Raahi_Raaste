import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Raahi Raaste
      </Link>
      <ul className="navbar-links">
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/packages"
            className={location.pathname === "/packages" ? "active" : ""}
          >
            Packages
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
          >
            Contact
          </Link>
        </li>
      </ul>
      <Link to="/packages" className="navbar-cta">
        Get Itinerary
      </Link>
    </nav>
  );
}

export default Navbar;