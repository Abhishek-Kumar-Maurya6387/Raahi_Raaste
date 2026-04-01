import { Link } from "react-router-dom";
import "./Success.css";

function Success() {
  return (
    <div className="page">
      <div className="success-wrap">
        <div className="success-icon">✓</div>
        <h1 className="success-title">Payment Successful!</h1>
        <p className="success-desc">
          Shukriya! Tumhari itinerary PDF ready hai. Download button neeche hai.
        </p>
        <div className="success-box">
          <p className="success-box-label">Tumhari PDF</p>
          {/* 
            Baad mein yahan backend se actual PDF link aayegi 
            Backend connect hone ke baad update karenge
          */}
          <p className="success-box-note">
            PDF link aapki email pe bhi bhej di gayi hai.
          </p>
          <button className="btn-primary success-btn" disabled>
            Download PDF ↓
          </button>
          <p className="success-coming">
            (Backend connect hone ke baad activate hoga)
          </p>
        </div>
        <Link to="/packages" className="btn-outline">
          Aur Routes Dekhein
        </Link>
      </div>
    </div>
  );
}

export default Success;