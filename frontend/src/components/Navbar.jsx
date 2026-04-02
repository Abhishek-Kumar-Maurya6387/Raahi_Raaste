import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();
  const { lang, toggleLang } = useLanguage();
  const t = (key) => translations[key]?.[lang === "hinglish" ? "hi" : "en"] || translations[key]?.en || key;

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Raahi Raaste
      </Link>
      <ul className="navbar-links">
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            {t("nav_home")}
          </Link>
        </li>
        <li>
          <Link to="/packages" className={location.pathname === "/packages" ? "active" : ""}>
            {t("nav_packages")}
          </Link>
        </li>
        <li>
          <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
            {t("nav_contact")}
          </Link>
        </li>
      </ul>

      <div className="navbar-right">
        {/* Language Toggle */}
        <div className="lang-toggle">
          <button
            className={`lang-btn ${lang === "hinglish" ? "active" : ""}`}
            onClick={() => toggleLang("hinglish")}
          >
            🇮🇳 Hinglish
          </button>
          <button
            className={`lang-btn ${lang === "english" ? "active" : ""}`}
            onClick={() => toggleLang("english")}
          >
            🇬🇧 English
          </button>
        </div>
        <Link to="/packages" className="navbar-cta">
          {t("nav_cta")}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;