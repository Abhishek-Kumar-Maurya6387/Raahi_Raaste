import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Backend connect hone ke baad yahan axios call aayegi
    console.log("Form data:", form);
    setSent(true);
  };

  return (
    <div className="page">
      <section className="contact-hero">
        <div className="container">
          <p className="section-label">Get in touch</p>
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-desc">
            Koi sawaal hai? Custom itinerary chahiye? Ya sirf baat karni hai
            travel ke baare mein — hum yahan hain.
          </p>
        </div>
      </section>

      <section className="contact-body">
        <div className="container">
          <div className="contact-layout">
            {/* Form */}
            <div className="contact-form-wrap">
              {sent ? (
                <div className="contact-success">
                  <h3>Shukriya! 🙏</h3>
                  <p>Tumhara message mil gaya. Hum jald hi reply karenge.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Aapka Naam</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Jaise: Rahul Sharma"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="aapka@email.com"
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
                      placeholder="Kya jaanna chahte hain..."
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn-primary contact-btn">
                    Message Bhejo →
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
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
                <h4>Response Time</h4>
                <p>24 ghante ke andar reply</p>
              </div>
              <div className="info-card">
                <h4>Custom Itinerary</h4>
                <p>
                  Koi aur destination chahiye? Message karo — hum custom guide
                  bana sakte hain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;