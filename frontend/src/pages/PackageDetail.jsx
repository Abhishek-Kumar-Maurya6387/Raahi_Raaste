import { useParams, Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";
import "./PackageDetail.css";

const packages = {
  "uttarakhand-char-dham": {
    id: "uttarakhand-char-dham",
    region: "Uttarakhand",
    title: "Char Dham & Kedarnath",
    desc_en: "Complete pilgrimage + adventure circuit — Yamunotri to Badrinath. Snow peaks, valley camps & hidden temples. This guide covers every detail so you can focus on the journey.",
    desc_hi: "Poora pilgrimage + adventure circuit — Yamunotri se Badrinath. Snow peaks, valley camps & hidden temples. Ye guide har detail cover karta hai taaki tum sirf safar pe dhyan do.",
    price: 199,
    days: 12,
    color: "#C4B49A",
    budget: "₹8,000 – ₹12,000 per person",
    bestTime_en: "May – June, Sep – Oct",
    bestTime_hi: "May – June, Sep – Oct",
    itinerary_en: [
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
    itinerary_hi: [
      { day: 1, place: "Dehradun → Barkot", desc: "Base pe pahuncho. Barkot dharmashala mein ruko." },
      { day: 2, place: "Yamunotri Dham", desc: "6km trek Yamunotri mandir tak. Barkot wapas." },
      { day: 3, place: "Barkot → Uttarkashi", desc: "Pine forests ke beech se scenic drive." },
      { day: 4, place: "Gangotri Dham", desc: "Gangotri mandir, Bhagirathi nadi darshan." },
      { day: 5, place: "Uttarkashi → Guptkashi", desc: "Lamba safar, rest day." },
      { day: 6, place: "Kedarnath Trek", desc: "16km trek Kedarnath mandir tak. Camp mein raat." },
      { day: 7, place: "Kedarnath → Guptkashi", desc: "Subah darshan, trek neeche, drive wapas." },
      { day: 8, place: "Guptkashi → Badrinath", desc: "Joshimath se hote hue drive. Check in." },
      { day: 9, place: "Badrinath Dham", desc: "Subah Badrinath aarti. Mana gaon ghoomna." },
      { day: 10, place: "Badrinath → Rudraprayag", desc: "Wapsi ka safar shuru." },
      { day: 11, place: "Rudraprayag → Rishikesh", desc: "Devprayag sangam pe rukna." },
      { day: 12, place: "Rishikesh → Dehradun", desc: "Subah ghats, ghar wapsi." },
    ],
    includes_en: ["Day-wise route map", "Budget stays list", "Permit details", "Local transport tips", "Dharmashala contacts", "Emergency numbers"],
    includes_hi: ["Din-wise route map", "Budget stays ki list", "Permit details", "Local transport tips", "Dharmashala contacts", "Emergency numbers"],
  },
  "himachal-spiti": {
    id: "himachal-spiti",
    region: "Himachal Pradesh",
    title: "Manali to Spiti Valley",
    desc_en: "The legendary cold desert circuit — Rohtang, Kaza, Key Monastery, Chandratal. Budget breakdown included for every day of the trip.",
    desc_hi: "Legendary cold desert circuit — Rohtang, Kaza, Key Monastery, Chandratal. Har din ka budget breakdown included.",
    price: 249,
    days: 10,
    color: "#B5C4C1",
    budget: "₹10,000 – ₹15,000 per person",
    bestTime_en: "June – September",
    bestTime_hi: "June – September",
    itinerary_en: [
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
    itinerary_hi: [
      { day: 1, place: "Manali", desc: "Acclimatize karo. Old Manali ghoomna. Hostel mein ruko." },
      { day: 2, place: "Manali → Kaza", desc: "Rohtang Pass, Kunzum Pass cross karo. Kaza pahuncho." },
      { day: 3, place: "Kaza local", desc: "Key Monastery, Kibber gaon, Chicham bridge." },
      { day: 4, place: "Kaza → Langza", desc: "Fossil gaon, Buddha statue, taron ki raat." },
      { day: 5, place: "Hikkim & Komic", desc: "Duniya ka sabse uncha post office. Komic monastery." },
      { day: 6, place: "Kaza → Mud village", desc: "Pin Valley drive, Mud gaon trek." },
      { day: 7, place: "Chandratal Lake", desc: "Chandratal drive. Jheel ke kinare camp." },
      { day: 8, place: "Chandratal → Manali", desc: "Rohtang ya Atal tunnel se wapsi." },
      { day: 9, place: "Manali rest", desc: "Vashisht hot spring. Packing." },
      { day: 10, place: "Manali → Ghar", desc: "Wapsi. Delhi ke liye overnight bus optional." },
    ],
    includes_en: ["Day-wise route map", "Permit requirements", "Best campsites list", "Budget breakdown per day", "Bike vs bus comparison", "Altitude sickness tips"],
    includes_hi: ["Din-wise route map", "Permit requirements", "Best campsites ki list", "Har din ka budget breakdown", "Bike vs bus comparison", "Altitude sickness tips"],
  },
  "rajasthan-royal": {
    id: "rajasthan-royal",
    region: "Rajasthan",
    title: "Jaipur · Jodhpur · Jaisalmer",
    desc_en: "The royal triangle plus desert safari. Forts, havelis, camel routes & the best budget stays in the Thar desert.",
    desc_hi: "Royal triangle plus desert safari. Forts, havelis, camel routes & Thar desert ke best budget stays.",
    price: 149,
    days: 7,
    color: "#D4B896",
    budget: "₹6,000 – ₹9,000 per person",
    bestTime_en: "Oct – March",
    bestTime_hi: "Oct – March",
    itinerary_en: [
      { day: 1, place: "Jaipur arrival", desc: "Check in. Evening at Chokhi Dhani." },
      { day: 2, place: "Jaipur sightseeing", desc: "Amber Fort, Hawa Mahal, City Palace, Jantar Mantar." },
      { day: 3, place: "Jaipur → Jodhpur", desc: "Train/bus. Arrive evening. Clock tower market." },
      { day: 4, place: "Jodhpur", desc: "Mehrangarh Fort, Jaswant Thada, Umaid Bhawan." },
      { day: 5, place: "Jodhpur → Jaisalmer", desc: "Bus ride through desert. Arrive Jaisalmer." },
      { day: 6, place: "Jaisalmer", desc: "Golden Fort, Patwon ki Haveli. Evening desert safari + camp." },
      { day: 7, place: "Sam Dunes → Departure", desc: "Sunrise at dunes. Return journey." },
    ],
    itinerary_hi: [
      { day: 1, place: "Jaipur pahuncho", desc: "Check in. Shaam ko Chokhi Dhani." },
      { day: 2, place: "Jaipur sightseeing", desc: "Amber Fort, Hawa Mahal, City Palace, Jantar Mantar." },
      { day: 3, place: "Jaipur → Jodhpur", desc: "Train/bus. Shaam ko pahuncho. Clock tower market." },
      { day: 4, place: "Jodhpur", desc: "Mehrangarh Fort, Jaswant Thada, Umaid Bhawan." },
      { day: 5, place: "Jodhpur → Jaisalmer", desc: "Desert se hote hue bus. Jaisalmer pahuncho." },
      { day: 6, place: "Jaisalmer", desc: "Golden Fort, Patwon ki Haveli. Shaam desert safari + camp." },
      { day: 7, place: "Sam Dunes → Wapsi", desc: "Sunrise at dunes. Wapsi ka safar." },
    ],
    includes_en: ["Day-wise route map", "Best budget hotels list", "Train & bus schedule tips", "Desert safari guide", "Food spots per city", "Shopping & bargaining guide"],
    includes_hi: ["Din-wise route map", "Best budget hotels ki list", "Train & bus schedule tips", "Desert safari guide", "Har shahar ke food spots", "Shopping & bargaining guide"],
  },
  "haridwar-guide": {
  id: "haridwar-guide",
  region: "Uttarakhand",
  title: "Haridwar — Gateway to God",
  desc_en: "Complete Haridwar travel guide — sacred ghats, ancient temples, peaceful ashrams, hidden gems, must-try food & full transport guide from Delhi.",
  desc_hi: "Haridwar ka poora travel guide — sacred ghats, ancient temples, peaceful ashrams, hidden gems, must-try food & Delhi se transport guide.",
  price: 9,
  days: null,
  color: "#C4B49A",
  budget: "₹1,000 – ₹1,500 per day",
  bestTime_en: "October – March",
  bestTime_hi: "October – March",
  itinerary_en: [
    { day: 1, place: "Morning — Ganga Aarti & Ghats", desc: "Har Ki Pauri morning aarti (5:30 AM), Ganga snan, breakfast near ghat market." },
    { day: 2, place: "Temples — Ropeway", desc: "Mansa Devi Temple (ropeway), Chandi Devi Temple (ropeway), Maya Devi Temple, Bilvkeshwar Mahadev." },
    { day: 3, place: "Ashrams & Spiritual", desc: "Shantikunj Ashram, Sapt Rishi Ashram, Parmarth Ashram — peaceful Ganga vibes." },
    { day: 4, place: "Nature & Offbeat", desc: "Neel Dhara Pakshi Vihar, Rajaji National Park, Bhimgoda Barrage sunset point." },
    { day: 5, place: "Evening — Shaam Aarti", desc: "Sapt Rishi Ashram shaam, wapas Har Ki Pauri — evening Ganga Aarti (6:00–7:00 PM)." },
  ],
  itinerary_hi: [
    { day: 1, place: "Subah — Ganga Aarti & Ghats", desc: "Har Ki Pauri subah aarti (5:30 AM), Ganga snan, ghat market mein breakfast." },
    { day: 2, place: "Temples — Ropeway", desc: "Mansa Devi Temple (ropeway), Chandi Devi Temple (ropeway), Maya Devi, Bilvkeshwar Mahadev." },
    { day: 3, place: "Ashrams & Spiritual", desc: "Shantikunj Ashram, Sapt Rishi Ashram, Parmarth Ashram — peaceful Ganga vibes." },
    { day: 4, place: "Nature & Offbeat", desc: "Neel Dhara Pakshi Vihar, Rajaji National Park, Bhimgoda Barrage sunset point." },
    { day: 5, place: "Shaam — Evening Aarti", desc: "Sapt Rishi Ashram shaam, wapas Har Ki Pauri — shaam Ganga Aarti (6:00–7:00 PM)." },
  ],
  includes_en: [
    "Complete ghats & temples guide",
    "Hidden gems — Sapt Rishi, Neel Dhara, Parad Shivling",
    "Best hotels — Budget to Premium",
    "Delhi to Haridwar transport — all options",
    "Must-try food & restaurants",
    "Budget breakdown — 3 categories",
    "Emergency numbers & essentials",
    "Packing list — Oct to Mar season",
  ],
  includes_hi: [
    "Complete ghats & temples guide",
    "Hidden gems — Sapt Rishi, Neel Dhara, Parad Shivling",
    "Best hotels — Budget se Premium tak",
    "Delhi se Haridwar transport — sab options",
    "Must-try food & restaurants",
    "Budget breakdown — 3 categories",
    "Emergency numbers & essentials",
    "Packing list — Oct se Mar season",
  ],
},
};

function PackageDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const t = (key) => translations[key]?.[lang === "hinglish" ? "hi" : "en"] || translations[key]?.en || key;
  const isHi = lang === "hinglish";

  const pkg = packages[id];

  if (!pkg) {
    return (
      <div className="page" style={{ textAlign: "center", padding: "8rem 2rem" }}>
        <h2>Package not found</h2>
        <Link to="/packages" className="btn-primary" style={{ marginTop: "1.5rem", display: "inline-block" }}>
          {isHi ? "Wapas Jaao" : "Back to Packages"}
        </Link>
      </div>
    );
  }

  const itinerary = isHi ? pkg.itinerary_hi : pkg.itinerary_en;
  const includes = isHi ? pkg.includes_hi : pkg.includes_en;
  const buyFeatures = translations["detail_buy_features"][isHi ? "hi" : "en"];

  return (
    <div className="page">
      {/* Header */}
      <div className="detail-hero" style={{ background: pkg.color }}>
        <div className="container">
          <p className="detail-region">{pkg.region}</p>
          <h1 className="detail-title">{pkg.title}</h1>
          <div className="detail-meta">
            <span>{pkg.days} {t("pkg_days")}</span>
            <span>·</span>
            <span>{t("detail_best_time")}: {isHi ? pkg.bestTime_hi : pkg.bestTime_en}</span>
            <span>·</span>
            <span>{isHi ? "Trip budget" : "Trip budget"}: {pkg.budget}</span>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="detail-layout">
          {/* Left */}
          <div className="detail-left">
            <p className="detail-desc">{isHi ? pkg.desc_hi : pkg.desc_en}</p>

            <h3 className="detail-section-heading">{t("detail_itinerary")}</h3>
            <div className="itinerary-list">
              {itinerary.map((item) => (
                <div className="itinerary-item" key={item.day}>
                  <div className="itinerary-day">
                    {isHi ? `Din ${item.day}` : `Day ${item.day}`}
                  </div>
                  <div className="itinerary-content">
                    <strong>{item.place}</strong>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="detail-section-heading">{t("detail_included")}</h3>
            <ul className="includes-list">
              {includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Right — Buy card */}
          <div className="detail-right">
            <div className="buy-card">
              <p className="buy-label">{t("detail_buy_label")}</p>
              <div className="buy-price">₹{pkg.price}</div>
              <p className="buy-sublabel">{t("detail_onetime")}</p>
              <ul className="buy-features">
                {buyFeatures.map((f) => (
                  <li key={f}>✓ {f}</li>
                ))}
              </ul>
              <button
                className="btn-primary buy-btn"
                onClick={() => navigate(`/checkout/${pkg.id}`)}
              >
                {isHi ? `Abhi Kharido — ₹${pkg.price}` : `Buy Now — ₹${pkg.price}`}
              </button>
              <p className="buy-note">{t("detail_payment_note")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PackageDetail;