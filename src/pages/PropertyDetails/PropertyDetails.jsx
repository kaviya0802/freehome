import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import properties from "../../data/generateProperties";
import "./PropertyDetails.css";

import {
  addToWishlist,
  removeFromWishlist,
  isWishlisted,
} from "../../utils/wishlist";

function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const property = properties.find(
    (p) => String(p.id) === String(id)
  );

  const [liked, setLiked] = useState(false);
  const [burst, setBurst] = useState(false);
  const [toast, setToast] = useState("");

  // ✅ NEW: slider state
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (property) {
      setLiked(isWishlisted(property.id));
    }
  }, [property]);

  if (!property) {
    return (
      <div className="not-found">
        <h2>Property Not Found</h2>
        <button onClick={() => navigate("/properties")}>
          Back to Listings
        </button>
      </div>
    );
  }

  const triggerWishlist = () => {
    if (liked) {
      removeFromWishlist(property.id);
      setLiked(false);
      setToast("Removed from wishlist");
    } else {
      addToWishlist(property);
      setLiked(true);
      setBurst(true);
      setToast("Added to wishlist ❤️");

      setTimeout(() => setBurst(false), 800);
    }

    setTimeout(() => setToast(""), 2000);
  };

  const handleDoubleClick = () => {
    triggerWishlist();
  };

  const handleClickHeart = (e) => {
    e.stopPropagation();
    triggerWishlist();
  };

  // ✅ SLIDER CONTROLS
  const images = property.images || [property.image];

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <>
      <Navbar />

      <div className="details-page">

        {/* IMAGE SECTION */}
        <div
          className="image-section"
          onDoubleClick={handleDoubleClick}
        >

          {/* ❤️ Wishlist icon */}
          <button
            className={`wishlist-icon ${liked ? "active" : ""}`}
            onClick={handleClickHeart}
          >
            {liked ? "❤️" : "🤍"}
          </button>

          {/* 💥 HEART BURST */}
          {burst && (
            <div className="heart-burst">
              ❤️ ❤️ ❤️
            </div>
          )}

          {/* ✅ ONLY ONE IMAGE SHOWN */}
          <div className="slider-wrapper">
            
            <button className="slider-btn left" onClick={prevImage}>
              ◀
            </button>

            <img
              src={images[currentIndex]}
              alt={property.title}
              className="slider-image"
            />

            <button className="slider-btn right" onClick={nextImage}>
              ▶
            </button>

          </div>

          <span className="type-badge">{property.type}</span>
        </div>

        {/* CONTENT SECTION (UNCHANGED) */}
        <div className="content-section">

          <div className="top-row">
            <h1>{property.title}</h1>

            <h2 className="price">
              ${property.price.toLocaleString()}
            </h2>
          </div>

          <p className="location">{property.location}</p>

          {/* ❗ YOUR META BOX - NO CHANGE AT ALL */}
          <div className="meta-box">
            {property.type === "Land" ? (
              <>
                <div>
                  <h3>{property.area}</h3>
                  <p>Land Size (sqm)</p>
                </div>
                <div>
                  <h3>{property.zoning}</h3>
                  <p>Zoning</p>
                </div>
                <div>
                  <h3>{property.mode.toUpperCase()}</h3>
                  <p>Status</p>
                </div>
              </>
            ) : property.type === "Commercial" ? (
              <>
                <div>
                  <h3>{property.commercialType}</h3>
                  <p>Property Type</p>
                </div>
                <div>
                  <h3>{property.commercialUnits}</h3>
                  <p>Units</p>
                </div>
                <div>
                  <h3>{property.parkingSpaces}</h3>
                  <p>Parking</p>
                </div>
                <div>
                  <h3>{property.mode.toUpperCase()}</h3>
                  <p>Status</p>
                </div>
              </>
            ) : (
              <>
                <div>
                  <h3>{property.bedrooms}</h3>
                  <p>Beds</p>
                </div>
                <div>
                  <h3>{property.bathrooms}</h3>
                  <p>Baths</p>
                </div>
                <div>
                  <h3>{property.area}</h3>
                  <p>Area (sqft)</p>
                </div>
                <div>
                  <h3>{property.mode.toUpperCase()}</h3>
                  <p>Status</p>
                </div>
              </>
            )}
          </div>

          <div className="description">
            <h3>Overview</h3>
            <p>{property.description}</p>
          </div>

          <div className="pd-buttons">
            <button
              className="pd-btn pd-btn-primary"
              onClick={() =>
                navigate(`/contact-agent/${property.id}`)
              }
            >
              Contact Agent
            </button>

            <button
              className="pd-btn pd-btn-secondary"
              onClick={() => navigate("/properties")}
            >
              Back to Listings
            </button>
          </div>

        </div>
      </div>

      {toast && <div className="toast">{toast}</div>}

      <Footer />
    </>
  );
}

export default PropertyDetails;