import "./Landing.css";
import Footer from "../../components/Footer/Footer";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { getAgentProperties } from "../../utils/propertyStorage";

function LandingPage() {
  const navigate = useNavigate();
  const allProperties = getAgentProperties();

  return (
    <div className="lp-wrapper">

      {/* ================= TOP BAR ================= */}
      <div className="lp-topbar">
        <div className="lp-logo">

          <div className="lp-logo-icon">
            <FaHome />
          </div>

          <div className="lp-logo-text">
            <span className="brand-name">FreeHome</span>
            <small className="brand-tag">
              Australia Real Estate Platform
            </small>
          </div>

        </div>
        <div className="lp-topbar-tagline">
  <span>For Buyers</span>
  <span className="lp-dot">•</span>
  <span>For Agents</span>
  <span className="lp-dot">•</span>
  <span>One Unified Platform</span>
    <span className="lp-dot">•</span>
    <span>Verified Listings</span>
      <span className="lp-dot">•</span>
    <span>Trusted Agents</span>
      
  
</div>
      </div>

      {/* ================= HERO ================= */}
      <section className="lp-hero">

        <div className="lp-hero-content">

          <div className="lp-badge">
            Australia's Trusted Real Estate Platform
          </div>

          <h1>
            Find Your Dream Home
          </h1>

          <h2>
            FreeHome connects buyers, sellers, and agents in one powerful platform.
          </h2>

          <div className="lp-hero-actions">
            <button
              className="lp-register-btn"
              onClick={() => navigate("/register")}
            >
              Register →
            </button>
          </div>

          {/* ================= STATS ================= */}
            {/* STATS */}
            <div className="lp-stats">
  <div>
    <h2>{allProperties.length}+</h2>
    <p>Properties</p>
  </div>

  <div>
    <h2>800+</h2>
    <p>Clients</p>
  </div>

  <div>
    <h2>25+</h2>
    <p>Cities</p>
  </div>
</div>

        </div>

      </section>

      {/* PLATFORM OVERVIEW */}
      <section className="lp-info">

        <h2>Built for Buyers & Agents</h2>

        <p>
          FreeHome is designed to simplify the entire real estate journey.
          Whether you're searching for a home or managing listings as an agent,
          the platform provides powerful tools to make decisions faster and smarter.
        </p>

        <div className="lp-grid">

          <div className="lp-box">
            <h3>For Buyers</h3>
            <p>
              Search properties, filter results, compare listings,
              save favorites, and directly contact agents for visits.
            </p>
          </div>

          <div className="lp-box">
            <h3>For Agents</h3>
            <p>
              Add and manage properties, handle inquiries, track leads,
              and grow visibility through verified listings.
            </p>
          </div>
        </div>

      </section>

      {/* FEATURES STRIP */}
      <section className="lp-features">

        <h2>Everything You Need</h2>

        <div className="lp-tags">
          <span>Explore Properties</span>
          <span>Smart Filters</span>
          <span>Compare Homes</span>
          <span>Find Agents</span>
          <span>Wishlist</span>
          <span>Book Visits</span>
          <span>Home Loan Support</span>
          <span>Property Alerts</span>
          <span>Agent Dashboard</span>
        </div>

      </section>

      {/* FINAL ROLE CLARITY */}
      <section className="lp-role">

        <h2>One Platform. Two Experiences.</h2>

        <div className="lp-role-grid">

          <div className="lp-role-card">
            <h3>Buyer Journey</h3>
            <p>
              Discover homes, compare properties, and connect with agents seamlessly.
            </p>
          </div>

          <div className="lp-role-card">
            <h3>Agent Journey</h3>
            <p>
              Manage listings, handle leads, and grow your real estate business efficiently.
            </p>
          </div>

        </div>

      </section>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}

export default LandingPage;