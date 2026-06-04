import { useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import properties from "../../data/generateProperties";

function Contact() {

  const { id } = useParams();

  const property = id
    ? properties.find(p => String(p.id) === String(id))
    : null;

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (property) {
      alert(`Enquiry sent for ${property.title}`);
    } else {
      alert("Message sent to support team");
    }

    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Navbar />

      <div className="contact-container">

        {/* TITLE LOGIC */}
        <h1>
          {property ? "Contact Agent" : "Contact Us"}
        </h1>

        {/* PROPERTY CONTEXT (ONLY WHEN ID EXISTS) */}
        {property && (
          <div className="info-box">
            <p><b>Property:</b> {property.title}</p>
            <p><b>Location:</b> {property.location}</p>
            <p><b>Price:</b> ${property.price.toLocaleString()}</p>
            <p><b>Type:</b> {property.type}</p>
          </div>
        )}

        {/* FORM */}
        <form onSubmit={handleSubmit}>

          <input
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            required
          />

          <input
            name="email"
            placeholder="Your Email"
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder={
              property
                ? "Ask about price, visit date, negotiation, availability..."
                : "Report issues or ask support questions..."
            }
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message</button>

        </form>

      </div>

      <Footer />
    </>
  );
}

export default Contact;