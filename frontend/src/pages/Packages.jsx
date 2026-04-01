import { Link } from "react-router-dom";
import "./Packages.css";

const packages = [
  {
    id: "uttarakhand-char-dham",
    region: "Uttarakhand",
    title: "Char Dham & Kedarnath",
    desc: "Complete pilgrimage + adventure circuit — Yamunotri to Badrinath. Snow peaks, valley camps & hidden temples.",
    price: 199,
    days: 12,
    color: "#C4B49A",
    highlights: ["Yamunotri", "Gangotri", "Kedarnath", "Badrinath"],
    budget: "₹8,000 – ₹12,000 per person",
  },
  {
    id: "himachal-spiti",
    region: "Himachal Pradesh",
    title: "Manali to Spiti Valley",
    desc: "The legendary cold desert circuit — Rohtang, Kaza, Key Monastery, Chandratal. Budget breakdown included.",
    price: 249,
    days: 10,
    color: "#B5C4C1",
    highlights: ["Rohtang Pass", "Kaza", "Key Monastery", "Chandratal Lake"],
    budget: "₹10,000 – ₹15,000 per person",
    featured: true,
  },
  {
    id: "rajasthan-royal",
    region: "Rajasthan",
    title: "Jaipur · Jodhpur · Jaisalmer",
    desc: "The royal triangle plus desert safari. Forts, havelis, camel routes & the best budget stays in the Thar.",
    price: 149,
    days: 7,
    color: "#D4B896",
    highlights: ["Amber Fort", "Mehrangarh", "Jaisalmer Fort", "Sam Dunes"],
    budget: "₹6,000 – ₹9,000 per person",
  },
];

function Packages() {
  return (
    <div className="page">
      <section className="packages-hero">
        <div className="container">
          <p className="section-label">All itineraries</p>
          <h1 className="packages-title">Our Routes</h1>
          <p className="packages-desc">
            Hand-picked routes covering the roads less taken — every guide
            includes day-wise plan, budget breakdown, stays & local tips.
          </p>
        </div>
      </section>

      <section className="packages-list">
        <div className="container">
          {packages.map((pkg) => (
            <div
              className={`pkg-card ${pkg.featured ? "pkg-card--featured" : ""}`}
              key={pkg.id}
            >
              {pkg.featured && (
                <div className="pkg-featured-badge">Most Popular</div>
              )}
              <div
                className="pkg-card-img"
                style={{ background: pkg.color }}
              >
                <span className="pkg-region-badge">{pkg.region}</span>
              </div>
              <div className="pkg-card-content">
                <div className="pkg-card-top">
                  <div>
                    <h2 className="pkg-title">{pkg.title}</h2>
                    <p className="pkg-desc">{pkg.desc}</p>
                    <div className="pkg-highlights">
                      {pkg.highlights.map((h) => (
                        <span className="pkg-tag" key={h}>{h}</span>
                      ))}
                    </div>
                  </div>
                  <div className="pkg-card-right">
                    <div className="pkg-meta">
                      <div className="pkg-days">{pkg.days} days</div>
                      <div className="pkg-budget">{pkg.budget}</div>
                    </div>
                    <div className="pkg-price">₹{pkg.price}</div>
                    <p className="pkg-price-label">one-time · instant PDF</p>
                    <Link
                      to={`/packages/${pkg.id}`}
                      className="btn-primary pkg-btn"
                    >
                      View & Buy →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Packages;