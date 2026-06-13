function CommercialFields({ details, handleChange, errors = {} }) {
  const showError = (key) =>
    errors[key] ? <p className="error">{errors[key]}</p> : null;

  return (
    <>
      <select
        name="propertyType"
        value={details.propertyType || ""}
        onChange={handleChange}
      >
        <option value="">Property Type</option>
        <option value="Office">Office</option>
        <option value="Shop">Shop</option>
        <option value="Showroom">Showroom</option>
        <option value="Warehouse">Warehouse</option>
        <option value="Industrial Space">Industrial Space</option>
      </select>
      {showError("propertyType")}

      <input
        type="number"
        name="area"
        placeholder="Floor Area (sqft)"
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

      <input
        type="number"
        name="propertyAge"
        placeholder="Property Age (Years)"
        value={details.propertyAge || ""}
        onChange={handleChange}
      />
      {showError("propertyAge")}

      {/* ✅ FIXED MODE */}
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
        name="workstations"
        placeholder="Workstations"
        value={details.workstations || ""}
        onChange={handleChange}
      />
      {showError("workstations")}

      <input
        type="number"
        name="cabins"
        placeholder="Cabins"
        value={details.cabins || ""}
        onChange={handleChange}
      />
      {showError("cabins")}

      <input
        type="number"
        name="conferenceRooms"
        placeholder="Conference Rooms"
        value={details.conferenceRooms || ""}
        onChange={handleChange}
      />
      {showError("conferenceRooms")}

      <input
        type="number"
        name="washrooms"
        placeholder="Washrooms"
        value={details.washrooms || ""}
        onChange={handleChange}
      />
      {showError("washrooms")}

      <input
        type="text"
        name="nearbyMetro"
        placeholder="Nearby Metro"
        value={details.nearbyMetro || ""}
        onChange={handleChange}
      />
      {showError("nearbyMetro")}

      <select
        name="receptionArea"
        value={details.receptionArea || ""}
        onChange={handleChange}
      >
        <option value="">Reception Area</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
      {showError("receptionArea")}

      <select
        name="pantry"
        value={details.pantry || ""}
        onChange={handleChange}
      >
        <option value="">Pantry</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
      {showError("pantry")}

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

      <select
        name="internetReady"
        value={details.internetReady || ""}
        onChange={handleChange}
      >
        <option value="">Internet Ready</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
      {showError("internetReady")}

      <select
        name="liftAccess"
        value={details.liftAccess || ""}
        onChange={handleChange}
      >
        <option value="">Lift Access</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
      {showError("liftAccess")}

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

      <input
        type="number"
        name="safetyScore"
        placeholder="Safety Score"
        value={details.safetyScore || ""}
        onChange={handleChange}
      />
      {showError("safetyScore")}
    </>
  );
}

export default CommercialFields;