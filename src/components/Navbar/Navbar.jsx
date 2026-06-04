import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaHeart, FaUserCircle, FaChevronDown, FaHome } from "react-icons/fa";

function Navbar() {
  return (
    <header className="navbar">

      <div className="logo">
        <FaHome />
        <span>FreeHome</span>
      </div>

      <nav>
        <ul className="nav-links">

          <li><Link to="/">Home</Link></li>

          {/* PROPERTIES */}
          <li className="dropdown">
            <span>Properties <FaChevronDown /></span>
            <div className="dropdown-menu">
              <Link to="/properties?mode=buy">Buy</Link>
              <Link to="/properties?mode=rent">Rent</Link>
            </div>
          </li>

          {/* SERVICES */}
          <li className="dropdown">
            <span>Services <FaChevronDown /></span>
            <div className="dropdown-menu">
               <Link to="/contact-agent">Contact Agent</Link>
              <Link to="/compare">Compare</Link>
              <Link to="/wishlist">Wishlist</Link>
            </div>
          </li>

          {/* SUPPORT */}
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>

        </ul>
      </nav>

      <div className="right-section">
        <Link to="/wishlist"><FaHeart /> Wishlist</Link>
        <Link to="/profile"><FaUserCircle /> Profile</Link>
      </div>

    </header>
  );
}

export default Navbar;