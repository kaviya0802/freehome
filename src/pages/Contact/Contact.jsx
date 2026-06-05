import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    category: "General",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (!/^[A-Za-z\s]+$/.test(form.name)) {
      newErrors.name = "Only alphabets allowed";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/.test(form.email)
    ) {
      newErrors.email = "Enter valid email address";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const err = validate();
    setErrors(err);

    if (Object.keys(err).length > 0) return;

    alert("Your request has been submitted successfully.");

    setForm({
      name: "",
      email: "",
      category: "General",
      message: ""
    });

    setErrors({});
  };

  return (
    <>
      <Navbar />

      <div className="cf-page">

        {/* HERO */}
        <div className="cf-hero">
          <h1>Help Center</h1>
          <p className="contactus">GET SUPPORT FOR ACCOUNTS,LISTING AND PROPERTY RELATED ISSUES</p>
        </div>

        <div className="cf-shell">

          {/* LEFT */}
          <div className="cf-left">
            <div className="cf-kicker">Support System</div>

            <h2>One place for all assistance</h2>

            <p className="cf-intro">
              Our support system is designed to resolve issues quickly and efficiently.
              Choose a category and submit your request.
            </p>

            <div className="cf-item">Account & login recovery support</div>
            <div className="cf-item">Property listing & visibility issues</div>
            <div className="cf-item">Booking & agent communication help</div>
            <div className="cf-item">Technical bugs & performance issues</div>
            <div className="cf-item">Fraud & safety reporting system</div>

            <div className="cf-status">
              Average response time: under 24 hours
            </div>
          </div>

          {/* FORM */}
          <form className="cf-form" onSubmit={handleSubmit} noValidate>

            <input
              name="name"
              placeholder="Full Name *"
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && <span className="cf-error">{errors.name}</span>}

            <input
              name="email"
              placeholder="Email Address *"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && <span className="cf-error">{errors.email}</span>}

            <select
              name="category"
              value={form.category}
              onChange={handleChange}
            >
              <option value="General">General Inquiry</option>
              <option value="Account Issue">Account Issue</option>
              <option value="Property Issue">Property Issue</option>
              <option value="Report Fraud">Report Fraud</option>
            </select>

            <textarea
              name="message"
              placeholder="Describe your issue *"
              value={form.message}
              onChange={handleChange}
            />
            {errors.message && <span className="cf-error">{errors.message}</span>}

            <button type="submit">Submit Request</button>

          </form>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;