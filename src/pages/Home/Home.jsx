import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [budget, setBudget] = useState("");

  const navigate = useNavigate();

  // SEARCH FUNCTION
  const handleSearch = () => {
    navigate(
      `/properties?location=${location}&type=${type}&budget=${budget}`
    );
  };

  // CATEGORY CLICK FUNCTION
  const goCategory = (value) => {
    navigate(`/properties?type=${value}`);
  };

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">

          <span className="hero-badge">
            Australia's Trusted Real Estate Platform
          </span>

          <h1>Find Your Dream Home</h1>

          <p>
            Discover premium apartments, villas, townhouses and commercial properties across Australia.
          </p>

          {/* SEARCH BOX */}
          <div className="search-box">

            {/* LOCATION */}
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">Select Location</option>
              <option>Sydney</option>
              <option>Melbourne</option>
              <option>Brisbane</option>
              <option>Perth</option>
              <option>Adelaide</option>
              <option>Canberra</option>
              <option>Gold Coast</option>
              <option>Hobart</option>
              <option>Darwin</option>
              <option>New South Wales</option>
              <option>Victoria</option>
              <option>Queensland</option>
              <option>Western Australia</option>
              <option>South Australia</option>
              <option>Tasmania</option>
              <option>Northern Territory</option>
            </select>

            {/* TYPE */}
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="">Property Type</option>
              <option value="Apartment">Apartment</option>
              <option value="Villa">Villa</option>
              <option value="Townhouse">Townhouse</option>
              <option value="Commercial">Commercial</option>
            </select>

            {/* BUDGET */}
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            >
              <option value="">Budget</option>
              <option value="200k">$200k - $500k</option>
              <option value="500k">$500k - $1M</option>
              <option value="1m">$1M+</option>
            </select>

            <button className="search-btn" onClick={handleSearch}>
              Search Properties
            </button>

          </div>

          {/* STATS */}
          <div className="stats">
            <div><h2>1500+</h2><p>Properties</p></div>
            <div><h2>800+</h2><p>Clients</p></div>
            <div><h2>25+</h2><p>Cities</p></div>
          </div>

        </div>
      </section>

      {/* CATEGORIES */}
      <section className="categories">
        <h2>Browse By Category</h2>

        <div className="category-grid">

          <div className="category-card" onClick={() => goCategory("Apartment")}>
            Apartment
          </div>

          <div className="category-card" onClick={() => goCategory("Villa")}>
            Villa
          </div>

          <div className="category-card" onClick={() => goCategory("Townhouse")}>
            Townhouse
          </div>

          <div className="category-card" onClick={() => goCategory("Commercial")}>
            Commercial
          </div>

          <div className="category-card" onClick={() => goCategory("Luxury")}>
            Luxury Homes
          </div>

          <div className="category-card" onClick={() => goCategory("Land")}>
            Land
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
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;