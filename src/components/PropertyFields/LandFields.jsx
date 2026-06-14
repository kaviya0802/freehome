function LandFields({ details, handleChange, errors = {} }) {

  const FieldWrapper = ({ children, error }) => (
    <div className="addprop-field">
      {children}
      {error && <p className="error">{error}</p>}
    </div>
  );

  return (
    <>
      <FieldWrapper error={errors.area}>
        <input
          type="number"
          name="area"
          placeholder="Land Size (Hectares)"
          value={details.area || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.soilType}>
        <input
          type="text"
          name="soilType"
          placeholder="Soil Type"
          value={details.soilType || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.roadAccess}>
        <select
          name="roadAccess"
          value={details.roadAccess || ""}
          onChange={handleChange}
        >
          <option value="">Road Access</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </FieldWrapper>

      <FieldWrapper error={errors.address}>
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={details.address || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.plotWidth}>
        <input
          type="number"
          name="plotWidth"
          placeholder="Plot Width"
          value={details.plotWidth || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.mode}>
        <select
          name="mode"
          value={details.mode || ""}
          onChange={handleChange}
        >
          <option value="">Mode</option>
          <option value="buy">Buy</option>
          <option value="rent">Rent</option>
        </select>
      </FieldWrapper>

      <FieldWrapper error={errors.plotLength}>
        <input
          type="number"
          name="plotLength"
          placeholder="Plot Length"
          value={details.plotLength || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.roadWidth}>
        <input
          type="number"
          name="roadWidth"
          placeholder="Road Width"
          value={details.roadWidth || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.facingDirection}>
        <input
          type="text"
          name="facingDirection"
          placeholder="Facing Direction"
          value={details.facingDirection || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.zoningType}>
        <select
          name="zoningType"
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
      </FieldWrapper>

      <FieldWrapper error={errors.cornerPlot}>
        <select
          name="cornerPlot"
          value={details.cornerPlot || ""}
          onChange={handleChange}
        >
          <option value="">Corner Plot</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </FieldWrapper>

      <FieldWrapper error={errors.boundaryWall}>
        <select
          name="boundaryWall"
          value={details.boundaryWall || ""}
          onChange={handleChange}
        >
          <option value="">Boundary Wall</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </FieldWrapper>

      <FieldWrapper error={errors.waterConnection}>
        <select
          name="waterConnection"
          value={details.waterConnection || ""}
          onChange={handleChange}
        >
          <option value="">Water Connection</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </FieldWrapper>

      <FieldWrapper error={errors.electricityConnection}>
        <select
          name="electricityConnection"
          value={details.electricityConnection || ""}
          onChange={handleChange}
        >
          <option value="">Electricity Connection</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </FieldWrapper>

      <FieldWrapper error={errors.approvedLayout}>
        <select
          name="approvedLayout"
          value={details.approvedLayout || ""}
          onChange={handleChange}
        >
          <option value="">Approved Layout</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </FieldWrapper>

      <FieldWrapper error={errors.nearbySchools}>
        <input
          type="text"
          name="nearbySchools"
          placeholder="Nearby Schools"
          value={details.nearbySchools || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.nearbyHospitals}>
        <input
          type="text"
          name="nearbyHospitals"
          placeholder="Nearby Hospitals"
          value={details.nearbyHospitals || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.metroConnectivity}>
        <select
          name="metroConnectivity"
          value={details.metroConnectivity || ""}
          onChange={handleChange}
        >
          <option value="">Metro Connectivity</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </FieldWrapper>

      <FieldWrapper error={errors.safetyScore}>
        <input
          type="number"
          name="safetyScore"
          placeholder="Safety Score"
          value={details.safetyScore || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.propertyDemand}>
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
      </FieldWrapper>

      <FieldWrapper error={errors.futureDevelopmentPotential}>
        <select
          name="futureDevelopmentPotential"
          value={details.futureDevelopmentPotential || ""}
          onChange={handleChange}
        >
          <option value="">Select Potential</option>
          <option value="Low">Low</option>
          <option value="Moderate">Moderate</option>
          <option value="High">High</option>
          <option value="Very High">Very High</option>
        </select>
      </FieldWrapper>
    </>
  );
}

export default LandFields;