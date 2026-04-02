import { useLocation, Link } from "react-router-dom";
import "./Success.css";

function Success() {
  const location = useLocation();
  const { pdfUrl, packageName } = location.state || {};

  return (
    <div className="page">
      <div className="success-wrap">
        <div className="success-icon">✓</div>
        <h1 className="success-title">Payment Successful!</h1>
        <p className="success-desc">
          Shukriya! <strong>{packageName || "Tumhari itinerary"}</strong> PDF
          ready hai. Neeche se download karo.
        </p>

        <div className="success-box">
          <p className="success-box-label">Tumhari PDF Ready Hai</p>
          {pdfUrl ? (
            <a
              href={pdfUrl}
              download
              className="btn-primary success-btn"
              target="_blank"
              rel="noreferrer"
            >
              Download PDF ↓
            </a>
          ) : (
            <>
              <p className="success-box-note">
                PDF link tumhari email pe bhej di gayi hai. Inbox check karo.
              </p>
              <button className="btn-primary success-btn" disabled>
                Download PDF ↓
              </button>
            </>
          )}
        </div>

        <Link to="/packages" className="btn-outline">
          Aur Routes Dekhein
        </Link>
      </div>
    </div>
  );
}

export default Success;