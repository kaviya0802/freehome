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
  const details = property.propertyDetails || {};

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
       {/* STANDARD FIELDS */}
    <div><h3>{property.bedrooms}</h3><p>Bedrooms</p></div>
    <div><h3>{property.bathrooms}</h3><p>Bathrooms</p></div>
    <div><h3>{property.area}</h3><p>Area (sqft)</p></div>
    <div><h3>{property.parking}</h3><p>Parking</p></div>
    <div><h3>{property.propertyAge}</h3><p>Property Age</p></div>
    <div><h3>{property.furnishing}</h3><p>Furnishing</p></div>
    <div><h3>{property.mode === "buy" ? "SALE" : "RENT"}</h3><p>Status</p></div>

    {/* CORE APARTMENT DETAILS */}
    <div><h3>{details.address}</h3><p>Address</p></div>
    <div><h3>{details.floorNumber}</h3><p>Floor Number</p></div>
    <div><h3>{details.totalFloors}</h3><p>Total Floors</p></div>
    <div><h3>{details.builtUpArea}</h3><p>Built-up Area (sqft)</p></div>
    <div><h3>{details.balconies}</h3><p>Balconies</p></div>
    <div><h3>{details.maintenanceFee}</h3><p>Maintenance Fee</p></div>

    {/* FACILITIES */}
    <div><h3>{details.liftAvailable ? "Yes" : "No"}</h3><p>Lift Available</p></div>
    <div><h3>{details.gym ? "Yes" : "No"}</h3><p>Gym</p></div>
    <div><h3>{details.swimmingPool ? "Yes" : "No"}</h3><p>Swimming Pool</p></div>
    <div><h3>{details.clubhouse ? "Yes" : "No"}</h3><p>Clubhouse</p></div>
    <div><h3>{details.powerBackup ? "Yes" : "No"}</h3><p>Power Backup</p></div>
    <div><h3>{details.security ? "Yes" : "No"}</h3><p>Security</p></div>

    {/* LOCATION & CONNECTIVITY */}
    <div><h3>{details.nearbySchools}</h3><p>Nearby Schools</p></div>
    <div><h3>{details.nearbyHospitals}</h3><p>Nearby Hospitals</p></div>
    <div><h3>{details.metroConnectivity}</h3><p>Metro Connectivity</p></div>
    <div><h3>{details.trafficCondition}</h3><p>Traffic Condition</p></div>

    {/* INSIGHTS */}
    <div><h3>{details.safetyScore}</h3><p>Safety Score</p></div>
    <div><h3>{details.propertyDemand}</h3><p>Property Demand</p></div>

    </>
  )}

  {property.type === "Villa" && (
    <>
    {/* STANDARD FIELDS */}
    <div><h3>{property.bedrooms}</h3><p>Bedrooms</p></div>
    <div><h3>{property.bathrooms}</h3><p>Bathrooms</p></div>
    <div><h3>{property.area}</h3><p>Area (sqft)</p></div>
    <div><h3>{property.parking}</h3><p>Parking</p></div>
    <div><h3>{property.propertyAge}</h3><p>Property Age</p></div>
    <div><h3>{property.furnishing}</h3><p>Furnishing</p></div>
    <div><h3>{property.mode === "buy" ? "SALE" : "RENT"}</h3><p>Status</p></div>
      {/* CORE VILLA DETAILS */}
    <div><h3>{details.address}</h3><p>Address</p></div>
    <div><h3>{details.landArea}</h3><p>Land Area (sqft)</p></div>
    <div><h3>{details.builtUpArea}</h3><p>Built-up Area (sqft)</p></div>
    <div><h3>{details.floors}</h3><p>Floors</p></div>
    <div><h3>{details.balconies}</h3><p>Balconies</p></div>
    <div><h3>{details.facingDirection}</h3><p>Facing Direction</p></div>

    {/* FEATURES */}
    <div><h3>{details.privateGarden ? "Yes" : "No"}</h3><p>Private Garden</p></div>
    <div><h3>{details.privatePool ? "Yes" : "No"}</h3><p>Private Pool</p></div>
    <div><h3>{details.security ? "Yes" : "No"}</h3><p>Security</p></div>
    <div><h3>{details.powerBackup ? "Yes" : "No"}</h3><p>Power Backup</p></div>

    {/* LOCATION & LIFESTYLE */}
    <div><h3>{details.nearbySchools}</h3><p>Nearby Schools</p></div>
    <div><h3>{details.nearbyHospitals}</h3><p>Nearby Hospitals</p></div>
    <div><h3>{details.metroConnectivity}</h3><p>Metro Connectivity</p></div>
    <div><h3>{details.trafficCondition}</h3><p>Traffic Condition</p></div>

    {/* INVESTMENT INSIGHTS */}
    <div><h3>{details.safetyScore}</h3><p>Safety Score</p></div>
    <div><h3>{details.propertyDemand}</h3><p>Property Demand</p></div>
    <div><h3>{details.investmentPotential}</h3><p>Investment Potential</p></div>

    </>
  )}

  {property.type === "Townhouse" && (
    <>
      {/* STANDARD FIELDS */}
    <div><h3>{property.bedrooms}</h3><p>Bedrooms</p></div>
    <div><h3>{property.bathrooms}</h3><p>Bathrooms</p></div>
    <div><h3>{property.area}</h3><p>Area (sqft)</p></div>
    <div><h3>{property.parking}</h3><p>Parking</p></div>
    <div><h3>{property.propertyAge}</h3><p>Property Age</p></div>
    <div><h3>{property.furnishing}</h3><p>Furnishing</p></div>
    <div><h3>{property.mode === "buy" ? "SALE" : "RENT"}</h3><p>Status</p></div>

    {/* CORE DETAILS */}
    <div><h3>{details.address}</h3><p>Address</p></div>
    <div><h3>{details.builtUpArea}</h3><p>Built-up Area</p></div>
    <div><h3>{details.balconies}</h3><p>Balconies</p></div>
    <div><h3>{details.floors}</h3><p>Floors</p></div>
    <div><h3>{details.maintenanceFee}</h3><p>Maintenance Fee</p></div>

    {/* FEATURES */}
    <div><h3>{details.privateTerrace ? "Yes" : "No"}</h3><p>Private Terrace</p></div>
    <div><h3>{details.gatedCommunity ? "Yes" : "No"}</h3><p>Gated Community</p></div>
    <div><h3>{details.clubhouse ? "Yes" : "No"}</h3><p>Clubhouse</p></div>
    <div><h3>{details.security ? "Yes" : "No"}</h3><p>Security</p></div>
    <div><h3>{details.powerBackup ? "Yes" : "No"}</h3><p>Power Backup</p></div>

    {/* LOCATION INSIGHTS */}
    <div><h3>{details.nearbySchools}</h3><p>Nearby Schools</p></div>
    <div><h3>{details.nearbyHospitals}</h3><p>Nearby Hospitals</p></div>
    <div><h3>{details.metroConnectivity}</h3><p>Metro Connectivity</p></div>
    <div><h3>{details.trafficCondition}</h3><p>Traffic Condition</p></div>

    {/* MARKET INSIGHTS */}
    <div><h3>{details.safetyScore}</h3><p>Safety Score</p></div>
    <div><h3>{details.propertyDemand}</h3><p>Property Demand</p></div>

    </>
  )}

  {property.type === "Luxury" && (
    <>
       {/* STANDARD FIELDS */}
    <div><h3>{property.bedrooms}</h3><p>Bedrooms</p></div>
    <div><h3>{property.bathrooms}</h3><p>Bathrooms</p></div>
    <div><h3>{property.area}</h3><p>Area (sqft)</p></div>
    <div><h3>{property.parking}</h3><p>Parking</p></div>
    <div><h3>{property.propertyAge}</h3><p>Property Age</p></div>
    <div><h3>{property.furnishing}</h3><p>Furnishing</p></div>
    <div><h3>{property.mode === "buy" ? "SALE" : "RENT"}</h3><p>Status</p></div>

    {/* CORE LUXURY DETAILS */}
    <div><h3>{details.address}</h3><p>Address</p></div>
    <div><h3>{details.landArea}</h3><p>Land Area</p></div>
    <div><h3>{details.builtUpArea}</h3><p>Built-up Area</p></div>
    <div><h3>{details.parkingCapacity}</h3><p>Parking Capacity</p></div>
    <div><h3>{details.waterView}</h3><p>View</p></div>
    <div><h3>{details.luxuryRating}</h3><p>Luxury Rating</p></div>

    {/* PREMIUM FEATURES */}
    <div><h3>{details.privatePool ? "Yes" : "No"}</h3><p>Private Pool</p></div>
    <div><h3>{details.privateGym ? "Yes" : "No"}</h3><p>Private Gym</p></div>
    <div><h3>{details.homeTheater ? "Yes" : "No"}</h3><p>Home Theater</p></div>
    <div><h3>{details.smartHomeFeatures ? "Yes" : "No"}</h3><p>Smart Home</p></div>
    <div><h3>{details.privateGarden ? "Yes" : "No"}</h3><p>Private Garden</p></div>
    <div><h3>{details.rooftopTerrace ? "Yes" : "No"}</h3><p>Rooftop Terrace</p></div>
    <div><h3>{details.securitySystem ? "Yes" : "No"}</h3><p>Security System</p></div>

    {/* LOCATION INSIGHTS */}
    <div><h3>{details.nearbySchools}</h3><p>Nearby Schools</p></div>
    <div><h3>{details.nearbyHospitals}</h3><p>Nearby Hospitals</p></div>
    <div><h3>{details.metroConnectivity}</h3><p>Metro Connectivity</p></div>

    {/* RATINGS */}
    <div><h3>{details.safetyScore}</h3><p>Safety Score</p></div>
    <div><h3>{details.investmentPotential}</h3><p>Investment Potential</p></div>
           
    </>
  )}

  {property.type === "Commercial" && (
    <>
       <div>
    <h3>{property.propertyType}</h3>
    <p>Property Type</p>
  </div>

      <div>
        <h3>{property.area}</h3>
        <p>Floor Area(sqft)</p>
      </div>
      <div>
  <h3>{property.parking}</h3>
  <p>Parking</p>
</div>
      <div>
  <h3>{property.propertyAge} Years</h3>
  <p>Property Age</p>
</div>
 <div>
    <h3>{property.furnishing}</h3>
    <p>Furnishing</p>
  </div>
      <div>
         <h3>{property.mode === "buy" ? "SALE" : "RENT"}</h3>
         <p>Status</p>
</div>
{/* CORE COMMERCIAL DETAILS */}
    <div><h3>{details.address}</h3><p>Address</p></div>
    <div><h3>{details.floorNumber}</h3><p>Floor Number</p></div>
    <div><h3>{details.workstations}</h3><p>Workstations</p></div>
    <div><h3>{details.cabins}</h3><p>Cabins</p></div>
    <div><h3>{details.conferenceRooms}</h3><p>Conference Rooms</p></div>
    <div><h3>{details.washrooms}</h3><p>Washrooms</p></div>
    <div><h3>{details.nearbyMetro}</h3><p>Nearby Metro</p></div>

    {/* FACILITIES */}
    <div><h3>{details.receptionArea ? "Yes" : "No"}</h3><p>Reception Area</p></div>
    <div><h3>{details.pantry ? "Yes" : "No"}</h3><p>Pantry</p></div>
    <div><h3>{details.powerBackup ? "Yes" : "No"}</h3><p>Power Backup</p></div>
    <div><h3>{details.internetReady ? "Yes" : "No"}</h3><p>Internet Ready</p></div>
    <div><h3>{details.liftAccess ? "Yes" : "No"}</h3><p>Lift Access</p></div>

    {/* INSIGHTS */}
    <div><h3>{details.trafficCondition}</h3><p>Traffic Condition</p></div>
    <div><h3>{details.businessDemand}</h3><p>Business Demand</p></div>
    <div><h3>{details.safetyScore}</h3><p>Safety Score</p></div>

    </>
  )}

  {property.type === "Land" && (
    <>
      <div>
        <h3>{property.area}</h3>
        <p>Land Size(Hectares)</p>
      </div>
      <div>
    <h3>{property.soilType}</h3>
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
      <div><h3>{details.address}</h3><p>Address</p></div>
    <div><h3>{details.plotWidth}</h3><p>Plot Width</p></div>
    <div><h3>{details.plotLength}</h3><p>Plot Length</p></div>
    <div><h3>{details.roadWidth}</h3><p>Road Width</p></div>
    <div><h3>{details.facingDirection}</h3><p>Facing Direction</p></div>
    <div><h3>{details.zoningType}</h3><p>Zoning Type</p></div>

    {/* SITE FEATURES */}
    <div><h3>{details.cornerPlot ? "Yes" : "No"}</h3><p>Corner Plot</p></div>
    <div><h3>{details.boundaryWall ? "Yes" : "No"}</h3><p>Boundary Wall</p></div>
    <div><h3>{details.waterConnection ? "Yes" : "No"}</h3><p>Water Connection</p></div>
    <div><h3>{details.electricityConnection ? "Yes" : "No"}</h3><p>Electricity Connection</p></div>
    <div><h3>{details.approvedLayout ? "Yes" : "No"}</h3><p>Approved Layout</p></div>

    {/* LOCATION INFO */}
    <div><h3>{details.nearbySchools}</h3><p>Nearby Schools</p></div>
    <div><h3>{details.nearbyHospitals}</h3><p>Nearby Hospitals</p></div>
    <div><h3>{details.metroConnectivity}</h3><p>Metro Connectivity</p></div>

    {/* INSIGHTS */}
    <div><h3>{details.safetyScore}</h3><p>Safety Score</p></div>
    <div><h3>{details.propertyDemand}</h3><p>Property Demand</p></div>
    <div><h3>{details.futureDevelopmentPotential}</h3><p>Future Development</p></div>
   
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
<div><h3>{property.furnishing}</h3><p>Furnishing</p></div>
      <div>
<h3>
  {property.mode === "buy" ? "SALE" : "RENT"}
</h3>
  <p>Status</p>
</div>
{/* CORE PG DETAILS */}
    <div><h3>{details.address}</h3><p>Address</p></div>
    <div><h3>{details.genderPreference}</h3><p>Gender Preference</p></div>
    <div><h3>{details.totalBeds}</h3><p>Total Beds</p></div>
    <div><h3>{details.availableBeds}</h3><p>Available Beds</p></div>
    <div><h3>{details.nearbyCollege}</h3><p>Nearby College</p></div>
    <div><h3>{details.nearbyMetro}</h3><p>Nearby Metro</p></div>

    {/* FACILITIES */}
    <div><h3>{details.attachedBathroom ? "Yes" : "No"}</h3><p>Attached Bathroom</p></div>
    <div><h3>{details.wifiAvailable ? "Yes" : "No"}</h3><p>WiFi Available</p></div>
    <div><h3>{details.foodIncluded ? "Yes" : "No"}</h3><p>Food Included</p></div>
    <div><h3>{details.laundryService ? "Yes" : "No"}</h3><p>Laundry Service</p></div>
    <div><h3>{details.housekeeping ? "Yes" : "No"}</h3><p>Housekeeping</p></div>
    <div><h3>{details.acRoom ? "Yes" : "No"}</h3><p>AC Room</p></div>
    <div><h3>{details.powerBackup ? "Yes" : "No"}</h3><p>Power Backup</p></div>
    <div><h3>{details.security ? "Yes" : "No"}</h3><p>Security</p></div>
    <div><h3>{details.cctv ? "Yes" : "No"}</h3><p>CCTV</p></div>

    {/* INSIGHTS */}
    <div><h3>{details.safetyScore}</h3><p>Safety Score</p></div>
    <div><h3>{details.occupancyRate}</h3><p>Occupancy Rate</p></div>
 

    </>
  )}

</div>
          {/* DESCRIPTION */}
          <div className="description">
            <h3>Overview</h3>
            <p>{property.description}</p>
          </div>
          <div className="description">
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