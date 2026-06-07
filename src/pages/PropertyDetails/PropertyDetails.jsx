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

  const property = properties.find((p) => String(p.id) === String(id));

  const [liked, setLiked] = useState(false);
  const [burst, setBurst] = useState(false);
  const [toast, setToast] = useState("");

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

  const handleDoubleClick = () => triggerWishlist();

  const handleClickHeart = (e) => {
    e.stopPropagation();
    triggerWishlist();
  };

  const images = property.images || [property.image];
  const safe = (value) => {
  return value === null ||
    value === undefined ||
    value === ""
    ? "Not Available"
    : value;
};

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
  const propertyAge = new Date().getFullYear() - property.yearBuilt;

  return (
    <>
      <Navbar />

      <div className="details-page">

        {/* IMAGE */}
        <div className="image-section" onDoubleClick={handleDoubleClick}>
          <button
            className={`wishlist-icon ${liked ? "active" : ""}`}
            onClick={handleClickHeart}
          >
            {liked ? "❤️" : "🤍"}
          </button>

          {burst && <div className="heart-burst">❤️ ❤️ ❤️</div>}

          <div className="slider-wrapper">
            <button className="slider-btn left" onClick={prevImage}>◀</button>

            <img
              src={images[currentIndex]}
              alt={property.title}
              className="slider-image"
            />

            <button className="slider-btn right" onClick={nextImage}>▶</button>
          </div>

          <span className="type-badge">{property.type}</span>
        </div>

        {/* CONTENT */}
        <div className="content-section">

          <div className="top-row">
            <h1>{property.title}</h1>
            <h2 className="price">${property.price.toLocaleString()}</h2>
          </div>

          <p className="location">{property.location}</p>

        {/* ================= MAIN META CARDS ================= */}
{/* ================= MAIN META CARDS ================= */}

<div className="meta-box">

  {property.type === "Apartment" && (
    <>
      <div>
        <h3>{property.bedrooms}</h3>
        <p>Bedrooms</p>
      </div>

      <div>
        <h3>{property.bathrooms}</h3>
        <p>Bathrooms</p>
      </div>

      <div>
        <h3>{property.area}</h3>
        <p>Area (sqft)</p>
      </div>

      <div>
        <h3>{property.apartmentFeatures?.floor}</h3>
        <p>Floor</p>
      </div>
   <div>
  <h3>
  {property.mode === "buy" ? "SALE" : "RENT"}
</h3>
  <p>Status</p>
</div>

    </>
  )}

  {property.type === "Villa" && (
    <>
      <div>
        <h3>{property.bedrooms}</h3>
        <p>Bedrooms</p>
      </div>

      <div>
        <h3>{property.bathrooms}</h3>
        <p>Bathrooms</p>
      </div>

      <div>
        <h3>{property.area}</h3>
        <p>Area (sqft)</p>
      </div>
      

      <div>
        <h3>{property.parking}</h3>
        <p>Parking</p>
      </div>
      <div>
  <h3>
  {property.mode === "buy" ? "SALE" : "RENT"}
</h3>
  <p>Status</p>
</div>

    </>
  )}

  {property.type === "Townhouse" && (
    <>
      <div>
        <h3>{property.bedrooms}</h3>
        <p>Bedrooms</p>
      </div>

      <div>
        <h3>{property.bathrooms}</h3>
        <p>Bathrooms</p>
      </div>

      <div>
        <h3>{property.area}</h3>
        <p>Area (sqft)</p>
      </div>

      <div>
        <h3>{property.parking}</h3>
        <p>Parking</p>
      </div>
      
    <div>
 <h3>
  {property.mode === "buy" ? "SALE" : "RENT"}
</h3>
  <p>Status</p>
</div>

    </>
  )}

  {property.type === "Luxury" && (
    <>
      <div>
        <h3>{property.bedrooms}</h3>
        <p>Bedrooms</p>
      </div>

      <div>
        <h3>{property.bathrooms}</h3>
        <p>Bathrooms</p>
      </div>

      <div>
        <h3>{property.area}</h3>
        <p>Area (sqft)</p>
      </div>
 

      <div>
        <h3>{property.parking}</h3>
        <p>Parking</p>
      </div>
      <div>
<h3>
  {property.mode === "buy" ? "SALE" : "RENT"}
</h3>
  <p>Status</p>
</div>
           
    </>
  )}

  {property.type === "Commercial" && (
    <>
      <div>
        <h3>{property.commercialFeatures?.officeType}</h3>
        <p>Property Type</p>
      </div>

      <div>
        <h3>{property.area}</h3>
        <p>Floor Area(sqft)</p>
      </div>
      

      <div>
        <h3>{property.commercialFeatures?.parkingSpaces}</h3>
        <p>Parking Spaces</p>
      </div>

      
      <div>
         <h3>{property.mode === "buy" ? "SALE" : "RENT"}</h3>
         <p>Status</p>
</div>

    </>
  )}

  {property.type === "Land" && (
    <>
      <div>
        <h3>{property.area}</h3>
        <p>Land Size(Hectares)</p>
      </div>

      <div>
        <h3>{property.landFeatures?.soilType}</h3>
        <p>Soil Type</p>
      </div>

      <div>
        <h3>
          {property.landFeatures?.roadAccess ? "Yes" : "No"}
        </h3>
        <p>Road Access</p>
      </div>

      <div>
      <h3>
   {property.mode === "buy" ? "SALE" : "RENT"}
</h3>
        <p>Status</p>
      </div>
   
    </>
  )}

  {property.type === "PG Hostel" && (
    <>
      <div>
        <h3>{property.pgFeatures?.sharingType ?"Single Sharing":"Double Sharing"}</h3>
        <p>Room Type</p>
      </div>

      <div>
        <h3>
          {property.pgFeatures?.wifi ? "Yes" : "No"}
        </h3>
        <p>WiFi</p>
      </div>

      <div>
        <h3>
          {property.pgFeatures?.mealsIncluded ? "Yes" : "No"}
        </h3>
        <p>Meals</p>
      </div>
        <div>
        <h3>{property.area}</h3>
        <p>Area (sqft)</p>
      </div>

      <div>
<h3>
  {property.mode === "buy" ? "SALE" : "RENT"}
</h3>
  <p>Status</p>
</div>
 

    </>
  )}

</div>

          {/* ================= TYPE SPECIFIC CARDS ================= */}

          {property.villaFeatures && (
            <div className="meta-box">
              <div><h3>{property.villaFeatures.pool ? "Yes" : "No"}</h3><p>Pool</p></div>
              <div><h3>{property.villaFeatures.garden ? "Yes" : "No"}</h3><p>Garden</p></div>
              <div><h3>{property.villaFeatures.garage ? "Yes" : "No"}</h3><p>Garage</p></div>
              <div><h3>{new Date().getFullYear() - property.yearBuilt} Years</h3><p>Property Age</p></div>
              <div><h3>{property.furnished ? "Furnished" : "Unfurnished"}</h3><p>Furnishing</p></div>
            </div>
          )}

          {property.apartmentFeatures && (
            <div className="meta-box">
              <div><h3>{property.apartmentFeatures.lift ? "Yes" : "No"}</h3><p>Lift</p></div>
              <div><h3>{new Date().getFullYear() - property.yearBuilt} Years</h3><p>Property Age</p></div>
              <div><h3>{property.furnished ? "Furnished" : "Unfurnished"}</h3><p>Furnishing</p></div>
              <div><h3>{property.parking}</h3><p>Parking Spaces</p></div>
              
            </div>
          )}
          {property.townhouseFeatures && (
         <div className="meta-box">
    <    div><h3>{property.townhouseFeatures.duplex ? "Yes" : "No"}</h3><p>Duplex</p></div>
        <div><h3>{property.townhouseFeatures.garden ? "Yes" : "No"}</h3><p>Garden</p></div>
        <div><h3>{new Date().getFullYear() - property.yearBuilt} Years</h3><p>Property Age</p></div>
        <div><h3>{property.furnished ? "Furnished" : "Unfurnished"}</h3><p>Furnishing</p></div>
        <div><h3>{property.parking}</h3><p>Parking Spaces</p></div>
       </div>
        )}

          {property.luxuryFeatures && (
            <div className="meta-box">
        
              <div><h3>{property.luxuryFeatures.privatePool ? "Yes" : "No"}</h3><p>Private Pool</p></div>
              <div><h3>{property.luxuryFeatures.homeTheatre ? "Yes" : "No"}</h3><p>Home Theatre</p></div>
              <div><h3>{new Date().getFullYear() - property.yearBuilt} Years</h3><p>Property Age</p></div>
              <div><h3>{property.furnished ? "Furnished" : "Unfurnished"}</h3><p>Furnishing</p></div>
              <div><h3>{property.parking}</h3><p>Parking Spaces</p></div>
            </div>
          )}

          {property.commercialFeatures && (
            <div className="meta-box">
              <div><h3>{property.commercialFeatures.officeType}</h3><p>Type</p></div>
              <div><h3>{property.commercialFeatures.liftAccess ? "Yes" : "No"}</h3><p>Lift</p></div>
              <div><h3>{new Date().getFullYear() - property.yearBuilt} Years</h3><p>Property Age</p></div>
              <div><h3>{property.furnished ? "Furnished" : "Unfurnished"}</h3><p>Furnishing</p></div>
            </div>
          )}

          {/* DESCRIPTION */}
          <div className="description">
            <h3>Overview</h3>
            <p>{property.description}</p>
          </div>

          {/* BUTTONS */}
          <div className="pd-buttons">
            <button
              className="pd-btn pd-btn-primary"
              onClick={() => navigate(`/contact-agent/${property.id}`)}
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