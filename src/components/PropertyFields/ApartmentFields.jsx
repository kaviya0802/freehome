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

function ApartmentFields({
  details,
  handleChange,
  errors,
  fieldRefs
}) {

  return (
    <>
      <FieldWrapper error={errors.bedrooms} fieldName="bedrooms" fieldRefs={fieldRefs}>
        <input type="number" name="bedrooms" placeholder="Bedrooms" value={details.bedrooms || ""} onChange={handleChange}/>
      </FieldWrapper>

      <FieldWrapper error={errors.bathrooms} fieldName="bathrooms" fieldRefs={fieldRefs}>
        <input type="number" name="bathrooms" placeholder="Bathrooms" value={details.bathrooms || ""} onChange={handleChange}/>
      </FieldWrapper>

      <FieldWrapper error={errors.area} fieldName="area" fieldRefs={fieldRefs}>
        <input type="number" name="area" placeholder="Area (sqft)" value={details.area || ""} onChange={handleChange}/>
      </FieldWrapper>

      <FieldWrapper error={errors.parking} fieldName="parking" fieldRefs={fieldRefs}>
        <input type="number" name="parking" placeholder="Parking Spaces" value={details.parking || ""} onChange={handleChange}/>
      </FieldWrapper>

      <FieldWrapper error={errors.propertyAge} fieldName="propertyAge" fieldRefs={fieldRefs}>
        <select name="propertyAge" value={details.propertyAge || ""} onChange={handleChange}>
          <option value="">Property Age</option>
          <option value="0-5">0-5 Years</option>
          <option value="5-10">5-10 Years</option>
          <option value="10-20">10-20 Years</option>
          <option value="20+">20+ Years</option>
        </select>
      </FieldWrapper>

      <FieldWrapper error={errors.mode} fieldName="mode" fieldRefs={fieldRefs}>
        <select name="mode" value={details.mode || ""} onChange={handleChange}>
          <option value="">Mode</option>
          <option value="buy">Buy</option>
          <option value="rent">Rent</option>
        </select>
      </FieldWrapper>

      <FieldWrapper error={errors.furnishing} fieldName="furnishing" fieldRefs={fieldRefs}>
        <select name="furnishing" value={details.furnishing || ""} onChange={handleChange}>
          <option value="">Furnishing</option>
          <option value="Furnished">Furnished</option>
          <option value="Unfurnished">Unfurnished</option>
        </select>
      </FieldWrapper>

      <FieldWrapper error={errors.address} fieldName="address" fieldRefs={fieldRefs}>
        <input type="text" name="address" placeholder="Address" value={details.address || ""} onChange={handleChange}/>
      </FieldWrapper>

      <FieldWrapper error={errors.floorNumber} fieldName="floorNumber" fieldRefs={fieldRefs}>
        <input type="number" name="floorNumber" placeholder="Floor Number" value={details.floorNumber || ""} onChange={handleChange}/>
      </FieldWrapper>

      <FieldWrapper error={errors.totalFloors} fieldName="totalFloors" fieldRefs={fieldRefs}>
        <input type="number" name="totalFloors" placeholder="Total Floors" value={details.totalFloors || ""} onChange={handleChange}/>
      </FieldWrapper>

      <FieldWrapper error={errors.builtUpArea} fieldName="builtUpArea" fieldRefs={fieldRefs}>
        <input type="number" name="builtUpArea" placeholder="Built-up Area (sqft)" value={details.builtUpArea || ""} onChange={handleChange}/>
      </FieldWrapper>

      <FieldWrapper error={errors.balconies} fieldName="balconies" fieldRefs={fieldRefs}>
        <input type="number" name="balconies" placeholder="Balconies" value={details.balconies || ""} onChange={handleChange}/>
      </FieldWrapper>

      <FieldWrapper error={errors.maintenanceFee} fieldName="maintenanceFee" fieldRefs={fieldRefs}>
        <input type="number" name="maintenanceFee" placeholder="Maintenance Fee" value={details.maintenanceFee || ""} onChange={handleChange}/>
      </FieldWrapper>

      <FieldWrapper error={errors.liftAvailable} fieldName="liftAvailable" fieldRefs={fieldRefs}>
        <select name="liftAvailable" value={details.liftAvailable || ""} onChange={handleChange}>
          <option value="">Lift Available</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </FieldWrapper>

      <FieldWrapper error={errors.gym} fieldName="gym" fieldRefs={fieldRefs}>
        <select name="gym" value={details.gym || ""} onChange={handleChange}>
          <option value="">Gym</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </FieldWrapper>

      <FieldWrapper error={errors.swimmingPool} fieldName="swimmingPool" fieldRefs={fieldRefs}>
        <select name="swimmingPool" value={details.swimmingPool || ""} onChange={handleChange}>
          <option value="">Swimming Pool</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </FieldWrapper>

      <FieldWrapper error={errors.clubhouse} fieldName="clubhouse" fieldRefs={fieldRefs}>
        <select name="clubhouse" value={details.clubhouse || ""} onChange={handleChange}>
          <option value="">Clubhouse</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </FieldWrapper>

      <FieldWrapper error={errors.powerBackup} fieldName="powerBackup" fieldRefs={fieldRefs}>
        <select name="powerBackup" value={details.powerBackup || ""} onChange={handleChange}>
          <option value="">Power Backup</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </FieldWrapper>

      <FieldWrapper error={errors.security} fieldName="security" fieldRefs={fieldRefs}>
        <select name="security" value={details.security || ""} onChange={handleChange}>
          <option value="">Security</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </FieldWrapper>

      <FieldWrapper error={errors.nearbySchools} fieldName="nearbySchools" fieldRefs={fieldRefs}>
        <input type="text" name="nearbySchools" placeholder="Nearby Schools" value={details.nearbySchools || ""} onChange={handleChange}/>
      </FieldWrapper>

      <FieldWrapper error={errors.nearbyHospitals} fieldName="nearbyHospitals" fieldRefs={fieldRefs}>
        <input type="text" name="nearbyHospitals" placeholder="Nearby Hospitals" value={details.nearbyHospitals || ""} onChange={handleChange}/>
      </FieldWrapper>

      <FieldWrapper error={errors.metroConnectivity} fieldName="metroConnectivity" fieldRefs={fieldRefs}>
        <select name="metroConnectivity" value={details.metroConnectivity || ""} onChange={handleChange}>
          <option value="">Metro Connectivity</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </FieldWrapper>

      <FieldWrapper error={errors.trafficCondition} fieldName="trafficCondition" fieldRefs={fieldRefs}>
        <select name="trafficCondition" value={details.trafficCondition || ""} onChange={handleChange}>
          <option value="">Traffic Condition</option>
          <option>Poor</option>
          <option>Average</option>
          <option>Good</option>
        </select>
      </FieldWrapper>

      <FieldWrapper error={errors.safetyScore} fieldName="safetyScore" fieldRefs={fieldRefs}>
        <input type="number" name="safetyScore" placeholder="Safety Score (1-10)" value={details.safetyScore || ""} onChange={handleChange}/>
      </FieldWrapper>

      <FieldWrapper error={errors.propertyDemand} fieldName="propertyDemand" fieldRefs={fieldRefs}>
        <select name="propertyDemand" value={details.propertyDemand || ""} onChange={handleChange}>
          <option value="">Property Demand</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
      </FieldWrapper>

    </>
  );
}

export default ApartmentFields;