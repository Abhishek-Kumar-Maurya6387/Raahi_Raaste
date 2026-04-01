import { Link } from "react-router-dom";
import "./Home.css";

const destinations = [
  {
    id: "uttarakhand-char-dham",
    region: "Uttarakhand",
    title: "Char Dham & Kedarnath",
    desc: "Complete pilgrimage + adventure circuit. Snow peaks, valley camps & hidden temples.",
    price: 199,
    days: 12,
    color: "#C4B49A",
  },
  {
    id: "himachal-spiti",
    region: "Himachal Pradesh",
    title: "Manali to Spiti Valley",
    desc: "The legendary cold desert circuit — Rohtang, Kaza, Key Monastery, Chandratal.",
    price: 249,
    days: 10,
    color: "#B5C4C1",
  },
  {
    id: "rajasthan-royal",
    region: "Rajasthan",
    title: "Jaipur · Jodhpur · Jaisalmer",
    desc: "The royal triangle plus desert safari. Forts, havelis & the best budget stays.",
    price: 149,
    days: 7,
    color: "#D4B896",
  },
];

function Home() {
  return (
    <div className="page">
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg-pattern" />
        <p className="hero-tagline">See what others skip</p>
        <h1 className="hero-title">
          Raahi<br />
          <span>Raaste</span>
        </h1>
        <p className="hero-subtitle">Curated Travel Itineraries · India</p>
        <p className="hero-desc">
          Expert-crafted route guides for Uttarakhand, Himachal & Rajasthan.
          Location-wise, budget-wise — every step planned so you can just wander.
        </p>
        <div className="hero-buttons">
          <Link to="/packages" className="btn-primary">Explore Routes</Link>
          <Link to="/contact" className="btn-outline">Contact Us</Link>
        </div>
      </section>

      {/* Destinations */}
      <section className="destinations">
        <div className="container">
          <p className="section-label">Where to go</p>
          <h2 className="section-title">Our Routes</h2>
          <p className="section-desc">
            Hand-picked itineraries covering the roads less taken — with everything
            from hidden dhabas to offbeat trails.
          </p>
          <div className="dest-grid">
            {destinations.map((dest) => (
              <div className="dest-card" key={dest.id}>
                <div
                  className="dest-card-img"
                  style={{ background: dest.color }}
                >
                  <span className="dest-badge">{dest.region}</span>
                </div>
                <div className="dest-card-body">
                  <h3>{dest.title}</h3>
                  <p>{dest.desc}</p>
                  <div className="dest-card-footer">
                    <div className="dest-price">
                      ₹{dest.price} <span>/ {dest.days} days PDF</span>
                    </div>
                    <Link to={`/packages/${dest.id}`} className="dest-link">
                      View Route →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="hiw">
        <div className="container">
          <p className="section-label">Simple process</p>
          <h2 className="section-title" style={{ color: "#ede8df" }}>
            How It Works
          </h2>
          <div className="steps-grid">
            {[
              { num: "01", title: "Browse Routes", desc: "Pick your destination — Uttarakhand, Himachal, or Rajasthan." },
              { num: "02", title: "Choose Your Plan", desc: "Select itinerary that fits your travel style and budget." },
              { num: "03", title: "Pay Securely", desc: "Pay via Razorpay — UPI, cards, net banking. ₹99–₹299 only." },
              { num: "04", title: "Download PDF", desc: "Instant PDF — day-by-day route, stays, costs & local tips." },
            ].map((step) => (
              <div className="step" key={step.num}>
                <div className="step-num">{step.num}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;