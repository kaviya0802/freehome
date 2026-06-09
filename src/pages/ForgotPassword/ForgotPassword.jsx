import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ForgotPassword.css";

function ForgotPassword() {
  const navigate = useNavigate();

  const [error, setError] = useState("");
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

    setError("");
    setSuccess("");
  };

  const handleResetPassword = (e) => {
    e.preventDefault();

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!passwordRegex.test(formData.password)) {
      setError(
        "Password must contain uppercase, lowercase, number and special character."
      );
      return;
    }

    if (
      formData.password !== formData.confirmPassword
    ) {
      setError("Passwords do not match.");
      return;
    }

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const userIndex = users.findIndex(
      (user) =>
        user.email.toLowerCase() ===
          formData.email.toLowerCase() &&
        user.phone === formData.phone
    );

    if (userIndex === -1) {
      setError(
        "Email and phone number do not match our records."
      );
      return;
    }

    users[userIndex].password =
      formData.password;

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    const currentUser = JSON.parse(
      localStorage.getItem("currentUser")
    );

    if (
      currentUser &&
      currentUser.email ===
        users[userIndex].email
    ) {
      currentUser.password =
        formData.password;

      localStorage.setItem(
        "currentUser",
        JSON.stringify(currentUser)
      );
    }

    setSuccess(
      "Password changed successfully. Redirecting to login..."
    );

    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Forgot Password</h1>

        <p>
          Verify your account and create a new
          password.
        </p>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        {success && (
          <div className="success-message">
            {success}
          </div>
        )}

        <form onSubmit={handleResetPassword}>
          <input
            type="email"
            name="email"
            placeholder="Registered Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Registered Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="New Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm New Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="auth-btn"
          >
            Reset Password
          </button>
        </form>

        <p className="switch-auth">
          Back to
          <Link to="/login"> Login</Link>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;