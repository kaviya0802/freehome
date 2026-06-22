const FieldWrapper = ({ children, error }) => (
  <div className="addprop-field">
    {children}
    {error && <p className="error">{error}</p>}
  </div>
);

function LuxuryFields({
  details,
  handleChange,
  errors = {},
  fieldRefs
}) {

  const getRef = (name) => ({
    ref: (el) => {
      if (fieldRefs?.current) {
        fieldRefs.current[name] = el;
      }
    }
  });

  return (
    <>
      <FieldWrapper error={errors.bedrooms}>
        <input
          {...getRef("bedrooms")}
          type="number"
          name="bedrooms"
          placeholder="Bedrooms"
          value={details.bedrooms || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.bathrooms}>
        <input
          {...getRef("bathrooms")}
          type="number"
          name="bathrooms"
          placeholder="Bathrooms"
          value={details.bathrooms || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.area}>
        <input
          {...getRef("area")}
          type="number"
          name="area"
          placeholder="Area (sqft)"
          value={details.area || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.parking}>
        <input
          {...getRef("parking")}
          type="number"
          name="parking"
          placeholder="Parking Spaces"
          value={details.parking || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.propertyAge}>
        <select
          {...getRef("propertyAge")}
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
          {...getRef("mode")}
          name="mode"
          value={details.mode || ""}
          onChange={handleChange}
        >
          <option value="">Mode</option>
          <option value="buy">Buy</option>
          <option value="rent">Rent</option>
        </select>
      </FieldWrapper>

      <FieldWrapper error={errors.furnishing}>
        <select
          {...getRef("furnishing")}
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
          {...getRef("address")}
          type="text"
          name="address"
          placeholder="Address"
          value={details.address || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.landArea}>
        <input
          {...getRef("landArea")}
          type="number"
          name="landArea"
          placeholder="Land Area (sqft)"
          value={details.landArea || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.builtUpArea}>
        <input
          {...getRef("builtUpArea")}
          type="number"
          name="builtUpArea"
          placeholder="Built-up Area (sqft)"
          value={details.builtUpArea || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.parkingCapacity}>
        <input
          {...getRef("parkingCapacity")}
          type="number"
          name="parkingCapacity"
          placeholder="Parking Capacity"
          value={details.parkingCapacity || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.waterView}>
        <select
          {...getRef("waterView")}
          name="waterView"
          value={details.waterView || ""}
          onChange={handleChange}
        >
          <option value="">Water View</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </FieldWrapper>

      <FieldWrapper error={errors.luxuryRating}>
        <input
          {...getRef("luxuryRating")}
          type="number"
          name="luxuryRating"
          placeholder="Luxury Rating (1-10)"
          value={details.luxuryRating || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.privatePool}>
        <select
          {...getRef("privatePool")}
          name="privatePool"
          value={details.privatePool || ""}
          onChange={handleChange}
        >
          <option value="">Private Pool</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </FieldWrapper>

      <FieldWrapper error={errors.privateGym}>
        <select
          {...getRef("privateGym")}
          name="privateGym"
          value={details.privateGym || ""}
          onChange={handleChange}
        >
          <option value="">Private Gym</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </FieldWrapper>

      <FieldWrapper error={errors.homeTheater}>
        <select
          {...getRef("homeTheater")}
          name="homeTheater"
          value={details.homeTheater || ""}
          onChange={handleChange}
        >
          <option value="">Home Theater</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </FieldWrapper>

      <FieldWrapper error={errors.smartHomeFeatures}>
        <select
          {...getRef("smartHomeFeatures")}
          name="smartHomeFeatures"
          value={details.smartHomeFeatures || ""}
          onChange={handleChange}
        >
          <option value="">Smart Home Features</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </FieldWrapper>

      <FieldWrapper error={errors.privateGarden}>
        <select
          {...getRef("privateGarden")}
          name="privateGarden"
          value={details.privateGarden || ""}
          onChange={handleChange}
        >
          <option value="">Private Garden</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </FieldWrapper>

      <FieldWrapper error={errors.rooftopTerrace}>
        <select
          {...getRef("rooftopTerrace")}
          name="rooftopTerrace"
          value={details.rooftopTerrace || ""}
          onChange={handleChange}
        >
          <option value="">Rooftop Terrace</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </FieldWrapper>

      <FieldWrapper error={errors.securitySystem}>
        <select
          {...getRef("securitySystem")}
          name="securitySystem"
          value={details.securitySystem || ""}
          onChange={handleChange}
        >
          <option value="">Security System</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </FieldWrapper>

      <FieldWrapper error={errors.nearbySchools}>
        <input
          {...getRef("nearbySchools")}
          type="text"
          name="nearbySchools"
          placeholder="Nearby Schools"
          value={details.nearbySchools || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.nearbyHospitals}>
        <input
          {...getRef("nearbyHospitals")}
          type="text"
          name="nearbyHospitals"
          placeholder="Nearby Hospitals"
          value={details.nearbyHospitals || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.metroConnectivity}>
        <select
          {...getRef("metroConnectivity")}
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
          {...getRef("propertyDemand")}
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
          {...getRef("safetyScore")}
          type="number"
          name="safetyScore"
          placeholder="Safety Score (1-10)"
          value={details.safetyScore || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.investmentPotential}>
        <select
          {...getRef("investmentPotential")}
          name="investmentPotential"
          value={details.investmentPotential || ""}
          onChange={handleChange}
        >
          <option value="">Investment Potential</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </FieldWrapper>
    </>
  );
}

export default LuxuryFields;