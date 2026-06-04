import "./Navbar.css";
import { Link } from "react-router-dom";
import {
  FaHeart,
  FaUserCircle,
  FaChevronDown,
  FaHome,
} from "react-icons/fa";

function Navbar() {
  return (
    <header className="navbar">

      <div className="logo">
        <FaHome className="logo-icon" />
        <span>FreeHome</span>
      </div>

      <nav>
        <ul className="nav-links">

          <li>
            <Link to="/">Home</Link>
          </li>

          <li className="dropdown">
            <span className="dropdown-title">
              Properties
              <FaChevronDown className="arrow" />
            </span>

            <div className="dropdown-menu">
              <Link to="/properties">Buy Property</Link>
              <Link to="/properties">Rent Property</Link>
              <Link to="/properties">Luxury Homes</Link>
              <Link to="/properties">Commercial Properties</Link>
            </div>
          </li>

          <li className="dropdown">
            <span className="dropdown-title">
              Services
              <FaChevronDown className="arrow" />
            </span>

            <div className="dropdown-menu">
              <Link to="/compare">Compare Properties</Link>
              <Link to="/wishlist">Saved Properties</Link>
              <Link to="/contact">Contact Agent</Link>
            </div>
          </li>

          <li>
            <Link to="/about">About Us</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>

        </ul>
      </nav>

      <div className="right-section">

        <Link to="/wishlist" className="wishlist-btn">
          <FaHeart />
          Wishlist
        </Link>

        <Link to="/profile" className="profile-btn">
          <FaUserCircle />
          Profile
        </Link>

        <Link to="/register" className="signup-btn">
          Sign Up
        </Link>

      </div>

    </header>
  );
}

export default Navbar;