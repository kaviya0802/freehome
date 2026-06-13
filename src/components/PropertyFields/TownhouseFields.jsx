function TownhouseFields({ details, handleChange, errors = {} }) {
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
        name="builtUpArea"
        placeholder="Built-up Area (sqft)"
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
        name="floors"
        placeholder="Floors"
        value={details.floors || ""}
        onChange={handleChange}
      />
      {showError("floors")}

      <input
        type="number"
        name="maintenanceFee"
        placeholder="Maintenance Fee"
        value={details.maintenanceFee || ""}
        onChange={handleChange}
      />
      {showError("maintenanceFee")}

      <select
        name="privateTerrace"
        value={details.privateTerrace || ""}
        onChange={handleChange}
      >
        <option value="">Private Terrace</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
      {showError("privateTerrace")}

      <select
        name="gatedCommunity"
        value={details.gatedCommunity || ""}
        onChange={handleChange}
      >
        <option value="">Gated Community</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
      {showError("gatedCommunity")}

      <select
        name="clubhouse"
        value={details.clubhouse || ""}
        onChange={handleChange}
      >
        <option value="">Clubhouse</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
      {showError("clubhouse")}

      <select
        name="security"
        value={details.security || ""}
        onChange={handleChange}
      >
        <option value="">Security</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
      {showError("security")}

      <select
        name="powerBackup"
        value={details.powerBackup || ""}
        onChange={handleChange}
      >
        <option value="">Power Backup</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
      {showError("powerBackup")}

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
        <option value="Average">Average</option>
        <option value="Good">Good</option>
      </select>
      {showError("trafficCondition")}

      <input
        type="number"
        name="safetyScore"
        placeholder="Safety Score"
        value={details.safetyScore || ""}
        onChange={handleChange}
      />
      {showError("safetyScore")}

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

export default TownhouseFields;