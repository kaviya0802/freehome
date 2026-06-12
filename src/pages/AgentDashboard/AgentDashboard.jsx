import "./AgentDashboard.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

function AgentDashboard() {

  const navigate = useNavigate();

  const goPage = (path) => {
    navigate(path);
  };
  const currentUser =
  JSON.parse(localStorage.getItem("currentUser"));

  return (
    <>
      <Navbar />

      {/* HERO (same style as Home) */}
      <section className="hero">
        <div className="hero-content">
        {(!currentUser?.serviceLocation ||
  !currentUser?.budgetHandled ||
  !currentUser?.specialization) && (
  <div className="profile-warning">
    ⚠ Complete your profile to receive buyer enquiries.
  </div>
)}

          <span className="hero-badge">
             Australia's Trusted Real Estate Platform
          </span>

          <h1>Manage Your Properties</h1>

          <p>
            Add listings, track leads, handle requests and grow your real estate business.
          </p>

          <div className="search-box">
            <button
              className="explore-btn"
              onClick={() => goPage("/agent/add-property")}
            >
              Add New Property →
            </button>
          </div>

          {/* STATS (Agent version) */}
          <div className="stats">
            <div>
              <h2>12+</h2>
              <p>My Listings</p>
            </div>

            <div>
              <h2>8</h2>
              <p>New Requests</p>
            </div>

            <div>
              <h2>25</h2>
              <p>Active Leads</p>
            </div>
          </div>

        </div>
      </section>

      {/* QUICK ACTIONS (like categories but agent tools) */}
     <section className="agent-workflow">
  <h2>Grow Your Business with FreeHome</h2>

  <div className="workflow-grid">

    <div className="workflow-card">
      <span>01</span>
      <h3>Add Property</h3>
      <p>Publish property listings quickly and reach more buyers.</p>
    </div>

    <div className="workflow-card">
      <span>02</span>
      <h3>Manage Listings</h3>
      <p>Update property details, pricing, and availability anytime.</p>
    </div>

    <div className="workflow-card">
      <span>03</span>
      <h3>Connect with Buyers</h3>
      <p>Receive direct inquiries from interested customers.</p>
    </div>
  </div>
</section>
      {/* WHY US (agent version) */}
      <section className="why-us">
        <h2>Why Agents Use FreeHome</h2>

        <div className="why-grid">
          <div className="why-card">
            <h3>More Leads</h3>
            <p>Get high-quality buyer inquiries daily.</p>
          </div>

          <div className="why-card">
            <h3>Easy Listing</h3>
            <p>Add and manage properties in seconds.</p>
          </div>

          <div className="why-card">
            <h3>Fast Growth</h3>
            <p>Expand your real estate business online.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS (agent-focused) */}
      <section className="testimonials">
        <h2>Agent Success Stories</h2>

        <div className="testimonial-grid">

          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>Got 10+ leads in first week using FreeHome.</p>
            <h4>Ravi Kumar</h4>
            <span>Real Estate Agent</span>
          </div>

          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>Managing properties is now super easy and fast.</p>
            <h4>Anitha</h4>
            <span>Property Consultant</span>
          </div>

          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>Best platform to grow my property business.</p>
            <h4>John Peter</h4>
            <span>Agent</span>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default AgentDashboard;