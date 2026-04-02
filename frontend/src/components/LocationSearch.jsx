import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "./LocationSearch.css";

// Real icons from assets/icons
import kedarnathImg from "../assets/icons/Kedarnath.png";
import tajMahalImg from "../assets/icons/taj-mahal.png";
import spitiImg from "../assets/icons/Spiti.png";
import hawamahalImg from "../assets/icons/hawa-mahal.png";
import banarasImg from "../assets/icons/banaras.png";
import gatewayImg from "../assets/icons/gateway.png";
import hampiImg from "../assets/icons/Hampi-.png";
import haridwarImg from "../assets/icons/Haridwar.png";
import lotusImg from "../assets/icons/lotus-temple.png";
import mysoreImg from "../assets/icons/mysore.png";
import nainitalImg from "../assets/icons/Nainital.png";
import rishikeshImg from "../assets/icons/Rishikesh.png";

const topLocations = [
  { name: "Kedarnath", state: "Uttarakhand", img: kedarnathImg, available: true, route: "uttarakhand-char-dham" },
  { name: "Spiti Valley", state: "Himachal Pradesh", img: spitiImg, available: true, route: "himachal-spiti" },
  { name: "Hawa Mahal", state: "Rajasthan", img: hawamahalImg, available: true, route: "rajasthan-royal" },
  { name: "Taj Mahal", state: "Uttar Pradesh", img: tajMahalImg, available: false },
  { name: "Varanasi", state: "Uttar Pradesh", img: banarasImg, available: false },
  { name: "Gateway of India", state: "Maharashtra", img: gatewayImg, available: false },
  { name: "Hampi", state: "Karnataka", img: hampiImg, available: false },
  { name: "Haridwar", state: "Uttarakhand", img: haridwarImg, available: true, route: "uttarakhand-char-dham" },
  { name: "Lotus Temple", state: "Delhi", img: lotusImg, available: false },
  { name: "Mysore Palace", state: "Karnataka", img: mysoreImg, available: false },
  { name: "Nainital", state: "Uttarakhand", img: nainitalImg, available: false },
  { name: "Rishikesh", state: "Uttarakhand", img: rishikeshImg, available: true, route: "uttarakhand-char-dham" },
];

const allSearchPlaces = [
  { name: "Kedarnath", state: "Uttarakhand", available: true, route: "uttarakhand-char-dham" },
  { name: "Char Dham", state: "Uttarakhand", available: true, route: "uttarakhand-char-dham" },
  { name: "Badrinath", state: "Uttarakhand", available: true, route: "uttarakhand-char-dham" },
  { name: "Gangotri", state: "Uttarakhand", available: true, route: "uttarakhand-char-dham" },
  { name: "Yamunotri", state: "Uttarakhand", available: true, route: "uttarakhand-char-dham" },
  { name: "Rishikesh", state: "Uttarakhand", available: true, route: "uttarakhand-char-dham" },
  { name: "Haridwar", state: "Uttarakhand", available: true, route: "uttarakhand-char-dham" },
  { name: "Manali", state: "Himachal Pradesh", available: true, route: "himachal-spiti" },
  { name: "Spiti Valley", state: "Himachal Pradesh", available: true, route: "himachal-spiti" },
  { name: "Kaza", state: "Himachal Pradesh", available: true, route: "himachal-spiti" },
  { name: "Chandratal", state: "Himachal Pradesh", available: true, route: "himachal-spiti" },
  { name: "Jaipur", state: "Rajasthan", available: true, route: "rajasthan-royal" },
  { name: "Jaisalmer", state: "Rajasthan", available: true, route: "rajasthan-royal" },
  { name: "Jodhpur", state: "Rajasthan", available: true, route: "rajasthan-royal" },
  { name: "Varanasi", state: "Uttar Pradesh", available: false },
  { name: "Banaras", state: "Uttar Pradesh", available: false },
  { name: "Taj Mahal", state: "Uttar Pradesh", available: false },
  { name: "Agra", state: "Uttar Pradesh", available: false },
  { name: "Goa", state: "Goa", available: false },
  { name: "Hampi", state: "Karnataka", available: false },
  { name: "Ladakh", state: "J&K / Ladakh", available: false },
  { name: "Kerala Backwaters", state: "Kerala", available: false },
  { name: "Darjeeling", state: "West Bengal", available: false },
  { name: "Munnar", state: "Kerala", available: false },
  { name: "Mysore", state: "Karnataka", available: false },
  { name: "Shimla", state: "Himachal Pradesh", available: false },
  { name: "Dharamshala", state: "Himachal Pradesh", available: false },
  { name: "Nainital", state: "Uttarakhand", available: false },
  { name: "Mussoorie", state: "Uttarakhand", available: false },
  { name: "Lotus Temple", state: "Delhi", available: false },
  { name: "Gateway of India", state: "Maharashtra", available: false },
  { name: "Haridwar", state: "Uttarakhand", available: true, route: "uttarakhand-char-dham" },
];

export default function LocationSearch() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalPlace, setModalPlace] = useState("");
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const isHi = lang === "hinglish";

  const handleSearch = (val) => {
    setQuery(val);
    if (!val.trim()) { setSuggestions([]); return; }
    const matches = allSearchPlaces.filter((p) =>
      p.name.toLowerCase().startsWith(val.toLowerCase()) ||
      p.state.toLowerCase().includes(val.toLowerCase())
    ).slice(0, 4);
    setSuggestions(matches);
  };

  const handleClick = (place) => {
    if (place.available && place.route) {
      navigate(`/packages/${place.route}`);
    } else {
      setModalPlace(place.name);
      setShowModal(true);
    }
    setQuery("");
    setSuggestions([]);
  };

  return (
    <div className="ls-wrap">
      <p className="section-label">
        {isHi ? "India Explore Karo" : "Explore India"}
      </p>
      <h2 className="ls-title">
        {isHi ? "Kahan Jana Chahte Ho?" : "Where Do You Want to Go?"}
      </h2>

      {/* Search Bar */}
      <div className="ls-search-wrap">
        <svg className="ls-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <input
          className="ls-search-input"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder={isHi ? "Search karo... (Manali, Varanasi, Goa...)" : "Search destinations... (Manali, Varanasi, Goa...)"}
        />
        {query && (
          <button className="ls-clear" onClick={() => { setQuery(""); setSuggestions([]); }}>✕</button>
        )}
        {suggestions.length > 0 && (
          <div className="ls-suggestions">
            {suggestions.map((p) => (
              <div key={p.name} className="ls-suggestion-item" onClick={() => handleClick(p)}>
                <span className="ls-suggestion-name">{p.name}</span>
                <span className="ls-suggestion-state">
                  {p.available
                    ? (isHi ? "✓ Available" : "✓ Available")
                    : (isHi ? "Jald Aayega" : "Coming Soon")}
                  · {p.state}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Top 12 Locations Grid */}
      <div className="ls-grid">
        {topLocations.map((loc) => (
          <div
            key={loc.name}
            className={`ls-card ${loc.available ? "ls-card--available" : "ls-card--soon"}`}
            onClick={() => handleClick(loc)}
          >
            <div className="ls-img-wrap">
              <img src={loc.img} alt={loc.name} className="ls-img" />
            </div>
            <div className="ls-card-name">{loc.name}</div>
            <div className="ls-card-state">{loc.state}</div>
            {loc.available ? (
              <span className="ls-badge ls-badge--available">
                {isHi ? "Available" : "Available"}
              </span>
            ) : (
              <span className="ls-badge ls-badge--soon">
                {isHi ? "Jald Aayega" : "Coming Soon"}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Coming Soon Modal */}
      {showModal && (
        <div className="ls-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="ls-modal" onClick={(e) => e.stopPropagation()}>
            <div className="ls-modal-icon">🗺️</div>
            <h3 className="ls-modal-title">
              {isHi ? `${modalPlace} — Raasta Ban Raha Hai!` : `${modalPlace} — Route is Being Crafted!`}
            </h3>
            <p className="ls-modal-desc">
              {isHi
                ? `Hum ${modalPlace} ka poora itinerary tैयar kar rahe hain. Jald hi yahan milega — tab tak in available routes ko explore karo!`
                : `We're crafting a detailed itinerary for ${modalPlace}. It'll be here soon — explore our available routes till then!`}
            </p>
            <div className="ls-modal-buttons">
              <button
                className="btn-primary"
                onClick={() => { setShowModal(false); navigate("/packages"); }}
              >
                {isHi ? "Available Routes Dekho →" : "View Available Routes →"}
              </button>
              <button className="ls-modal-close" onClick={() => setShowModal(false)}>
                {isHi ? "Baad Mein" : "Maybe Later"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}