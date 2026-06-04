import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./About.css";

function About() {
  return (
    <>
      <Navbar />

      <div className="about-container">

        <div className="about-hero">
          <h1>About FreeHome</h1>
          <p>
            A modern real estate platform helping people find homes
            across Australia with trust and simplicity.
          </p>
        </div>

        <div className="about-section">

          <div className="about-card">
            <h2>Our Mission</h2>
            <p>
              To simplify property search by connecting buyers, renters,
              and agents on a single transparent platform.
            </p>
          </div>

          <div className="about-card">
            <h2>Our Vision</h2>
            <p>
              To become Australia's most trusted digital real estate
              marketplace with verified listings and smart search tools.
            </p>
          </div>

          <div className="about-card">
            <h2>Why Choose Us</h2>
            <p>
              Verified properties, real-time filtering, modern UI, and
              trusted agents across multiple cities.
            </p>
          </div>

        </div>

        <div className="about-stats">
          <div>
            <h3>1500+</h3>
            <p>Properties</p>
          </div>
          <div>
            <h3>800+</h3>
            <p>Clients</p>
          </div>
          <div>
            <h3>25+</h3>
            <p>Cities</p>
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
}

export default About;