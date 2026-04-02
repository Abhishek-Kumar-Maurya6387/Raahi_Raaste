import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";
import config from "../config";
import "./Checkout.css";

const packages = {
  "uttarakhand-char-dham": { title: "Char Dham & Kedarnath", price: 199 },
  "himachal-spiti": { title: "Manali to Spiti Valley", price: 249 },
  "rajasthan-royal": { title: "Jaipur · Jodhpur · Jaisalmer", price: 149 },
};

function loadRazorpay() {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

function Checkout() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const t = (key) => translations[key]?.[lang === "hinglish" ? "hi" : "en"] || translations[key]?.en || key;
  const pkg = packages[id];

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePay = async () => {
    if (!email) {
      setError(t("checkout_email_error"));
      return;
    }
    setError("");
    setLoading(true);

    const isLoaded = await loadRazorpay();
    if (!isLoaded) {
      setError("Razorpay load nahi hua. Internet check karo.");
      setLoading(false);
      return;
    }

    try {
      const { data } = await axios.post(
        `${config.BACKEND_URL}/api/payment/create-order`,
        { packageId: id, email }
      );

      const options = {
        key: data.keyId,
        amount: data.amount,
        currency: data.currency,
        name: "Raahi Raaste",
        description: pkg.title,
        order_id: data.orderId,
        handler: async function (response) {
          try {
            const verify = await axios.post(
              `${config.BACKEND_URL}/api/payment/verify`,
              {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }
            );
            if (verify.data.success) {
              navigate("/success", {
                state: {
                  pdfUrl: verify.data.pdfUrl,
                  packageName: verify.data.packageName,
                },
              });
            }
          } catch (err) {
            setError("Payment verify karne mein error. Support se contact karo.");
          }
        },
        prefill: { email },
        theme: { color: "#2C2A25" },
        modal: { ondismiss: () => setLoading(false) },
      };

      const razorpayInstance = new window.Razorpay(options);
      razorpayInstance.open();
    } catch (err) {
      setError("Kuch gadbad ho gayi. Dobara try karo.");
      setLoading(false);
    }
  };

  if (!pkg) return null;

  return (
    <div className="page">
      <div className="checkout-wrap">
        <p className="section-label">{t("checkout_label")}</p>
        <h1 className="checkout-title">{t("checkout_title")}</h1>

        <div className="checkout-card">
          <div className="checkout-item">
            <span className="checkout-item-name">{pkg.title} — {t("checkout_pdf")}</span>
            <span className="checkout-item-price">₹{pkg.price}</span>
          </div>
          <div className="checkout-divider" />
          <div className="checkout-total">
            <span>{t("checkout_total")}</span>
            <span>₹{pkg.price}</span>
          </div>
        </div>

        <div className="checkout-email">
          <label>{t("checkout_email_label")}</label>
          <input
            type="email"
            placeholder={t("checkout_email_placeholder")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {error && <p className="checkout-error">{error}</p>}

        <div className="checkout-notice">
          <p>{t("checkout_notice")}</p>
        </div>

        <button
          className="btn-primary checkout-pay-btn"
          onClick={handlePay}
          disabled={loading}
        >
          {loading ? "Processing..." : `${t("checkout_pay_btn")} ₹${pkg.price}`}
        </button>

        <p className="checkout-note">{t("checkout_secure")}</p>
      </div>
    </div>
  );
}

export default Checkout;