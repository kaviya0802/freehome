const FieldWrapper = ({
  children,
  error,
  fieldRef
}) => (
  <div
    className="addprop-field"
    ref={fieldRef}
  >
    {children}
    {error && <p className="error">{error}</p>}
  </div>
);

function TownhouseFields({
  details,
  handleChange,
  errors = {},
  fieldRefs = {}
}) {
  return (
    <>
      <FieldWrapper error={errors.bedrooms} fieldRef={fieldRefs.bedrooms}>
        <input
          type="number"
          name="bedrooms"
          placeholder="Bedrooms"
          value={details.bedrooms || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.bathrooms} fieldRef={fieldRefs.bathrooms}>
        <input
          type="number"
          name="bathrooms"
          placeholder="Bathrooms"
          value={details.bathrooms || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.area} fieldRef={fieldRefs.area}>
        <input
          type="number"
          name="area"
          placeholder="Area (sqft)"
          value={details.area || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.parking} fieldRef={fieldRefs.parking}>
        <input
          type="number"
          name="parking"
          placeholder="Parking Spaces"
          value={details.parking || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.propertyAge} fieldRef={fieldRefs.propertyAge}>
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
      </FieldWrapper>

      <FieldWrapper error={errors.mode} fieldRef={fieldRefs.mode}>
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

      <FieldWrapper error={errors.furnishing} fieldRef={fieldRefs.furnishing}>
        <select
          name="furnishing"
          value={details.furnishing || ""}
          onChange={handleChange}
        >
          <option value="">Furnishing</option>
          <option value="Furnished">Furnished</option>
          <option value="Unfurnished">Unfurnished</option>
        </select>
      </FieldWrapper>

      <FieldWrapper error={errors.address} fieldRef={fieldRefs.address}>
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={details.address || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.builtUpArea} fieldRef={fieldRefs.builtUpArea}>
        <input
          type="number"
          name="builtUpArea"
          placeholder="Built-up Area (sqft)"
          value={details.builtUpArea || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.balconies} fieldRef={fieldRefs.balconies}>
        <input
          type="number"
          name="balconies"
          placeholder="Balconies"
          value={details.balconies || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.floors} fieldRef={fieldRefs.floors}>
        <input
          type="number"
          name="floors"
          placeholder="Floors"
          value={details.floors || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.maintenanceFee} fieldRef={fieldRefs.maintenanceFee}>
        <input
          type="number"
          name="maintenanceFee"
          placeholder="Maintenance Fee"
          value={details.maintenanceFee || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.privateTerrace} fieldRef={fieldRefs.privateTerrace}>
        <select
          name="privateTerrace"
          value={details.privateTerrace || ""}
          onChange={handleChange}
        >
          <option value="">Private Terrace</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </FieldWrapper>

      <FieldWrapper error={errors.gatedCommunity} fieldRef={fieldRefs.gatedCommunity}>
        <select
          name="gatedCommunity"
          value={details.gatedCommunity || ""}
          onChange={handleChange}
        >
          <option value="">Gated Community</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </FieldWrapper>

      <FieldWrapper error={errors.clubhouse} fieldRef={fieldRefs.clubhouse}>
        <select
          name="clubhouse"
          value={details.clubhouse || ""}
          onChange={handleChange}
        >
          <option value="">Clubhouse</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </FieldWrapper>

      <FieldWrapper error={errors.security} fieldRef={fieldRefs.security}>
        <select
          name="security"
          value={details.security || ""}
          onChange={handleChange}
        >
          <option value="">Security</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </FieldWrapper>

      <FieldWrapper error={errors.powerBackup} fieldRef={fieldRefs.powerBackup}>
        <select
          name="powerBackup"
          value={details.powerBackup || ""}
          onChange={handleChange}
        >
          <option value="">Power Backup</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </FieldWrapper>

      <FieldWrapper error={errors.nearbySchools} fieldRef={fieldRefs.nearbySchools}>
        <input
          type="text"
          name="nearbySchools"
          placeholder="Nearby Schools"
          value={details.nearbySchools || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.nearbyHospitals} fieldRef={fieldRefs.nearbyHospitals}>
        <input
          type="text"
          name="nearbyHospitals"
          placeholder="Nearby Hospitals"
          value={details.nearbyHospitals || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.metroConnectivity} fieldRef={fieldRefs.metroConnectivity}>
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

      <FieldWrapper error={errors.trafficCondition} fieldRef={fieldRefs.trafficCondition}>
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
      </FieldWrapper>

      <FieldWrapper error={errors.safetyScore} fieldRef={fieldRefs.safetyScore}>
        <input
          type="number"
          name="safetyScore"
          placeholder="Safety Score (1-10)"
          value={details.safetyScore || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.propertyDemand} fieldRef={fieldRefs.propertyDemand}>
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
    </>
  );
}

export default TownhouseFields;