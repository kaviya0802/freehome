 const FieldWrapper = ({ children, error }) => (
    <div className="addprop-field">
      {children}
      {error && <p className="error">{error}</p>}
    </div>
  );

function VillaFields({ details, handleChange, errors = {} }) {
 
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

      <FieldWrapper error={errors.landArea}>
        <input
          type="number"
          name="landArea"
          placeholder="Land Area (sqft)"
          value={details.landArea || ""}
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

      <FieldWrapper error={errors.floors}>
        <input
          type="number"
          name="floors"
          placeholder="Total Floors"
          value={details.floors || ""}
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

      <FieldWrapper error={errors.facingDirection}>
        <input
          type="text"
          name="facingDirection"
          placeholder="Facing Direction"
          value={details.facingDirection || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.privateGarden}>
        <select
          name="privateGarden"
          value={details.privateGarden || ""}
          onChange={handleChange}
        >
          <option value="">Private Garden</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </FieldWrapper>

      <FieldWrapper error={errors.privatePool}>
        <select
          name="privatePool"
          value={details.privatePool || ""}
          onChange={handleChange}
        >
          <option value="">Private Pool</option>
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

export default VillaFields;