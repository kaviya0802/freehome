import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const fieldRefs = useRef({});
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "buyer",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

     setErrors({});
     setSuccess("");
  };

  const handleRegister = (e) => {
    e.preventDefault();

     setErrors({});
     setSuccess("");

    const nameRegex = /^[A-Za-z\s]+$/;

     const emailRegex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in|au|com\.au|org|org\.au|net|edu|gov|gov\.au)$/i;

    const phoneRegex = /^\d{10}$/;

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    const newErrors = {};

if (!nameRegex.test(formData.fullName.trim())) {
  newErrors.fullName =
    "Name should contain only letters.";
}

if (!emailRegex.test(formData.email.trim())) {
  newErrors.email =
    "Enter a valid email address.";
}

if (!phoneRegex.test(formData.phone)) {
  newErrors.phone =
    "Phone number must contain exactly 10 digits.";
}

if (!passwordRegex.test(formData.password)) {
  newErrors.password =
    "Password must be at least 8 characters and include uppercase, lowercase, number, and special character.";
}

if (formData.password !== formData.confirmPassword) {
  newErrors.confirmPassword =
    "Passwords do not match.";
}

const users =
  JSON.parse(localStorage.getItem("users")) || [];

const existingUser = users.find(
  (user) =>
    user.email.toLowerCase() ===
    formData.email.toLowerCase()
);

if (existingUser) {
  newErrors.email =
    "Email already registered.";
}

if (Object.keys(newErrors).length > 0) {

setErrors(newErrors);

const firstError =
Object.keys(newErrors)[0];

setTimeout(() => {

fieldRefs.current[
firstError
]?.scrollIntoView({
behavior: "smooth",
block: "center",
});

}, 100);

return;

}
    const newUser = {
  id: Date.now(),

  // registration
  fullName: formData.fullName.trim(),
  email: formData.email.trim().toLowerCase(),
  phone: formData.phone,
  password: formData.password,
  role: formData.role,

  // common profile
  age: "",
  gender: "",
  bio: "",
  profileImage: "",

  // address
  address: "",
  city: "",
  state: "",
  pincode: "",

  // buyer fields
  preferredLocation: "",
  budgetRange: "",

  // agent fields
  agencyName: "",
  experience: "",
  licenseNumber: "",
  officeAddress: ""
};

    users.push(newUser);

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    localStorage.setItem(
      "currentUser",
      JSON.stringify(newUser)
    );
    window.dispatchEvent(new Event("storage"));

    setSuccess("Registration successful!");

    setTimeout(() => {
      if (newUser.role === "buyer") {
        navigate("/home");
      } else {
        navigate("/agent-dashboard");
      }
    }, 1000);
  };

  return (
    <div className="rg-page">
         {/* HERO */}
    <div className="rg-hero">
      <h1>Sign Up</h1>
      <span className="rg-kicker">CREATE. CONNECT. EXPLORE.</span>
    </div>
      <div className="rg-shell">
        {/* LEFT SIDE */}
        <div className="rg-left">
          <h2>Create Your FreeHome Account</h2>

          <p>
            Join thousands of buyers and agents using
            FreeHome to discover, compare and manage
            properties effortlessly.
          </p>

          <div className="rg-features">
            <div>Secure account creation</div>
            <div>Verified buyers and agents</div>
            <div>Save favourite properties</div>
            <div>Compare properties easily</div>
          </div>

          <div className="rg-status">
            Registration takes less than a minute
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form
          className="rg-form"
          onSubmit={handleRegister}
          noValidate
        >
           <input
ref={(el)=>
fieldRefs.current.fullName=el
}
type="text"
name="fullName"
            placeholder="Full Name*"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          {errors.fullName && (
  <span className="rg-field-error">
    {errors.fullName}
  </span>
)}

           <input
ref={(el)=>
fieldRefs.current.email=el
}
type="email"
            name="email"
            placeholder="Email Address*"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && (
  <span className="rg-field-error">
    {errors.email}
  </span>
)}

          <input
          ref={(el)=>
fieldRefs.current.phone=el
}
            type="tel"
            name="phone"
            placeholder="Phone Number*"
            value={formData.phone}
            onChange={handleChange}
            maxLength="10"
            required
          />
          {errors.phone && (
  <span className="rg-field-error">
    {errors.phone}
  </span>
)}

          <input
          ref={(el)=>
fieldRefs.current.password=el
}
            type="password"
            name="password"
            placeholder="Password*"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && (
  <span className="rg-field-error">
    {errors.password}
  </span>
)}

          <input
          ref={(el)=>
fieldRefs.current.confirmPassword=el
}
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password*"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          {errors.confirmPassword && (
  <span className="rg-field-error">
    {errors.confirmPassword}
  </span>
)}

          <div className="rg-role">
            <label>
              <input
                type="radio"
                name="role"
                value="buyer"
                checked={formData.role === "buyer"}
                onChange={handleChange}
              />
              Buyer
            </label>

            <label>
              <input
                type="radio"
                name="role"
                value="agent"
                checked={formData.role === "agent"}
                onChange={handleChange}
              />
              Agent
            </label>
          </div>

          <button
            type="submit"
            className="rg-btn"
          >
            Create Account
          </button>

          <p className="rg-login">
            Already have an account?
            <Link to="/login"> Login</Link>
          </p>
        </form>

      </div>
    </div>
  );
}

export default Register;