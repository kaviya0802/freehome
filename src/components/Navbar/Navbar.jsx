import "./Navbar.css";
import { Link } from "react-router-dom";
import {
  FaHeart,
  FaUserCircle,
  FaChevronDown,
  FaHome,
  FaUserPlus,
  FaTools
} from "react-icons/fa";

function Navbar() {
  return (
    <header className="navbar">

      {/* LOGO */}
      <div className="logo">
        <FaHome />
        <span>FreeHome</span>
      </div>

      {/* NAV LINKS */}
      <nav>
        <ul className="nav-links">

          <li><Link to="/">Home</Link></li>

          {/* PROPERTIES */}
          <li className="dropdown">
            <span>Properties <FaChevronDown /></span>
            <div className="dropdown-menu">
              <Link to="/properties?mode=buy">Buy Homes</Link>
              <Link to="/properties?mode=rent">Rent Homes</Link>
              <Link to="/properties?mode=pg">PG / Hostel</Link>
            </div>
          </li>

          {/* SERVICES */}
          <li className="dropdown">
            <span>Services <FaChevronDown /></span>
            <div className="dropdown-menu">
              <Link to="/contact-agent">Find Agent</Link>
              <Link to="/home-loan">Home Loan Help</Link>
              <Link to="/property-valuation">Valuation</Link>
              <Link to="/compare">Compare</Link>
            </div>
          </li>

          {/* ⭐ NEW: FEATURES (IMPORTANT ADDITION) */}
          <li className="dropdown">
            <span><FaTools /> Features <FaChevronDown /></span>
            <div className="dropdown-menu">

              <Link to="/mortgage-calculator">Mortgage Calculator</Link>
              <Link to="/property-alerts">Property Alerts</Link>
              <Link to="/virtual-tour">Virtual Tours</Link>
              <Link to="/market-trends">Market Trends</Link>

            </div>
          </li>

          <li><Link to="/about">About Us</Link></li>

          <li><Link to="/contact">Contact Us</Link></li>

        </ul>
      </nav>

      {/* RIGHT SECTION */}
      <div className="right-section">

        <Link to="/wishlist" className="icon-btn wishlist">
          <FaHeart />
          <span>Saved</span>
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