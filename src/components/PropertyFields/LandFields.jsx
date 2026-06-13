function LandFields({ details, handleChange, errors = {} }) {
  const showError = (key) =>
    errors[key] ? <p className="error">{errors[key]}</p> : null;

  return (
    <>
      <input
        type="number"
        name="area"
        placeholder="Land Size (Hectares)"
        value={details.area || ""}
        onChange={handleChange}
      />
      {showError("area")}

      <input
        type="text"
        name="soilType"
        placeholder="Soil Type"
        value={details.soilType || ""}
        onChange={handleChange}
      />
      {showError("soilType")}

      <select
        name="roadAccess"
        value={details.roadAccess || ""}
        onChange={handleChange}
      >
        <option value="">Road Access</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
      {showError("roadAccess")}

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
        name="plotWidth"
        placeholder="Plot Width"
        value={details.plotWidth || ""}
        onChange={handleChange}
      />
      {showError("plotWidth")}

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

      <input
        type="number"
        name="plotLength"
        placeholder="Plot Length"
        value={details.plotLength || ""}
        onChange={handleChange}
      />
      {showError("plotLength")}

      <input
        type="number"
        name="roadWidth"
        placeholder="Road Width"
        value={details.roadWidth || ""}
        onChange={handleChange}
      />
      {showError("roadWidth")}

      <input
        type="text"
        name="facingDirection"
        placeholder="Facing Direction"
        value={details.facingDirection || ""}
        onChange={handleChange}
      />
      {showError("facingDirection")}

      <select name="zoningType"
      value={details.zoningType || ""}
        onChange={handleChange}
      >
  <option value="">Select Zoning Type</option>
  <option value="Residential">Residential</option>
  <option value="Commercial">Commercial</option>
  <option value="Industrial">Industrial</option>
  <option value="Agricultural">Agricultural</option>
  <option value="Mixed Use">Mixed Use</option>
  <option value="Institutional">Institutional</option>
</select>
      {showError("zoningType")}

      <select
        name="cornerPlot"
        value={details.cornerPlot || ""}
        onChange={handleChange}
      >
        <option value="">Corner Plot</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
      {showError("cornerPlot")}

      <select
        name="boundaryWall"
        value={details.boundaryWall || ""}
        onChange={handleChange}
      >
        <option value="">Boundary Wall</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
      {showError("boundaryWall")}

      <select
        name="waterConnection"
        value={details.waterConnection || ""}
        onChange={handleChange}
      >
        <option value="">Water Connection</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
      {showError("waterConnection")}

      <select
        name="electricityConnection"
        value={details.electricityConnection || ""}
        onChange={handleChange}
      >
        <option value="">Electricity Connection</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
      {showError("electricityConnection")}

      <select
        name="approvedLayout"
        value={details.approvedLayout || ""}
        onChange={handleChange}
      >
        <option value="">Approved Layout</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
      {showError("approvedLayout")}

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

      <select name="futureDevelopmentPotential"
      value={details.futureDevelopmentPotential || ""}
      onChange={handleChange}>
  <option value="">Select Potential</option>
  <option value="Low">Low</option>
  <option value="Moderate">Moderate</option>
  <option value="High">High</option>
  <option value="Very High">Very High</option>
</select>
      {showError("futureDevelopmentPotential")}
    </>
  );
}

export default LandFields;