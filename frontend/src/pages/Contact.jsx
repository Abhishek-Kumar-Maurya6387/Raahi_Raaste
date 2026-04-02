import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";
import "./Contact.css";

function Contact() {
  const { lang } = useLanguage();
  const t = (key) => translations[key]?.[lang === "hinglish" ? "hi" : "en"] || translations[key]?.en || key;

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", form);
    setSent(true);
  };

  return (
    <div className="page">
      <section className="contact-hero">
        <div className="container">
          <p className="section-label">{t("contact_label")}</p>
          <h1 className="contact-title">{t("contact_title")}</h1>
          <p className="contact-desc">{t("contact_desc")}</p>
        </div>
      </section>

      <section className="contact-body">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-form-wrap">
              {sent ? (
                <div className="contact-success">
                  <h3>{t("contact_success_title")}</h3>
                  <p>{t("contact_success_desc")}</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>{t("contact_name_label")}</label>
                    <input
                      type="text"
                      name="name"
                      placeholder={t("contact_name_placeholder")}
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>{t("contact_email_label")}</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder={t("contact_msg_placeholder")}
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn-primary contact-btn">
                    {t("contact_submit")}
                  </button>
                </form>
              )}
            </div>

            <div className="contact-info">
              <div className="info-card">
                <h4>Email</h4>
                <p>raahiraaste@gmail.com</p>
              </div>
              <div className="info-card">
                <h4>Instagram</h4>
                <p>@raahi.raaste</p>
              </div>
              <div className="info-card">
                <h4>{lang === "hinglish" ? "Response Time" : "Response Time"}</h4>
                <p>{t("contact_info_response")}</p>
              </div>
              <div className="info-card">
                <h4>{lang === "hinglish" ? "Custom Itinerary" : "Custom Itinerary"}</h4>
                <p>{t("contact_info_custom")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;