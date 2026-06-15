const FieldWrapper = ({ children, error }) => (
    <div className="addprop-field">
      {children}
      {error && <p className="error">{error}</p>}
    </div>
  );
function CommercialFields({ details, handleChange, errors = {} }) {

  return (
    <>
      <FieldWrapper error={errors.propertyType}>
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
      </FieldWrapper>

      <FieldWrapper error={errors.area}>
        <input
          type="number"
          name="area"
          placeholder="Floor Area (sqft)"
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
        <input
          type="number"
          name="propertyAge"
          placeholder="Property Age (Years)"
          value={details.propertyAge || ""}
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

      <FieldWrapper error={errors.workstations}>
        <input
          type="number"
          name="workstations"
          placeholder="Workstations"
          value={details.workstations || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.cabins}>
        <input
          type="number"
          name="cabins"
          placeholder="Cabins"
          value={details.cabins || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.conferenceRooms}>
        <input
          type="number"
          name="conferenceRooms"
          placeholder="Conference Rooms"
          value={details.conferenceRooms || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.washrooms}>
        <input
          type="number"
          name="washrooms"
          placeholder="Washrooms"
          value={details.washrooms || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.receptionArea}>
        <select
          name="receptionArea"
          value={details.receptionArea || ""}
          onChange={handleChange}
        >
          <option value="">Reception Area</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </FieldWrapper>

      <FieldWrapper error={errors.pantry}>
        <select
          name="pantry"
          value={details.pantry || ""}
          onChange={handleChange}
        >
          <option value="">Pantry</option>
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

      <FieldWrapper error={errors.internetReady}>
        <select
          name="internetReady"
          value={details.internetReady || ""}
          onChange={handleChange}
        >
          <option value="">Internet Ready</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </FieldWrapper>

      <FieldWrapper error={errors.liftAccess}>
        <select
          name="liftAccess"
          value={details.liftAccess || ""}
          onChange={handleChange}
        >
          <option value="">Lift Access</option>
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

      <FieldWrapper error={errors.safetyScore}>
        <input
          type="number"
          name="safetyScore"
          placeholder="Safety Score"
          value={details.safetyScore || ""}
          onChange={handleChange}
        />
      </FieldWrapper>
    </>
  );
}

export default CommercialFields;