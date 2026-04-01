import { useParams, useNavigate } from "react-router-dom";
import "./Checkout.css";

const packages = {
  "uttarakhand-char-dham": { title: "Char Dham & Kedarnath", price: 199 },
  "himachal-spiti": { title: "Manali to Spiti Valley", price: 249 },
  "rajasthan-royal": { title: "Jaipur · Jodhpur · Jaisalmer", price: 149 },
};

function Checkout() {
  const { id } = useParams();
  const navigate = useNavigate();
  const pkg = packages[id];

  const handlePay = () => {
    /*
      Yahan Razorpay code aayega jab backend ready ho.
      Abhi ke liye Success page pe redirect kar rahe hain.
    */
    navigate("/success");
  };

  if (!pkg) return null;

  return (
    <div className="page">
      <div className="checkout-wrap">
        <p className="section-label">Order Summary</p>
        <h1 className="checkout-title">Checkout</h1>

        <div className="checkout-card">
          <div className="checkout-item">
            <span className="checkout-item-name">{pkg.title} — PDF Guide</span>
            <span className="checkout-item-price">₹{pkg.price}</span>
          </div>
          <div className="checkout-divider" />
          <div className="checkout-total">
            <span>Total</span>
            <span>₹{pkg.price}</span>
          </div>
        </div>

        <div className="checkout-notice">
          <p>
            Payment ke baad instantly PDF download link milega. Razorpay se UPI,
            Cards, Net Banking sab accept hota hai.
          </p>
        </div>

        <button className="btn-primary checkout-pay-btn" onClick={handlePay}>
          Pay ₹{pkg.price} via Razorpay →
        </button>

        <p className="checkout-note">
          Abhi Razorpay test mode mein hai — backend connect hone ke baad live hoga.
        </p>
      </div>
    </div>
  );
}

export default Checkout;