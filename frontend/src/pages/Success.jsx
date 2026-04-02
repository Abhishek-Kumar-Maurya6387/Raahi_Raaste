import { useLocation, Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";
import "./Success.css";

function Success() {
  const location = useLocation();
  const { lang } = useLanguage();
  const t = (key) => translations[key]?.[lang === "hinglish" ? "hi" : "en"] || translations[key]?.en || key;
  const { pdfUrl, packageName } = location.state || {};

  return (
    <div className="page">
      <div className="success-wrap">
        <div className="success-icon">✓</div>
        <h1 className="success-title">{t("success_title")}</h1>
        <p className="success-desc">
          {t("success_desc_pre")} <strong>{packageName || "itinerary"}</strong> {t("success_desc_post")}
        </p>

        <div className="success-box">
          <p className="success-box-label">{t("success_box_label")}</p>
          {pdfUrl ? (
            <a href={pdfUrl} download className="btn-primary success-btn" target="_blank" rel="noreferrer">
              {t("success_download")}
            </a>
          ) : (
            <>
              <p className="success-box-note">{t("success_email_note")}</p>
              <button className="btn-primary success-btn" disabled>
                {t("success_download")}
              </button>
            </>
          )}
        </div>

        <Link to="/packages" className="btn-outline">
          {t("success_more")}
        </Link>
      </div>
    </div>
  );
}

export default Success;