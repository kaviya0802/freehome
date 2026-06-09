import "./Navbar.css";
import { Link } from "react-router-dom";
import {
  FaHeart,
  FaUserCircle,
  FaChevronDown,
  FaHome,
  FaUserPlus,
  FaTools,
  FaQuestionCircle
} from "react-icons/fa";

function Navbar() {
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

          <li><Link to="/">Home</Link></li>

          {/* PROPERTIES */}
          <li className="dropdown">
            <span>Properties <FaChevronDown /></span>
            <div className="dropdown-menu">
              <Link to="/properties">All Properties</Link>
              <Link to="/properties?mode=buy">For Sale</Link>
              <Link to="/properties?mode=rent">For Rent</Link>
              <Link to="/properties?type=PG Hostel">PG Hostel</Link>
            </div>
          </li>

          {/* SERVICES */}
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

          {/* ⭐ FAQ ADDED */}
          <li>
            <Link to="/faq">
              <FaQuestionCircle /> FAQ
            </Link>
          </li>

        </ul>
      </nav>

      {/* RIGHT SECTION */}
      <div className="right-section">

        <Link to="/wishlist" className="icon-btn wishlist">
          <FaHeart />
          <span>Wishlist</span>
        </Link>

        <Link to="/profile" className="icon-btn profile">
          <FaUserCircle />
          <span>Account</span>
        </Link>

        <Link to="/register" className="signup-btn">
          <FaUserPlus />
          Sign Up
        </Link>

      </div>

    </header>
  );
}

export default Navbar;