import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const regex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in|au|com\.au|org|org\.au|net|edu|gov|gov\.au)$/i;

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
      newErrors.email = "Enter a valid email address";
    }

    if (!form.location.trim()) newErrors.location = "Location is required";
    if (!form.preference.trim()) newErrors.preference = "Preference is required";
    if (!form.budget.trim()) newErrors.budget = "Budget is required";

    return newErrors;
  };

  // SIMPLE MATCHING (NO SCORE)
  const getMatchedAgents = (buyer, users) => {
    return users
      .filter((user) => user.role === "agent")
      .filter((agent) => {
        return (
          agent.serviceLocation === buyer.location ||
          agent.specialization === buyer.preference ||
          agent.budgetHandled === buyer.budget
        );
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const err = validate();
    setErrors(err);

    if (Object.keys(err).length > 0) return;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const matchedAgents = getMatchedAgents(form, users);

    navigate("/matched-agents", {
      state: {
        matchedAgents,
        preference: {
          serviceLocation: form.location,
          specialization: form.preference,
          budgetHandled: form.budget
        }
      }
    });

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

  const triggerToast = (message) => {
    setToastMessage(message);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };

  return (
    <>
      <Navbar />

      <div className="ac-page">

        <div className="ac-hero">
          <h1>Find Your Perfect Real Estate Agent</h1>
          <p>GET MATCHED WITH VERIFIED PROPERTY EXPERTS INSTANTLY</p>
        </div>

        <div className="ac-shell">

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

          <form className="ac-right" onSubmit={handleSubmit}>

            <input name="name" placeholder="Full Name*" value={form.name} onChange={handleChange} />
            {errors.name && <span className="ac-error">{errors.name}</span>}

            <input name="email" placeholder="Email*" value={form.email} onChange={handleChange} />
            {errors.email && <span className="ac-error">{errors.email}</span>}

            <select name="location" value={form.location} onChange={handleChange}>
              <option value="">Preferred Location*</option>
              <option>Sydney</option>
              <option>Melbourne</option>
              <option>Brisbane</option>
              <option>Perth</option>
              <option>Adelaide</option>
              <option>Canberra</option>
              <option>Gold Coast</option>
              <option>Hobart</option>
              <option>Darwin</option>
              <option>New South Wales</option>
              <option>Victoria</option>
              <option>Queensland</option>
              <option>Western Australia</option>
              <option>South Australia</option>
              <option>Tasmania</option>
              <option>Northern Territory</option>
            </select>

            {errors.location && (
              <span className="ac-error">{errors.location}</span>
            )}

            <select name="preference" value={form.preference} onChange={handleChange}>
              <option value="">Property Type*</option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>Townhouse</option>
              <option>Commercial</option>
              <option>Luxury Homes</option>
              <option>Land</option>
              <option>PG Hostel</option>
            </select>

            {errors.preference && (
              <span className="ac-error">{errors.preference}</span>
            )}

            <select name="type" value={form.type} onChange={handleChange}>
              <option>Buy</option>
              <option>Rent</option>
            </select>

            <select name="budget" value={form.budget} onChange={handleChange}>
              <option value="">Budget*</option>
              <option value="$0 - $5,000">$0 - $5,000</option>
              <option value="$5,000 - $10,000">$5,000 - $10,000</option>
              <option value="$10,000+">$10,000+</option>
              <option value="$200k - $500k">$200k - $500k</option>
              <option value="$500k - $1M">$500k - $1M</option>
              <option value="$1M+">$1M+</option>
            </select>

            {errors.budget && (
              <span className="ac-error">{errors.budget}</span>
            )}

            <textarea
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
            />

            <button type="submit">Find My Agent</button>

          </form>

          {showToast && (
            <div className="toast">
              {toastMessage}
            </div>
          )}

        </div>
      </div>

      <Footer />
    </>
  );
}

export default ContactAgent;