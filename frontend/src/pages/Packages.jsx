import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";
import "./Packages.css";

const packages = [
  {
    id: "uttarakhand-char-dham",
    region: "Uttarakhand",
    title: "Char Dham & Kedarnath",
    desc_en: "Complete pilgrimage + adventure circuit — Yamunotri to Badrinath. Snow peaks, valley camps & hidden temples.",
    desc_hi: "Poora pilgrimage + adventure circuit — Yamunotri se Badrinath. Snow peaks, valley camps & hidden temples.",
    price: 199,
    days: 12,
    color: "#C4B49A",
    highlights: ["Yamunotri", "Gangotri", "Kedarnath", "Badrinath"],
    budget: "₹8,000 – ₹12,000",
  },
  {
    id: "himachal-spiti",
    region: "Himachal Pradesh",
    title: "Manali to Spiti Valley",
    desc_en: "The legendary cold desert circuit — Rohtang, Kaza, Key Monastery, Chandratal. Budget breakdown included.",
    desc_hi: "Legendary cold desert circuit — Rohtang, Kaza, Key Monastery, Chandratal. Budget breakdown included.",
    price: 249,
    days: 10,
    color: "#B5C4C1",
    highlights: ["Rohtang Pass", "Kaza", "Key Monastery", "Chandratal Lake"],
    budget: "₹10,000 – ₹15,000",
    featured: true,
  },
  {
    id: "rajasthan-royal",
    region: "Rajasthan",
    title: "Jaipur · Jodhpur · Jaisalmer",
    desc_en: "The royal triangle plus desert safari. Forts, havelis, camel routes & the best budget stays in the Thar.",
    desc_hi: "Royal triangle plus desert safari. Forts, havelis, camel routes & Thar ke best budget stays.",
    price: 149,
    days: 7,
    color: "#D4B896",
    highlights: ["Amber Fort", "Mehrangarh", "Jaisalmer Fort", "Sam Dunes"],
    budget: "₹6,000 – ₹9,000",
  },
];

function Packages() {
  const { lang } = useLanguage();
  const t = (key) => translations[key]?.[lang === "hinglish" ? "hi" : "en"] || translations[key]?.en || key;
  const isHi = lang === "hinglish";

  return (
    <div className="page">
      <section className="packages-hero">
        <div className="container">
          <p className="section-label">{t("pkg_label")}</p>
          <h1 className="packages-title">{t("pkg_title")}</h1>
          <p className="packages-desc">{t("pkg_desc")}</p>
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
                <div className="pkg-featured-badge">{t("pkg_popular")}</div>
              )}
              <div className="pkg-card-img" style={{ background: pkg.color }}>
                <span className="pkg-region-badge">{pkg.region}</span>
              </div>
              <div className="pkg-card-content">
                <div className="pkg-card-top">
                  <div>
                    <h2 className="pkg-title">{pkg.title}</h2>
                    <p className="pkg-desc">{isHi ? pkg.desc_hi : pkg.desc_en}</p>
                    <div className="pkg-highlights">
                      {pkg.highlights.map((h) => (
                        <span className="pkg-tag" key={h}>{h}</span>
                      ))}
                    </div>
                  </div>
                  <div className="pkg-card-right">
                    <div className="pkg-meta">
                      <div className="pkg-days">{pkg.days} {t("pkg_days")}</div>
                      <div className="pkg-budget">{t("pkg_budget_label")}: {pkg.budget}</div>
                    </div>
                    <div className="pkg-price">₹{pkg.price}</div>
                    <p className="pkg-price-label">{t("pkg_onetime")}</p>
                    <Link to={`/packages/${pkg.id}`} className="btn-primary pkg-btn">
                      {t("pkg_view_buy")}
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