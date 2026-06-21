import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAgentProperties } from "../../utils/propertyStorage";

function Home() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);;
  const navigate = useNavigate();
  const allProperties = getAgentProperties();

  // EXPLORE BUTTON (ONLY NAVIGATION)
  const handleExplore = () => {
    navigate("/properties");
  };

  // CATEGORY CLICK FUNCTION
  const goCategory = (value) => {
    navigate(`/properties?type=${encodeURIComponent(value)}`);
  };

  // NEWSLETTER
  const handleSubscribe = () => {
  const email = newsletterEmail.trim();

  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in|au|com\.au|org|org\.au|net|edu|gov|gov\.au)$/i;

  // reset previous error
  setEmailError("");

  if (!email) {
    setEmailError("Email is required");
    return;
  }

  if (!regex.test(email)) {
    setEmailError("Please enter a valid email address");
    return;
  }

  // Notifications (unchanged)
  if ("Notification" in window) {
    if (Notification.permission === "granted") {
      new Notification("Subscribed Successfully!", {
        body: "We will send property updates to your email.",
      });
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((perm) => {
        if (perm === "granted") {
          new Notification("Subscribed Successfully!", {
            body: "We will send property updates to your email.",
          });
        }
      });
    }
  }

  // SUCCESS → toast only
  triggerToast("Subscribed successfully!");
  setNewsletterEmail("");
};
  const triggerToast = (message) => {
  setToastMessage(message);
  setShowToast(true);

  setTimeout(() => {
    setShowToast(false);
  }, 5000);
};

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">

          <span className="hero-badge">
            Australia's Trusted Real Estate Platform
          </span>

          <h1>Find Your Dream Home</h1>

          <p>
            Discover premium apartments, villas, townhouses and commercial properties across Australia.
          </p>

          {/* ONLY BUTTON */}
          <div className="search-box">
             <button className="explore-btn" onClick={() => navigate("/properties")}>
  Explore Properties →
</button>
          </div>

          {/* STATS */}
          <div className="stats">
            <div><h2>{allProperties.length}+</h2><p>Properties</p></div>
            <div><h2>800+</h2><p>Clients</p></div>
            <div><h2>25+</h2><p>Cities</p></div>
          </div>

        </div>
      </section>

      {/* CATEGORIES */}
      <section className="categories">
        <h2>Browse By Category</h2>

        <div className="circle-categories">

          <div className="center-circle">
            <h2>FreeHome</h2>
            <p>Find Your Dream Home</p>
          </div>

          <div className="category-card card1" onClick={() => goCategory("Apartment")}>
            Apartment
          </div>

          <div className="category-card card2" onClick={() => goCategory("Villa")}>
            Villa
          </div>

          <div className="category-card card3" onClick={() => goCategory("Townhouse")}>
            Townhouse
          </div>

          <div className="category-card card4" onClick={() => goCategory("Commercial")}>
            Commercial
          </div>

          <div className="category-card card5" onClick={() => goCategory("Luxury")}>
            Luxury Homes
          </div>

          <div className="category-card card6" onClick={() => goCategory("Land")}>
            Land
          </div>

          <div className="category-card card7" onClick={() => goCategory("PG Hostel")}>
            PG Hostel
          </div>

        </div>
      </section>

      {/* WHY US */}
      <section className="why-us">
        <h2>Why Choose FreeHome?</h2>

        <div className="why-grid">
          <div className="why-card">
            <h3>Verified Listings</h3>
            <p>Every property is verified before publication.</p>
          </div>

          <div className="why-card">
            <h3>Trusted Agents</h3>
            <p>Work with experienced real-estate professionals.</p>
          </div>

          <div className="why-card">
            <h3>Best Prices</h3>
            <p>Competitive pricing across Australia.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <h2>Trusted By Home Buyers Across Australia</h2>

        <div className="testimonial-grid">

          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>FreeHome helped us find our dream property in Sydney.</p>
            <h4>Sarah Mitchell</h4>
            <span>Home Buyer</span>
          </div>

          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>Professional agents and verified listings made our search easy.</p>
            <h4>James Thompson</h4>
            <span>Property Investor</span>
          </div>

          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>Great platform for first-time buyers in Australia.</p>
            <h4>Emma Wilson</h4>
            <span>First-Time Buyer</span>
          </div>

        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="newsletter">
        <div className="newsletter-card">

          <h2>Get Exclusive Property Updates</h2>

          <p>
            Receive new listings, investment opportunities and market insights.
          </p>

          <div className="newsletter-form">
            <input
  type="email"
  value={newsletterEmail}
  onChange={(e) => setNewsletterEmail(e.target.value)}
  placeholder="Enter your email"
/>

{emailError && (
  <p className="home-error-text">
    {emailError}
  </p>
)}
            <button onClick={handleSubscribe}>
              Subscribe
            </button>
          </div>
            {showToast && (
  <div className="toast">
    {toastMessage}
  </div>
)}

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;