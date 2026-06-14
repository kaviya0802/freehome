import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import ApartmentFields from "../../components/PropertyFields/ApartmentFields";
import VillaFields from "../../components/PropertyFields/VillaFields";
import TownhouseFields from "../../components/PropertyFields/TownhouseFields";
import CommercialFields from "../../components/PropertyFields/CommercialFields";
import LuxuryFields from "../../components/PropertyFields/LuxuryFields";
import LandFields from "../../components/PropertyFields/LandFields";
import PGFields from "../../components/PropertyFields/PGFields";

import "./AddProperty.css";

function AddProperty() {
  console.log("AddProperty Render");
  const navigate = useNavigate();

  const [toast, setToast] = useState("");

  const [errors, setErrors] = useState({});

  const [property, setProperty] = useState({
    title: "",
    type: "",
    location: "",
    mode: "buy",
    price: "",
    description: "",
    images: [],
    propertyDetails: {},
  });
  const REQUIRED_FIELDS = {
  Apartment: [
    "bedrooms",
    "bathrooms",
    "area",
    "parking",
    "propertyAge",
    "mode",
    "furnishing",
    "address",
    "floorNumber",
    "totalFloors",
    "builtUpArea",
    "balconies",
    "maintenanceFee",
    "liftAvailable",
    "gym",
    "swimmingPool",
    "clubhouse",
    "powerBackup",
    "security",
    "nearbySchools",
    "nearbyHospitals",
    "metroConnectivity",
    "trafficCondition",
    "propertyDemand",
    "safetyScore"
  ],

  Villa: [
    "bedrooms",
    "bathrooms",
    "area",
    "parking",
    "propertyAge",
    "mode",
    "furnishing",
    "address",
    "landArea",
    "builtUpArea",
    "floors",
    "balconies",
    "facingDirection",
    "privateGarden",
    "privatePool",
    "security",
    "powerBackup",
    "nearbySchools",
    "nearbyHospitals",
    "metroConnectivity",
    "safetyScore",
    "propertyDemand"
  ],

  Townhouse: [
    "bedrooms",
    "bathrooms",
    "area",
    "parking",
    "propertyAge",
    "mode",
    "furnishing",
    "address",
    "builtUpArea",
    "balconies",
    "floors",
    "maintenanceFee",
    "privateTerrace",
    "gatedCommunity",
    "clubhouse",
    "security",
    "powerBackup",
    "nearbySchools",
    "nearbyHospitals",
    "metroConnectivity",
    "trafficCondition",
    "safetyScore",
    "propertyDemand"
  ],

  Commercial: [
    "propertyType",
    "area",
    "parking",
    "propertyAge",
    "mode",
    "furnishing",
    "address",
    "floorNumber",
    "workstations",
    "cabins",
    "conferenceRooms",
    "washrooms",
    "receptionArea",
    "pantry",
    "powerBackup",
    "internetReady",
    "liftAccess",
    "trafficCondition",
    "metroConnectivity",
    "propertyDemand",
    "safetyScore"
  ],

  Luxury: [
    "bedrooms",
    "bathrooms",
    "area",
    "parking",
    "propertyAge",
    "mode",
    "furnishing",
    "address",
    "landArea",
    "builtUpArea",
    "parkingCapacity",
    "waterView",
    "luxuryRating",
    "privatePool",
    "privateGym",
    "homeTheater",
    "smartHomeFeatures",
    "privateGarden",
    "rooftopTerrace",
    "securitySystem",
    "nearbySchools",
    "nearbyHospitals",
    "metroConnectivity",
    "propertyDemand",
    "safetyScore",
    "investmentPotential"
  ],

  Land: [
    "area",
    "soilType",
    "roadAccess",
    "address",
    "plotWidth",
    "mode",
    "plotLength",
    "roadWidth",
    "facingDirection",
    "zoningType",
    "cornerPlot",
    "boundaryWall",
    "waterConnection",
    "electricityConnection",
    "approvedLayout",
    "nearbySchools",
    "nearbyHospitals",
    "metroConnectivity",
    "safetyScore",
    "propertyDemand",
    "futureDevelopmentPotential"
  ],

  "PG Hostel": [
    "sharingType",
    "wifi",
    "mealsIncluded",
    "area",
    "furnishing",
    "mode",
    "address",
    "genderPreference",
    "totalBeds",
    "availableBeds",
    "nearbyCollege",
    "nearbyMetro",
    "attachedBathroom",
    "foodIncluded",
    "laundryService",
    "housekeeping",
    "acRoom",
    "powerBackup",
    "security",
    "cctv",
    "propertyDemand",
    "safetyScore",
    "occupancyRate"
  ]
};

  const handleChange = (e) => {
    setProperty({ ...property, [e.target.name]: e.target.value });
  };

  const handlePropertyDetailsChange = (e) => {
  const { name, value } = e.target;

  setProperty((prev) => ({
    ...prev,
    propertyDetails: {
      ...prev.propertyDetails,
      [name]: value, // ✅ store "Yes" or "No" directly
    },
  }));
};
  // ✅ MAX 4 IMAGES
const handleImages = (e) => {
  const files = Array.from(e.target.files);

  setProperty((prev) => {
    const existing = prev.images || [];

    if (existing.length + files.length > 4) {
      setErrors((prevErr) => ({
        ...prevErr,
        images: "You can upload maximum 4 images",
      }));
      return prev;
    }

    return {
      ...prev,
      images: [...existing, ...files],
    };
  });

  e.target.value = "";
};
  // ✅ VALIDATION
 const validate = () => {
  const err = {};

  // MAIN FIELDS
  if (!property.title) err.title = "Title is required";
  if (!property.type) err.type = "Type is required";
  if (!property.location) err.location = "Location is required";
  if (!property.price) err.price = "Price is required";
  if (!property.description) err.description = "Description is required";
  if (property.images.length === 0)
    err.images = "At least 1 image required";

  // 🔥 DYNAMIC VALIDATION
  const required = REQUIRED_FIELDS[property.type] || [];
  const details = property.propertyDetails || {};

  const detailErrors = {};

  required.forEach((field) => {
  const value = details[field];

  const isEmpty =
    value === undefined ||
    value === null ||
    (typeof value === "string" && value.trim() === "");

  if (isEmpty) {
    detailErrors[field] = `${field} is required`;
  }
});
  if (Object.keys(detailErrors).length > 0) {
    err.propertyDetails = detailErrors;
  }

  setErrors(err);
  return Object.keys(err).length === 0;
};
const convertFilesToBase64 = async (files) => {
  return Promise.all(
    files.map((file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(file);
      });
    })
  );
};

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validate()) return;

  const imageBase64 = await convertFilesToBase64(property.images);
  const currentUser =
  JSON.parse(localStorage.getItem("currentUser"));
  const newProperty = {
  ...property,
  id: Date.now(),
  source: "agent",
  agentId: String(currentUser.id), // important
  images: imageBase64,
};

  const existing =
    JSON.parse(localStorage.getItem("agentProperties")) || [];

  localStorage.setItem(
    "agentProperties",
    JSON.stringify([...existing, newProperty])
  );

  setToast("Property added successfully ✅");

  setTimeout(() => {
    setToast("");
    navigate("/agent/listings");
  }, 1500);
};
  const showError = (field) =>
  errors[field] ? (
    <span className="addprop-error">
      {errors[field]}
    </span>
  ) : null;

  return (
    <>
      <Navbar />

      <div className="addprop-page">
    <div className="addprop-hero">
  <h1>Add Property</h1>
  <p >
    ENTER PROPERTY INFORMATION AND PUBLISH YOUR LISTING IN JUST A FEW STEPS
  </p>
</div>
  <div className="addprop-card">

    <div className="addprop-grid">

      {/* TITLE */}
      <div>
        <input
          name="title"
          placeholder="Property Title"
          value={property.title}
          onChange={handleChange}
        />
        {showError("title")}
      </div>

      {/* TYPE */}
      <div>
        <select
          name="type"
          value={property.type}
          onChange={handleChange}
        >
          <option value="">Select Property Type</option>
          <option>Apartment</option>
          <option>Villa</option>
          <option>Townhouse</option>
          <option>Commercial</option>
          <option>Luxury</option>
          <option>Land</option>
          <option>PG Hostel</option>
        </select>
        {showError("type")}
      </div>

      {/* LOCATION */}
      <div>
        <select
          name="location"
          value={property.location}
          onChange={handleChange}
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
        {showError("location")}
      </div>

      {/* PRICE */}
      <div>
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={property.price}
          onChange={handleChange}
        />
        {showError("price")}
      </div>

      {/* IMAGES */}
      <div className="addprop-full">
        
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImages}
        />

        {errors.images && (
          <span className="addprop-error">
            {errors.images}
          </span>
        )}

        <div className="addprop-file-list">
          {property.images.map((file, index) => (
            <p key={index}>
              📄 {file.name || `Image ${index + 1}`}
            </p>
          ))}
        </div>
      </div>

      {/* DESCRIPTION */}
      <div className="addprop-full">
        <textarea
          name="description"
          placeholder="Description"
          value={property.description}
          onChange={handleChange}
        />

        {showError("description")}
      </div>
    {/* DYNAMIC FIELDS */}
<div className="addprop-full">
  <div className="dynamic-grid">

    {property.type === "Apartment" && (
      <ApartmentFields
        details={property.propertyDetails}
        handleChange={handlePropertyDetailsChange}
        errors={errors.propertyDetails || {}}
      />
    )}

    {property.type === "Villa" && (
      <VillaFields
        details={property.propertyDetails}
        handleChange={handlePropertyDetailsChange}
        errors={errors.propertyDetails || {}}
      />
    )}

    {property.type === "Townhouse" && (
      <TownhouseFields
        details={property.propertyDetails}
        handleChange={handlePropertyDetailsChange}
        errors={errors.propertyDetails || {}}
      />
    )}

    {property.type === "Commercial" && (
      <CommercialFields
        details={property.propertyDetails}
        handleChange={handlePropertyDetailsChange}
        errors={errors.propertyDetails || {}}
      />
    )}

    {property.type === "Luxury" && (
      <LuxuryFields
        details={property.propertyDetails}
        handleChange={handlePropertyDetailsChange}
        errors={errors.propertyDetails || {}}
      />
    )}

    {property.type === "Land" && (
      <LandFields
        details={property.propertyDetails}
        handleChange={handlePropertyDetailsChange}
        errors={errors.propertyDetails || {}}
      />
    )}

    {property.type === "PG Hostel" && (
      <PGFields
        details={property.propertyDetails}
        handleChange={handlePropertyDetailsChange}
        errors={errors.propertyDetails || {}}
      />
    )}

  </div>
</div>
    
      

    </div>

    <button
      className="addprop-btn"
      onClick={handleSubmit}
    >
      Add Property
    </button>

  </div>

</div>

      {/* TOAST */}
      {toast && <div className="toast">{toast}</div>}

      <Footer />
    </>
  );
}

export default AddProperty;