import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FaHeart,
  FaUserCircle,
  FaChevronDown,
  FaHome,
  FaTools,
  FaQuestionCircle
} from "react-icons/fa";

function Navbar() {

  // ✅ single role state
  const [role, setRole] = useState("guest");

  const location = useLocation();

  // ✅ update role on every route change (IMPORTANT FIX)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));

    if (!user) {
      setRole("guest");
      return;
    }

    setRole(user.role);
  }, [location]);

  return (
    <header className="navbar">

      {/* LOGO */}
      <div className="logo">
        <div className="logo-icon">
          <FaHome />
        </div>

        <div className="logo-text">
          <span className="brand-name">FreeHome</span>
          <small className="brand-tag">Find Your Dream Home</small>
        </div>
      </div>

      {/* NAV LINKS */}
      <nav>
        <ul className="nav-links">

          {/* ================= HOME (ROLE BASED) ================= */}
          <li>
            <Link to={role === "agent" ? "/agent-dashboard" : "/home"}>
              Home
            </Link>
          </li>

          {/* ================= BUYER UI ================= */}
          {role === "buyer" || role === "guest" ? (
            <>
              <li className="dropdown">
                <span>Properties <FaChevronDown /></span>
                <div className="dropdown-menu">
                  <Link to="/properties">All Properties</Link>
                  <Link to="/properties?mode=buy">For Sale</Link>
                  <Link to="/properties?mode=rent">For Rent</Link>
                  <Link to="/properties?type=PG Hostel">PG Hostel</Link>
                </div>
              </li>

              <li className="dropdown">
                <span><FaTools /> Services <FaChevronDown /></span>
                <div className="dropdown-menu">
                  <Link to="/contact-agent">Find Agent</Link>
                  <Link to="/home-loan">Home Loan Help</Link>
                  <Link to="/compare">Compare</Link>
                </div>
              </li>

              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>

              <li>
                <Link to="/faq">
                  <FaQuestionCircle /> FAQ
                </Link>
              </li>

              <li>
                <Link to="/wishlist" className="icon-btn wishlist">
                  <FaHeart />
                  <span>Wishlist</span>
                </Link>
              </li>
            </>
          ) : null}

          {/* ================= AGENT UI ================= */}
          {role === "agent" ? (
            <>
              <li><Link to="/agent/listings">My Listings</Link></li>
              <li><Link to="/agent/add-property">Add Property</Link></li>
              <li><Link to="/agent/requests">Requests</Link></li>
              <li><Link to="/agent/leads">Leads</Link></li>

              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>

              <li>
                <Link to="/faq">
                  <FaQuestionCircle /> FAQ
                </Link>
              </li>
            </>
          ) : null}

        </ul>
      </nav>

      {/* RIGHT SECTION */}
      <div className="right-section">

        <Link
  to={role === "agent" ? "/agent-profile" : "/user-profile"}
  className="icon-btn profile"
>
            <FaUserCircle />
          <span>
            {role === "agent" ? "Profile" : "Profile"}
          </span>
        </Link>

      </div>

    </header>
  );
}

export default Navbar;