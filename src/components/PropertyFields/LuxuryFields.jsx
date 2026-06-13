function ApartmentFields({ details, handleChange, errors = {} }) {
  const showError = (key) =>
    errors[key] ? <p className="error">{errors[key]}</p> : null;

  return (
    <>
      <input
        type="number"
        name="bedrooms"
        placeholder="Bedrooms"
        value={details.bedrooms || ""}
        onChange={handleChange}
      />
      {showError("bedrooms")}

      <input
        type="number"
        name="bathrooms"
        placeholder="Bathrooms"
        value={details.bathrooms || ""}
        onChange={handleChange}
      />
      {showError("bathrooms")}

      <input
        type="number"
        name="area"
        placeholder="Area (sqft)"
        value={details.area || ""}
        onChange={handleChange}
      />
      {showError("area")}

      <input
        type="number"
        name="parking"
        placeholder="Parking Spaces"
        value={details.parking || ""}
        onChange={handleChange}
      />
      {showError("parking")}

      <select
        name="propertyAge"
        value={details.propertyAge || ""}
        onChange={handleChange}
      >
        <option value="">Property Age</option>
        <option value="0-5">0-5 Years</option>
        <option value="5-10">5-10 Years</option>
        <option value="10-20">10-20 Years</option>
        <option value="20+">20+ Years</option>
      </select>
      {showError("propertyAge")}
       <select
        name="mode"
        value={details.mode || ""}
        onChange={handleChange}
      >
          <option value="">Mode</option>
        <option value="buy">Buy</option>
        <option value="rent">Rent</option>
      </select>
      {showError("mode")}

      <select
        name="furnishing"
        value={details.furnishing || ""}
        onChange={handleChange}
      >
        <option value="">Furnishing</option>
        <option value="Furnished">Furnished</option>
        <option value="Unfurnished">Unfurnished</option>
      </select>
      {showError("furnishing")}

      <input
        type="text"
        name="address"
        placeholder="Address"
        value={details.address || ""}
        onChange={handleChange}
      />
      {showError("address")}

      <input
        type="number"
        name="floorNumber"
        placeholder="Floor Number"
        value={details.floorNumber || ""}
        onChange={handleChange}
      />
      {showError("floorNumber")}

      <input
        type="number"
        name="totalFloors"
        placeholder="Total Floors"
        value={details.totalFloors || ""}
        onChange={handleChange}
      />
      {showError("totalFloors")}

      <input
        type="number"
        name="builtUpArea"
        placeholder="Built-up Area"
        value={details.builtUpArea || ""}
        onChange={handleChange}
      />
      {showError("builtUpArea")}

      <input
        type="number"
        name="balconies"
        placeholder="Balconies"
        value={details.balconies || ""}
        onChange={handleChange}
      />
      {showError("balconies")}

      <input
        type="number"
        name="maintenanceFee"
        placeholder="Maintenance Fee"
        value={details.maintenanceFee || ""}
        onChange={handleChange}
      />
      {showError("maintenanceFee")}

      <select name="liftAvailable" value={details.liftAvailable || ""} onChange={handleChange}>
        <option value="">Lift Available</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>

      <select name="gym" value={details.gym || ""} onChange={handleChange}>
        <option value="">Gym</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>

      <select name="swimmingPool" value={details.swimmingPool || ""} onChange={handleChange}>
        <option value="">Swimming Pool</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
      <input
        type="text"
        name="nearbySchools"
        placeholder="Nearby Schools"
        value={details.nearbySchools || ""}
        onChange={handleChange}
      />
      {showError("nearbySchools")}

      <input
        type="text"
        name="nearbyHospitals"
        placeholder="Nearby Hospitals"
        value={details.nearbyHospitals || ""}
        onChange={handleChange}
      />
      {showError("nearbyHospitals")}

      <select
        name="metroConnectivity"
        value={details.metroConnectivity || ""}
        onChange={handleChange}
      >
        <option value="">Metro Connectivity</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
      {showError("metroConnectivity")}

      <select
        name="trafficCondition"
        value={details.trafficCondition || ""}
        onChange={handleChange}
      >
        <option value="">Traffic Condition</option>
        <option value="Poor">Poor</option>
        <option value="Good">Good</option>
        <option value="Average">Average</option>
      </select>
      {showError("trafficCondition")}

      <select
        name="propertyDemand"
        value={details.propertyDemand || ""}
        onChange={handleChange}
      >
        <option value="">Property Demand</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      {showError("propertyDemand")}
    </>
  );
}

export default ApartmentFields;