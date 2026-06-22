function LandFields({
  details,
  handleChange,
  errors = {},
  fieldRefs
}) {

  const FieldWrapper = ({
    children,
    error,
    fieldName,
    fieldRefs
  }) => (
    <div
      className="addprop-field"
      ref={(el) => {
        if (el && fieldRefs) {
          fieldRefs.current[fieldName] = el;
        }
      }}
    >
      {children}
      {error && (
        <p className="error">
          {error}
        </p>
      )}
    </div>
  );

  return (
    <>
      <FieldWrapper error={errors.area} fieldName="area" fieldRefs={fieldRefs}>
        <input
          type="number"
          name="area"
          placeholder="Land Size (Hectares)"
          value={details.area || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.soilType} fieldName="soilType" fieldRefs={fieldRefs}>
        <input
          type="text"
          name="soilType"
          placeholder="Soil Type"
          value={details.soilType || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.roadAccess} fieldName="roadAccess" fieldRefs={fieldRefs}>
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

      <FieldWrapper error={errors.address} fieldName="address" fieldRefs={fieldRefs}>
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={details.address || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.plotWidth} fieldName="plotWidth" fieldRefs={fieldRefs}>
        <input
          type="number"
          name="plotWidth"
          placeholder="Plot Width"
          value={details.plotWidth || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.mode} fieldName="mode" fieldRefs={fieldRefs}>
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

      <FieldWrapper error={errors.plotLength} fieldName="plotLength" fieldRefs={fieldRefs}>
        <input
          type="number"
          name="plotLength"
          placeholder="Plot Length"
          value={details.plotLength || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.roadWidth} fieldName="roadWidth" fieldRefs={fieldRefs}>
        <input
          type="number"
          name="roadWidth"
          placeholder="Road Width"
          value={details.roadWidth || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.facingDirection} fieldName="facingDirection" fieldRefs={fieldRefs}>
        <input
          type="text"
          name="facingDirection"
          placeholder="Facing Direction"
          value={details.facingDirection || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.zoningType} fieldName="zoningType" fieldRefs={fieldRefs}>
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

      <FieldWrapper error={errors.cornerPlot} fieldName="cornerPlot" fieldRefs={fieldRefs}>
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

      <FieldWrapper error={errors.boundaryWall} fieldName="boundaryWall" fieldRefs={fieldRefs}>
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

      <FieldWrapper error={errors.waterConnection} fieldName="waterConnection" fieldRefs={fieldRefs}>
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

      <FieldWrapper error={errors.electricityConnection} fieldName="electricityConnection" fieldRefs={fieldRefs}>
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

      <FieldWrapper error={errors.approvedLayout} fieldName="approvedLayout" fieldRefs={fieldRefs}>
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

      <FieldWrapper error={errors.nearbySchools} fieldName="nearbySchools" fieldRefs={fieldRefs}>
        <input
          type="text"
          name="nearbySchools"
          placeholder="Nearby Schools"
          value={details.nearbySchools || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.nearbyHospitals} fieldName="nearbyHospitals" fieldRefs={fieldRefs}>
        <input
          type="text"
          name="nearbyHospitals"
          placeholder="Nearby Hospitals"
          value={details.nearbyHospitals || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.metroConnectivity} fieldName="metroConnectivity" fieldRefs={fieldRefs}>
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

      <FieldWrapper error={errors.safetyScore} fieldName="safetyScore" fieldRefs={fieldRefs}>
        <input
          type="number"
          name="safetyScore"
          placeholder="Safety Score"
          value={details.safetyScore || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.propertyDemand} fieldName="propertyDemand" fieldRefs={fieldRefs}>
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

      <FieldWrapper error={errors.futureDevelopmentPotential} fieldName="futureDevelopmentPotential" fieldRefs={fieldRefs}>
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