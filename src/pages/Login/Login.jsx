import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({});
  };

  const handleLogin = (e) => {
  e.preventDefault();

  const newErrors = {};

  // 1. EMPTY FIELD VALIDATION FIRST
  if (!formData.email.trim()) {
    newErrors.email = "Email is required";
  }

  if (!formData.password.trim()) {
    newErrors.password = "Password is required";
  }

  // STOP HERE if empty fields exist
  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  // 2. ONLY NOW CHECK LOGIN CREDENTIALS
  const users =
    JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    (u) =>
      u.email.toLowerCase() === formData.email.toLowerCase() &&
      u.password === formData.password
  );

  // INVALID LOGIN
  if (!user) {
    setErrors({
      general: "Invalid email or password"
    });
    return;
  }

  // SUCCESS LOGIN
  localStorage.setItem("currentUser", JSON.stringify(user));
  window.dispatchEvent(new Event("storage"));

  if (user.role === "buyer") {
    navigate("/home");
  } else {
    navigate("/agent-dashboard");
  }
};
  return (
    <div className="rg-page">

      {/* HERO */}
      <div className="rg-hero">
        <h1>Login</h1>
        <span>WELCOME BACK</span>
      </div>

      <div className="rg-shell">

        {/* LEFT SIDE */}
        <div className="rg-left">
          <h2>Login to FreeHome</h2>

          <p>
            Access your account as a Buyer or Agent to manage properties,
            saved listings and enquiries.
          </p>

          <div className="rg-features">
            <div>Save & compare properties</div>
            <div>Track shortlisted homes</div>
            <div>Manage listings</div>
            <div>Handle enquiries</div>
          </div>

          <div className="rg-status">
            Secure login for all users
          </div>
        </div>

        {/* FORM */}
        <form 
        className="rg-form" 
        onSubmit={handleLogin}
        noValidate
        >

          <input
            type="email"
            name="email"
            placeholder="Email Address*"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <span className="rg-field-error">{errors.email}</span>
          )}

          <input
            type="password"
            name="password"
            placeholder="Password*"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <span className="rg-field-error">{errors.password}</span>
          )}

          {errors.general && (
            <span className="rg-field-error">{errors.general}</span>
          )}

          <button type="submit" className="rg-btn">
            Login
          </button>

          <p className="rg-login">
            <Link to="/forgot-password">Forgot Password?</Link>
          </p>

          <p className="rg-login">
            Don't have an account? <Link to="/register">Sign Up</Link>
          </p>

        </form>

      </div>
    </div>
  );
}

export default Login;