import { useParams, Link, useNavigate } from "react-router-dom";
import "./PackageDetail.css";

const packages = {
  "uttarakhand-char-dham": {
    id: "uttarakhand-char-dham",
    region: "Uttarakhand",
    title: "Char Dham & Kedarnath",
    desc: "Complete pilgrimage + adventure circuit — Yamunotri to Badrinath. Snow peaks, valley camps & hidden temples. This guide covers every detail so you can focus on the journey.",
    price: 199,
    days: 12,
    color: "#C4B49A",
    budget: "₹8,000 – ₹12,000 per person",
    bestTime: "May – June, Sep – Oct",
    itinerary: [
      { day: 1, place: "Dehradun → Barkot", desc: "Drive to base. Stay at Barkot dharmashala." },
      { day: 2, place: "Yamunotri Dham", desc: "Trek 6km to Yamunotri temple. Return to Barkot." },
      { day: 3, place: "Barkot → Uttarkashi", desc: "Scenic drive through pine forests." },
      { day: 4, place: "Gangotri Dham", desc: "Visit Gangotri temple, Bhagirathi river." },
      { day: 5, place: "Uttarkashi → Guptkashi", desc: "Long drive, rest day." },
      { day: 6, place: "Kedarnath Trek", desc: "16km trek up to Kedarnath temple. Stay in camp." },
      { day: 7, place: "Kedarnath → Guptkashi", desc: "Morning darshan, trek down, drive back." },
      { day: 8, place: "Guptkashi → Badrinath", desc: "Drive via Joshimath. Check in." },
      { day: 9, place: "Badrinath Dham", desc: "Morning aarti at Badrinath temple. Mana village visit." },
      { day: 10, place: "Badrinath → Rudraprayag", desc: "Return journey starts." },
      { day: 11, place: "Rudraprayag → Rishikesh", desc: "Stop at Devprayag sangam." },
      { day: 12, place: "Rishikesh → Dehradun", desc: "Morning ghats visit, return home." },
    ],
    includes: ["Day-wise route map", "Budget stays list", "Permit details", "Local transport tips", "Dharmashala contacts", "Emergency numbers"],
  },
  "himachal-spiti": {
    id: "himachal-spiti",
    region: "Himachal Pradesh",
    title: "Manali to Spiti Valley",
    desc: "The legendary cold desert circuit — Rohtang, Kaza, Key Monastery, Chandratal. Budget breakdown included for every day of the trip.",
    price: 249,
    days: 10,
    color: "#B5C4C1",
    budget: "₹10,000 – ₹15,000 per person",
    bestTime: "June – September",
    itinerary: [
      { day: 1, place: "Manali", desc: "Acclimatize. Explore Old Manali. Stay in hostel." },
      { day: 2, place: "Manali → Kaza", desc: "Cross Rohtang Pass, Kunzum Pass. Arrive Kaza." },
      { day: 3, place: "Kaza local", desc: "Key Monastery, Kibber village, Chicham bridge." },
      { day: 4, place: "Kaza → Langza", desc: "Fossil village, Buddha statue, stargazing." },
      { day: 5, place: "Hikkim & Komic", desc: "World's highest post office. Komic monastery." },
      { day: 6, place: "Kaza → Mud village", desc: "Pin Valley drive, Mud village trek." },
      { day: 7, place: "Chandratal Lake", desc: "Drive to Chandratal. Camp by the lake." },
      { day: 8, place: "Chandratal → Manali", desc: "Return via Rohtang or Atal tunnel." },
      { day: 9, place: "Manali rest", desc: "Hot spring at Vashisht. Pack up." },
      { day: 10, place: "Manali → Home", desc: "Departure. Overnight bus to Delhi optional." },
    ],
    includes: ["Day-wise route map", "Permit requirements", "Best campsites list", "Budget breakdown per day", "Bike vs bus comparison", "Altitude sickness tips"],
  },
  "rajasthan-royal": {
    id: "rajasthan-royal",
    region: "Rajasthan",
    title: "Jaipur · Jodhpur · Jaisalmer",
    desc: "The royal triangle plus desert safari. Forts, havelis, camel routes & the best budget stays in the Thar desert.",
    price: 149,
    days: 7,
    color: "#D4B896",
    budget: "₹6,000 – ₹9,000 per person",
    bestTime: "Oct – March",
    itinerary: [
      { day: 1, place: "Jaipur arrival", desc: "Check in. Evening at Chokhi Dhani." },
      { day: 2, place: "Jaipur sightseeing", desc: "Amber Fort, Hawa Mahal, City Palace, Jantar Mantar." },
      { day: 3, place: "Jaipur → Jodhpur", desc: "Train/bus. Arrive evening. Explore clock tower market." },
      { day: 4, place: "Jodhpur", desc: "Mehrangarh Fort, Jaswant Thada, Umaid Bhawan." },
      { day: 5, place: "Jodhpur → Jaisalmer", desc: "Bus ride through desert. Arrive Jaisalmer." },
      { day: 6, place: "Jaisalmer", desc: "Golden Fort, Patwon ki Haveli. Evening desert safari + camp." },
      { day: 7, place: "Sam Dunes → Departure", desc: "Sunrise at dunes. Return journey." },
    ],
    includes: ["Day-wise route map", "Best budget hotels list", "Train & bus schedule tips", "Desert safari guide", "Food spots per city", "Shopping tips & bargaining guide"],
  },
};

function PackageDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const pkg = packages[id];

  if (!pkg) {
    return (
      <div className="page" style={{ textAlign: "center", padding: "8rem 2rem" }}>
        <h2>Package not found</h2>
        <Link to="/packages" className="btn-primary" style={{ marginTop: "1.5rem", display: "inline-block" }}>
          Back to Packages
        </Link>
      </div>
    );
  }

  return (
    <div className="page">
      {/* Header */}
      <div className="detail-hero" style={{ background: pkg.color }}>
        <div className="container">
          <p className="detail-region">{pkg.region}</p>
          <h1 className="detail-title">{pkg.title}</h1>
          <div className="detail-meta">
            <span>{pkg.days} days</span>
            <span>·</span>
            <span>Best time: {pkg.bestTime}</span>
            <span>·</span>
            <span>Trip budget: {pkg.budget}</span>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="detail-layout">
          {/* Left — itinerary */}
          <div className="detail-left">
            <p className="detail-desc">{pkg.desc}</p>

            <h3 className="detail-section-heading">Day-wise Itinerary</h3>
            <div className="itinerary-list">
              {pkg.itinerary.map((item) => (
                <div className="itinerary-item" key={item.day}>
                  <div className="itinerary-day">Day {item.day}</div>
                  <div className="itinerary-content">
                    <strong>{item.place}</strong>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="detail-section-heading">What's Included in PDF</h3>
            <ul className="includes-list">
              {pkg.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Right — buy card */}
          <div className="detail-right">
            <div className="buy-card">
              <p className="buy-label">Get Full Itinerary PDF</p>
              <div className="buy-price">₹{pkg.price}</div>
              <p className="buy-sublabel">One-time payment · Instant download</p>
              <ul className="buy-features">
                <li>✓ {pkg.days}-day detailed plan</li>
                <li>✓ Budget breakdown</li>
                <li>✓ Stays & transport</li>
                <li>✓ Offline PDF — no internet needed</li>
              </ul>
              <button
                className="btn-primary buy-btn"
                onClick={() => navigate(`/checkout/${pkg.id}`)}
              >
                Buy Now — ₹{pkg.price}
              </button>
              <p className="buy-note">
                Payment via Razorpay · UPI · Cards · Net Banking
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PackageDetail;