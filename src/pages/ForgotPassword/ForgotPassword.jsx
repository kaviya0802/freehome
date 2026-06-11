import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Register/Register.css";

function ForgotPassword() {
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({});
    setSuccess("");
  };

  const handleResetPassword = (e) => {
    e.preventDefault();

    const newErrors = {};

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    // 1️⃣ EMPTY FIELD VALIDATION
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = "Confirm password is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // 2️⃣ PASSWORD RULE VALIDATION
    if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters and include uppercase, lowercase, number, and special character.";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    // 3️⃣ USER VERIFICATION
    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const userIndex = users.findIndex(
      (user) =>
        user.email.toLowerCase() === formData.email.toLowerCase() &&
        user.phone === formData.phone
    );

    if (userIndex === -1) {
      newErrors.email = "Invalid email or phone number";
      newErrors.phone = "Invalid email or phone number";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // 4️⃣ UPDATE PASSWORD
    users[userIndex].password = formData.password;
    localStorage.setItem("users", JSON.stringify(users));

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser && currentUser.email === users[userIndex].email) {
      currentUser.password = formData.password;
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    }

    setSuccess("Password reset successful. Redirecting to login...");

    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="rg-page">

      {/* HERO */}
      <div className="rg-hero">
        <h1>Reset Password</h1>
        <span className="rg-kicker">SECURE ACCOUNT RECOVERY</span>
      </div>

      <div className="rg-shell">

        {/* LEFT SIDE CONTENT */}
        <div className="rg-left">
          <h2>Recover Your Account</h2>

          <p>
            Verify your registered email and phone number to securely reset your password and regain access to your FreeHome account.
          </p>

          <div className="rg-features">
            <div>Identity verification required</div>
            <div>Secure password reset system</div>
            <div>Instant account recovery</div>
            <div>Supports Buyer & Agent accounts</div>
          </div>

          <div className="rg-status">
            Only verified users can reset passwords
          </div>
        </div>

        {/* FORM */}
        <form className="rg-form" onSubmit={handleResetPassword}>

          <input
            type="email"
            name="email"
            placeholder="Registered Email*"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <span className="rg-field-error">{errors.email}</span>
          )}

          <input
            type="tel"
            name="phone"
            placeholder="Registered Phone Number*"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && (
            <span className="rg-field-error">{errors.phone}</span>
          )}

          <input
            type="password"
            name="password"
            placeholder="New Password*"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <span className="rg-field-error">{errors.password}</span>
          )}

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm New Password*"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <span className="rg-field-error">{errors.confirmPassword}</span>
          )}

          {success && (
            <span className="rg-status">{success}</span>
          )}

          <button type="submit" className="rg-btn">
            Reset Password
          </button>

          <p className="rg-login">
            Back to <Link to="/login">Login</Link>
          </p>

        </form>

      </div>
    </div>
  );
}

export default ForgotPassword;