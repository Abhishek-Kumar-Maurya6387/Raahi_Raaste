import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";
import "./Home.css";

const destinations = [
  {
    id: "uttarakhand-char-dham",
    region: "Uttarakhand",
    title: "Char Dham & Kedarnath",
    desc_en: "Complete pilgrimage + adventure circuit. Snow peaks, valley camps & hidden temples.",
    desc_hi: "Poora pilgrimage + adventure circuit. Snow peaks, valley camps & hidden temples.",
    price: 199,
    days: 12,
    color: "#C4B49A",
  },
  {
    id: "himachal-spiti",
    region: "Himachal Pradesh",
    title: "Manali to Spiti Valley",
    desc_en: "The legendary cold desert circuit — Rohtang, Kaza, Key Monastery, Chandratal.",
    desc_hi: "Legendary cold desert circuit — Rohtang, Kaza, Key Monastery, Chandratal.",
    price: 249,
    days: 10,
    color: "#B5C4C1",
  },
  {
    id: "rajasthan-royal",
    region: "Rajasthan",
    title: "Jaipur · Jodhpur · Jaisalmer",
    desc_en: "The royal triangle plus desert safari. Forts, havelis & the best budget stays.",
    desc_hi: "Royal triangle plus desert safari. Forts, havelis & best budget stays.",
    price: 149,
    days: 7,
    color: "#D4B896",
  },
];

function Home() {
  const { lang } = useLanguage();
  const t = (key) => translations[key]?.[lang === "hinglish" ? "hi" : "en"] || translations[key]?.en || key;
  const isHi = lang === "hinglish";

  return (
    <div className="page">
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg-pattern" />
        <p className="hero-tagline">{t("hero_tagline")}</p>
        <h1 className="hero-title">
          Raahi<br />
          <span>Raaste</span>
        </h1>
        <p className="hero-subtitle">{t("hero_subtitle")}</p>
        <p className="hero-desc">{t("hero_desc")}</p>
        <div className="hero-buttons">
          <Link to="/packages" className="btn-primary">{t("hero_btn_explore")}</Link>
          <Link to="/contact" className="btn-outline">{t("hero_btn_contact")}</Link>
        </div>
      </section>

      {/* Destinations */}
      <section className="destinations">
        <div className="container">
          <p className="section-label">{t("dest_label")}</p>
          <h2 className="section-title">{t("dest_title")}</h2>
          <p className="section-desc">{t("dest_desc")}</p>
          <div className="dest-grid">
            {destinations.map((dest) => (
              <div className="dest-card" key={dest.id}>
                <div className="dest-card-img" style={{ background: dest.color }}>
                  <span className="dest-badge">{dest.region}</span>
                </div>
                <div className="dest-card-body">
                  <h3>{dest.title}</h3>
                  <p>{isHi ? dest.desc_hi : dest.desc_en}</p>
                  <div className="dest-card-footer">
                    <div className="dest-price">
                      ₹{dest.price} <span>/ {dest.days} {t("pkg_days")} {t("dest_pdf")}</span>
                    </div>
                    <Link to={`/packages/${dest.id}`} className="dest-link">
                      {t("dest_view")}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="hiw">
        <div className="container">
          <p className="section-label">{t("hiw_label")}</p>
          <h2 className="section-title" style={{ color: "#ede8df" }}>
            {t("hiw_title")}
          </h2>
          <div className="steps-grid">
            {[
              { num: "01", title: t("hiw_step1_title"), desc: t("hiw_step1_desc") },
              { num: "02", title: t("hiw_step2_title"), desc: t("hiw_step2_desc") },
              { num: "03", title: t("hiw_step3_title"), desc: t("hiw_step3_desc") },
              { num: "04", title: t("hiw_step4_title"), desc: t("hiw_step4_desc") },
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