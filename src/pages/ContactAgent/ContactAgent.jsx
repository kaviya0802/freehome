import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./ContactAgent.css";

function ContactAgent() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    location: "",
    preference: "",
    budget: "",
    type: "Buy",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email.trim());
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim() || !/^[A-Za-z\s]+$/.test(form.name)) {
      newErrors.name = "Enter valid name (alphabets only)";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.location.trim()) newErrors.location = "Location is required";
    if (!form.preference.trim()) newErrors.preference = "Preference is required";
    if (!form.budget.trim()) newErrors.budget = "Budget is required";
    if (!form.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const err = validate();
    setErrors(err);

    if (Object.keys(err).length > 0) return;

    alert("Agent request submitted successfully!");

    setForm({
      name: "",
      email: "",
      location: "",
      preference: "",
      budget: "",
      type: "Buy",
      message: ""
    });

    setErrors({});
  };

  return (
    <>
      <Navbar />

      <div className="ac-page">

        {/* HERO */}
        <div className="ac-hero">
          <h1>Find Your Perfect Real Estate Agent</h1>
          <p>GET MATCHED WITH VERIFIED PROPERTY EXPERTS INSTANTLY</p>
        </div>

        {/* MAIN LAYOUT */}
        <div className="ac-shell">

          {/* LEFT SIDE */}
          <div className="ac-left">
            <h2>Smart Agent Matching</h2>
            <p>
              We connect you with verified professionals who understand your needs
              and budget.
            </p>

            <div className="ac-list">
              <div>Verified & trusted agents</div>
              <div>Faster property discovery</div>
              <div>Better negotiation support</div>
              <div>End-to-end assistance</div>
            </div>

            <div className="ac-status">
              Average matching time: under 12 hours
            </div>
          </div>

          {/* FORM */}
          <form className="ac-right" onSubmit={handleSubmit}>

            <input name="name" placeholder="Full Name*" value={form.name} onChange={handleChange} />
            {errors.name && <span className="ac-error">{errors.name}</span>}

            <input name="email" placeholder="Email*" value={form.email} onChange={handleChange} />
            {errors.email && <span className="ac-error">{errors.email}</span>}

            <input name="location" placeholder="Preferred Location*" value={form.location} onChange={handleChange} />
            {errors.location && <span className="ac-error">{errors.location}</span>}

            <input name="preference" placeholder="Property Type*" value={form.preference} onChange={handleChange} />
            {errors.preference && <span className="ac-error">{errors.preference}</span>}

            <select name="type" value={form.type} onChange={handleChange}>
              <option>Buy</option>
              <option>Rent</option>
            </select>

            <input name="budget" placeholder="Budget*" value={form.budget} onChange={handleChange} />
            {errors.budget && <span className="ac-error">{errors.budget}</span>}

            <textarea name="message" placeholder="Message*" value={form.message} onChange={handleChange} />
            {errors.message && <span className="ac-error">{errors.message}</span>}

            <button type="submit">Find My Agent</button>

          </form>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default ContactAgent;