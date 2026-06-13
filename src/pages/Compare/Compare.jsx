import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useCompare } from "../../context/CompareContext";

import "./Compare.css";
const getComparisonData = (property) => {
  const d = property.propertyDetails || {};

  switch (property.type) {
    case "Apartment":
      return {
        "Property Type": property.type,
        Location: property.location,
        Price: `$${property.price.toLocaleString()}`,
        Bedrooms: d.bedrooms,
        Bathrooms: d.bathrooms,
        Area:
  d.type !== "Land"
    ? `${d.area} sqft`
    : `${d.area} hectares`,
        Parking: d.parking,
        "Property Age": d.propertyAge,
        Furnishing: d.furnishing,
        Status: d.mode,

        Address: d.address,
        "Floor Number": d.floorNumber,
        "Total Floors": d.totalFloors,
        "Land Area":
  d.landArea
    ? `${d.landArea} sqft`
    : undefined,
        "Built Up Area":
  d.builtUpArea
    ? `${d.builtUpArea} sqft`
    : undefined,

        Balconies: d.balconies,
        "Maintenance Fee": d.maintenanceFee,

        "Lift Available": d.liftAvailable ? "Yes" : "No",
        Gym: d.gym ? "Yes" : "No",
        "Swimming Pool": d.swimmingPool ? "Yes" : "No",
        Clubhouse: d.clubhouse ? "Yes" : "No",
        "Power Backup": d.powerBackup ? "Yes" : "No",
        Security: d.security ? "Yes" : "No",

        "Nearby Schools": d.nearbySchools,
        "Nearby Hospitals": d.nearbyHospitals,
        "Metro Connectivity": d.metroConnectivity,
        "Traffic Condition": d.trafficCondition,

        "Safety Score": d.safetyScore,
        "Property Demand": d.propertyDemand,
      };

    case "Villa":
      return {
        "Property Type": property.type,
        Location: property.location,
        Price: `$${property.price.toLocaleString()}`,
        Bedrooms: d.bedrooms,
        Bathrooms: d.bathrooms,
        Area:
  d.type !== "Land"
    ? `${d.area} sqft`
    : `${d.area} hectares`,
        Parking: d.parking,
        "Property Age": d.propertyAge,
        Furnishing: d.furnishing,
        Status: d.mode,

        Address: d.address,
         "Land Area":
  d.landArea
    ? `${d.landArea} sqft`
    : undefined,
        "Built Up Area":
  d.builtUpArea
    ? `${d.builtUpArea} sqft`
    : undefined,

        Floors: d.floors,
        Balconies: d.balconies,
        "Facing Direction": d.facingDirection,

        "Private Garden": d.privateGarden ? "Yes" : "No",
        "Private Pool": d.privatePool ? "Yes" : "No",
        Security: d.security ? "Yes" : "No",
        "Power Backup": d.powerBackup ? "Yes" : "No",

        "Nearby Schools": d.nearbySchools,
        "Nearby Hospitals": d.nearbyHospitals,
        "Metro Connectivity": d.metroConnectivity,
        "Traffic Condition": d.trafficCondition,

        "Safety Score": d.safetyScore,
        "Property Demand": d.propertyDemand,
        "Investment Potential": d.investmentPotential,
      };

    case "Townhouse":
      return {
        "Property Type": property.type,
        Location: property.location,
        Price: `$${property.price.toLocaleString()}`,
        Bedrooms: d.bedrooms,
        Bathrooms: d.bathrooms,
        Area:
  d.type !== "Land"
    ? `${d.area} sqft`
    : `${d.area} hectares`,
        Parking: d.parking,
        "Property Age": d.propertyAge,
        Furnishing: d.furnishing,
        Status: d.mode,

        Address: d.address,
       "Built Up Area":
  d.builtUpArea
    ? `${d.builtUpArea} sqft`
    : undefined,

        Balconies: d.balconies,
        Floors: d.floors,
        "Maintenance Fee": d.maintenanceFee,

        "Private Terrace": d.privateTerrace ? "Yes" : "No",
        "Gated Community": d.gatedCommunity ? "Yes" : "No",
        Clubhouse: d.clubhouse ? "Yes" : "No",
        Security: d.security ? "Yes" : "No",
        "Power Backup": d.powerBackup ? "Yes" : "No",

        "Nearby Schools": d.nearbySchools,
        "Nearby Hospitals": d.nearbyHospitals,
        "Metro Connectivity": d.metroConnectivity,
        "Traffic Condition": d.trafficCondition,

        "Safety Score": d.safetyScore,
        "Property Demand": d.propertyDemand,
      };

    case "Luxury":
      return {
        "Property Type": property.type,
        Location: property.location,
        Price: `$${property.price.toLocaleString()}`,
        Bedrooms: d.bedrooms,
        Bathrooms: d.bathrooms,
         Area:
  d.type !== "Land"
    ? `${d.area} sqft`
    : `${d.area} hectares`,
        Parking: d.parking,
        "Property Age": d.propertyAge,
        Furnishing: d.furnishing,
        Status: d.mode,

        Address: d.address,
         "Built Up Area":
  d.builtUpArea
    ? `${d.builtUpArea} sqft`
    : undefined,

        "Built Up Area":
  d.builtUpArea
    ? `${d.builtUpArea} sqft`
    : undefined,

        "Parking Capacity": d.parkingCapacity,
        View: d.waterView,
        "Luxury Rating": d.luxuryRating,

        "Private Pool": d.privatePool ? "Yes" : "No",
        "Private Gym": d.privateGym ? "Yes" : "No",
        "Home Theater": d.homeTheater ? "Yes" : "No",
        "Smart Home": d.smartHomeFeatures ? "Yes" : "No",
        "Private Garden": d.privateGarden ? "Yes" : "No",
        "Rooftop Terrace": d.rooftopTerrace ? "Yes" : "No",
        "Security System": d.securitySystem ? "Yes" : "No",

        "Nearby Schools": d.nearbySchools,
        "Nearby Hospitals": d.nearbyHospitals,
        "Metro Connectivity": d.metroConnectivity,

        "Safety Score": d.safetyScore,
        "Investment Potential": d.investmentPotential,
      };

    case "Commercial":
      return {
        "Property": property.type,
        Location: property.location,
        Price: `$${property.price.toLocaleString()}`,
        "Property Type": d.propertyType,
        Area:
  d.type !== "Land"
    ? `${d.area} sqft`
    : `${d.area} hectares`,
        Parking: d.parking,
        "Property Age": d.propertyAge,
        Furnishing: d.furnishing,
        Status: d.mode,

        Address: d.address,
        "Floor Number": d.floorNumber,
        Workstations: d.workstations,
        Cabins: d.cabins,
        "Conference Rooms": d.conferenceRooms,
        Washrooms: d.washrooms,
        "Nearby Metro": d.nearbyMetro,

        "Reception Area": d.receptionArea ? "Yes" : "No",
        Pantry: d.pantry ? "Yes" : "No",
        "Power Backup": d.powerBackup ? "Yes" : "No",
        "Internet Ready": d.internetReady ? "Yes" : "No",
        "Lift Access": d.liftAccess ? "Yes" : "No",

        "Traffic Condition": d.trafficCondition,
        "Business Demand": d.businessDemand,
        "Safety Score": d.safetyScore,
      };

    case "Land":
      return {
        "Property Type": property.type,
        Location: property.location,
        Price: `$${property.price.toLocaleString()}`,
        Area:
  d.type !== "Land"
    ? `${d.area} sqft`
    : `${d.area} hectares`,
        "Soil Type": d.soilType,
        "Road Access": d.landFeatures?.roadAccess ? "Yes" : "No",
        Status: d.mode,

        Address: d.address,
        "Plot Width": d.plotWidth,
        "Plot Length": d.plotLength,
        "Road Width": d.roadWidth,
        "Facing Direction": d.facingDirection,
        "Zoning Type": d.zoningType,

        "Corner Plot": d.cornerPlot ? "Yes" : "No",
        "Boundary Wall": d.boundaryWall ? "Yes" : "No",
        "Water Connection": d.waterConnection ? "Yes" : "No",
        "Electricity Connection": d.electricityConnection ? "Yes" : "No",
        "Approved Layout": d.approvedLayout ? "Yes" : "No",

        "Nearby Schools": d.nearbySchools,
        "Nearby Hospitals": d.nearbyHospitals,
        "Metro Connectivity": d.metroConnectivity,

        "Safety Score": d.safetyScore,
        "Property Demand": d.propertyDemand,
        "Future Development": d.futureDevelopmentPotential,
      };

    case "PG Hostel":
      return {
        "Property Type": property.type,
        Location: property.location,
        Price: `$${property.price.toLocaleString()}`,
        "Room Type": d.pgFeatures?.sharingType
          ? "Single Sharing"
          : "Double Sharing",

        WiFi: d.pgFeatures?.wifi ? "Yes" : "No",
        Meals: d.pgFeatures?.mealsIncluded ? "Yes" : "No",

        Area:
  d.type !== "Land"
    ? `${d.area} sqft`
    : `${d.area} hectares`,
        Furnishing: d.furnishing,
        Status: d.mode,

        Address: d.address,
        "Gender Preference": d.genderPreference,
        "Total Beds": d.totalBeds,
        "Available Beds": d.availableBeds,
        "Nearby College": d.nearbyCollege,
        "Nearby Metro": d.nearbyMetro,

        "Attached Bathroom": d.attachedBathroom ? "Yes" : "No",
        "WiFi Available": d.wifiAvailable ? "Yes" : "No",
        "Food Included": d.foodIncluded ? "Yes" : "No",
        "Laundry Service": d.laundryService ? "Yes" : "No",
        Housekeeping: d.housekeeping ? "Yes" : "No",
        "AC Room": d.acRoom ? "Yes" : "No",
        "Power Backup": d.powerBackup ? "Yes" : "No",
        Security: d.security ? "Yes" : "No",
        CCTV: d.cctv ? "Yes" : "No",

        "Safety Score": d.safetyScore,
        "Occupancy Rate": d.occupancyRate,
      };

    default:
      return {};
  }
};

function Compare() {
  const navigate = useNavigate();

  const { selected, clearCompare } =
    useCompare();
    

  if (selected.length === 0) {
    return (
      <>
        <Navbar />

        <div className="compare-page">
          <div className="compare-header">
          <h1>Property Comparison</h1>

          <span className="compare-span">
            COMPARE PROPERTIES SIDE BY SIDE AND DISCOVER THE BEST OPTION.
          </span>
        </div>
          <div className="compare-empty-card">
            

            <p>
              No properties selected for comparison.
            </p>

            <button
              className="compare-select-btn"
              onClick={() =>
                navigate("/properties")
              }
            >
              Select Properties
            </button>
          </div>
        </div>

        <Footer />
      </>
    );
  }

  // Need at least 2 properties
 if (selected.length === 1) {
  return (
    <>
      <Navbar />

      <div className="compare-page">
        <div className="compare-header">
          <h1>Property Comparison</h1>

          <span className="compare-span">
            COMPARE PROPERTIES SIDE BY SIDE AND DISCOVER THE BEST OPTION.
          </span>
        </div>
        <div className="compare-empty-card">
          <p>
            One property cannot be compared.
            Please select at least one more
            property for comparison.
          </p>

          <button
            className="compare-select-btn"
            onClick={() =>
              navigate("/properties")
            }
          >
            Add More Properties
          </button>

        </div>
      </div>

      <Footer />
    </>
  );
}

  // Common fields only
const propertyMaps =
  selected.map(getComparisonData);

const commonFields = Object.keys(
  propertyMaps[0]
).filter((field) =>
  propertyMaps.every((property) => {
    const value = property[field];

    return (
      value !== undefined &&
      value !== null &&
      value !== ""
    );
  })
);


  return (
    <>
      <Navbar />

      <div className="compare-page">

        <div className="compare-header">
          <h1>Property Comparison</h1>
          <span className="compare-span">COMPARE PROPERTIES SIDE BY SIDE AND DISCOVER THE BEST OPTION.</span>

          <p className="compare-p">
            Comparing {selected.length} Properties
          </p>

          <button
            className="compare-clear-btn"
            onClick={clearCompare}
          >
            Clear Comparison
          </button>
        </div>

        {/* PROPERTY CARDS */}

        <div className="compare-selected-grid">
          {selected.map((property) => (
            <div
              key={property.id}
              className="compare-property-card"
            >
              <img
  src={property.images?.[0] || "/placeholder.jpg"}
  alt={property.title}
/>
              <div className="compare-property-info">
                <h3>{property.title}</h3>

                <p>{property.location}</p>

                <span>
                  $
                  {property.price.toLocaleString()}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* NO COMMON FIELDS */}

        {commonFields.length === 0 ? (
          <div className="compare-empty-card">
            <h2>
              These properties cannot be
              compared.
            </h2>

            <p>
              No common attributes found
              between selected property
              types.
            </p>
          </div>
       ) : (
  <>
    <div className="comparison-table-wrapper">
      <table className="comparison-table">
        <tbody>
          {commonFields.map((field) => (
            <tr key={field}>
              <th>{field}</th>

              {propertyMaps.map((map, index) => (
                <td key={index}>
                  {map[field]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
)}

</div>

<Footer />
</>
);
}
export default Compare;