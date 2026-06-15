const FieldWrapper = ({ children, error }) => (
    <div className="addprop-field">
      {children}
      {error && <p className="error">{error}</p>}
    </div>
  );
function ApartmentFields({ details, handleChange, errors = {} }) {


  return (
    <>
      <FieldWrapper error={errors.bedrooms}>
        <input
          type="number"
          name="bedrooms"
          placeholder="Bedrooms"
          value={details.bedrooms || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.bathrooms}>
        <input
          type="number"
          name="bathrooms"
          placeholder="Bathrooms"
          value={details.bathrooms || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.area}>
        <input
          type="number"
          name="area"
          placeholder="Area (sqft)"
          value={details.area || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.parking}>
        <input
          type="number"
          name="parking"
          placeholder="Parking Spaces"
          value={details.parking || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.propertyAge}>
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

      <FieldWrapper error={errors.mode}>
        <select
          name="mode"
          value={details.mode || ""}
          onChange={handleChange}
        >
          <option value="">Mode</option>
          <option value="Buy">Buy</option>
          <option value="Rent">Rent</option>
        </select>
      </FieldWrapper>

      <FieldWrapper error={errors.furnishing}>
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

      <FieldWrapper error={errors.address}>
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={details.address || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.floorNumber}>
        <input
          type="number"
          name="floorNumber"
          placeholder="Floor Number"
          value={details.floorNumber || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.totalFloors}>
        <input
          type="number"
          name="totalFloors"
          placeholder="Total Floors"
          value={details.totalFloors || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.builtUpArea}>
        <input
          type="number"
          name="builtUpArea"
          placeholder="Built-up Area (sqft)"
          value={details.builtUpArea || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.balconies}>
        <input
          type="number"
          name="balconies"
          placeholder="Balconies"
          value={details.balconies || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.maintenanceFee}>
        <input
          type="number"
          name="maintenanceFee"
          placeholder="Maintenance Fee"
          value={details.maintenanceFee || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.liftAvailable}>
        <select
          name="liftAvailable"
          value={details.liftAvailable || ""}
          onChange={handleChange}
        >
          <option value="">Lift Available</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </FieldWrapper>

      <FieldWrapper error={errors.gym}>
        <select
          name="gym"
          value={details.gym || ""}
          onChange={handleChange}
        >
          <option value="">Gym</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </FieldWrapper>

      <FieldWrapper error={errors.swimmingPool}>
        <select
          name="swimmingPool"
          value={details.swimmingPool || ""}
          onChange={handleChange}
        >
          <option value="">Swimming Pool</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </FieldWrapper>

      <FieldWrapper error={errors.clubhouse}>
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

      <FieldWrapper error={errors.powerBackup}>
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

      <FieldWrapper error={errors.security}>
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

      <FieldWrapper error={errors.trafficCondition}>
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

      <FieldWrapper error={errors.safetyScore}>
        <input
          type="number"
          name="safetyScore"
          placeholder="Safety Score (1-10)"
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
    </>
  );
}

export default ApartmentFields;