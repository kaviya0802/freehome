import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./PropertyContactAgent.css";

function PropertyContactAgent() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

useEffect(() => {
  const allProperties =
    JSON.parse(localStorage.getItem("agentProperties")) || [];

  const found = allProperties.find(
    (p) => String(p.id) === String(id)
  );

  setProperty(found);
}, [id]);
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    contactMode: "",
    visitDate: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(form.name)) {
      newErrors.name = "Only alphabets allowed";
    }
    if (!form.email.trim()) {
  newErrors.email = "Email is required";
} else if (
  !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in|au|com\.au|org|org\.au|net|edu|gov|gov\.au)$/i.test(
    form.email.trim()
  )
) {
  newErrors.email = "Enter a valid email address";
}

    if (!form.phone) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(form.phone)) {
      newErrors.phone = "Must be 10 digits";
    }

    if (!form.contactMode) {
      newErrors.contactMode = "Select mode of contact";
    }

    if (!form.visitDate) {
      newErrors.visitDate = "Select visiting date";
    }

    return newErrors;
  };

const handleSubmit = (e) => {
  e.preventDefault();

  const validationErrors = validate();
  setErrors(validationErrors);

  if (Object.keys(validationErrors).length > 0) return;

  setErrors({});

  // ✅ Toast instead of alert
  triggerToast("Booking Confirmed! Our agent will contact you soon.");

  setForm({
    name: "",
    email: "",
    phone: "",
    contactMode: "",
    visitDate: "",
    message: ""
  });
};
  const triggerToast = (message) => {
  setToastMessage(message);
  setShowToast(true);

  setTimeout(() => {
    setShowToast(false);
  }, 5000);
};

  if (!property) return <h2>Property not found</h2>;

  return (
    <>
      <Navbar />

      <div className="pc-page">

        <div className="pc-header">
          <h1>Schedule Property Visit</h1>
          <p>BOOK A VERIFIED VISIT WITH OUR EXPERT AGENT</p>
        </div>

        <div className="pc-box">
          <div>
            <h2>
              {property.title}
              <span className={`pc-badge ${property.mode}`}>
                {property.mode === "rent" ? "For Rent" : "For Buy"}
              </span>
            </h2>
            <p>{property.location}</p>
          </div>

          <div className="pc-price">
            ₹ {property.price.toLocaleString()}
          </div>
        </div>

        <form className="pc-form" onSubmit={handleSubmit}>

          <input
            name="name"
            placeholder="Full Name *"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <span className="pc-error">{errors.name}</span>}

          <input
            name="email"
            placeholder="Email Address *"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <span className="pc-error">{errors.email}</span>}

          <input
            name="phone"
            placeholder="Phone Number *"
            value={form.phone}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "");
              setForm({ ...form, phone: value });
            }}
          />
          {errors.phone && <span className="pc-error">{errors.phone}</span>}

          {/* FIXED SELECT */}
          <select
            name="contactMode"
            value={form.contactMode}
            onChange={handleChange}
          >
            <option value="">Mode of Contact *</option>
            <option value="Phone Call">Phone Call</option>
            <option value="WhatsApp">WhatsApp</option>
            <option value="Email">Email</option>
            <option value="Message">Message</option>
          </select>
          {errors.contactMode && <span className="pc-error">{errors.contactMode}</span>}

          <input
            type="text"
            name="visitDate"
            placeholder="Select visiting date *"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => {
              if (!e.target.value) e.target.type = "text";
            }}
            value={form.visitDate}
            onChange={handleChange}
          />
          {errors.visitDate && <span className="pc-error">{errors.visitDate}</span>}

          <textarea
            name="message"
            placeholder="Message (optional)"
            value={form.message}
            onChange={handleChange}
          />

          <button type="submit">Book Visit</button>

        </form>
        {showToast && (
  <div className="toast">
    {toastMessage}
  </div>
)}
      </div>

      <Footer />
    </>
  );
}

export default PropertyContactAgent;