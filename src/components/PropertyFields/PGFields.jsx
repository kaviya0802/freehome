const FieldWrapper = ({ children, error }) => (
  <div className="addprop-field">
    {children}
    {error && <p className="error">{error}</p>}
  </div>
);

function PGFields({
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
      <FieldWrapper error={errors.sharingType}>
        <select
          {...getRef("sharingType")}
          name="sharingType"
          value={details.sharingType || ""}
          onChange={handleChange}
        >
          <option value="">Room Type</option>
          <option value="single">Single Sharing</option>
          <option value="double">Double Sharing</option>
        </select>
      </FieldWrapper>

      <FieldWrapper error={errors.wifi}>
        <select
          {...getRef("wifi")}
          name="wifi"
          value={details.wifi || ""}
          onChange={handleChange}
        >
          <option value="">WiFi</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </FieldWrapper>

      <FieldWrapper error={errors.mealsIncluded}>
        <select
          {...getRef("mealsIncluded")}
          name="mealsIncluded"
          value={details.mealsIncluded || ""}
          onChange={handleChange}
        >
          <option value="">Meals Included</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
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

      <FieldWrapper error={errors.genderPreference}>
        <select
          {...getRef("genderPreference")}
          name="genderPreference"
          value={details.genderPreference || ""}
          onChange={handleChange}
        >
          <option value="">Gender Preference</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Unisex">Unisex</option>
        </select>
      </FieldWrapper>

      <FieldWrapper error={errors.totalBeds}>
        <input
          {...getRef("totalBeds")}
          type="number"
          name="totalBeds"
          placeholder="Total Beds"
          value={details.totalBeds || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.availableBeds}>
        <input
          {...getRef("availableBeds")}
          type="number"
          name="availableBeds"
          placeholder="Available Beds"
          value={details.availableBeds || ""}
          onChange={handleChange}
        />
      </FieldWrapper>

      <FieldWrapper error={errors.nearbyCollege}>
        <input
          {...getRef("nearbyCollege")}
          type="text"
          name="nearbyCollege"
          placeholder="Nearby College"
          value={details.nearbyCollege || ""}
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

      <FieldWrapper error={errors.attachedBathroom}>
        <select
          {...getRef("attachedBathroom")}
          name="attachedBathroom"
          value={details.attachedBathroom || ""}
          onChange={handleChange}
        >
          <option value="">Attached Bathroom</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </FieldWrapper>

      <FieldWrapper error={errors.foodIncluded}>
        <select
          {...getRef("foodIncluded")}
          name="foodIncluded"
          value={details.foodIncluded || ""}
          onChange={handleChange}
        >
          <option value="">Food Included</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </FieldWrapper>

      <FieldWrapper error={errors.laundryService}>
        <select
          {...getRef("laundryService")}
          name="laundryService"
          value={details.laundryService || ""}
          onChange={handleChange}
        >
          <option value="">Laundry Service</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </FieldWrapper>

      <FieldWrapper error={errors.housekeeping}>
        <select
          {...getRef("housekeeping")}
          name="housekeeping"
          value={details.housekeeping || ""}
          onChange={handleChange}
        >
          <option value="">Housekeeping</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </FieldWrapper>

      <FieldWrapper error={errors.acRoom}>
        <select
          {...getRef("acRoom")}
          name="acRoom"
          value={details.acRoom || ""}
          onChange={handleChange}
        >
          <option value="">AC Room</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </FieldWrapper>

      <FieldWrapper error={errors.powerBackup}>
        <select
          {...getRef("powerBackup")}
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
          {...getRef("security")}
          name="security"
          value={details.security || ""}
          onChange={handleChange}
        >
          <option value="">Security</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </FieldWrapper>

      <FieldWrapper error={errors.cctv}>
        <select
          {...getRef("cctv")}
          name="cctv"
          value={details.cctv || ""}
          onChange={handleChange}
        >
          <option value="">CCTV Surveillance</option>
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

      <FieldWrapper error={errors.occupancyRate}>
        <input
          {...getRef("occupancyRate")}
          type="text"
          name="occupancyRate"
          placeholder="Occupancy Rate (%)"
          value={details.occupancyRate || ""}
          onChange={handleChange}
        />
      </FieldWrapper>
    </>
  );
}

export default PGFields;