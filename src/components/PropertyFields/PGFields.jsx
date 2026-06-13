function PGFields({ details, handleChange, errors = {} }) {
  const showError = (key) =>
    errors[key] ? <p className="error">{errors[key]}</p> : null;

  return (
    <>
      <select
        name="sharingType"
        value={details.sharingType || ""}
        onChange={handleChange}
      >
        <option value="">Room Type</option>
        <option value="single">Single Sharing</option>
        <option value="double">Double Sharing</option>
      </select>
      {showError("sharingType")}

      <select name="wifi" value={details.wifi || ""} onChange={handleChange}>
        <option value="">WiFi</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
      {showError("wifi")}

      <select
        name="mealsIncluded"
        value={details.mealsIncluded || ""}
        onChange={handleChange}
      >
        <option value="">Meals Included</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
      {showError("mealsIncluded")}

      <input
        type="number"
        name="area"
        placeholder="Area (sqft)"
        value={details.area || ""}
        onChange={handleChange}
      />
      {showError("area")}

      <select
        name="furnishing"
        value={details.furnishing || ""}
        onChange={handleChange}
      >
        <option value="">Furnishing</option>
        <option value="Furnished">Furnished</option>
        <option value="Unfurnished">Unfurnished</option>
      </select>
      {showError("furnishing")}

      <select
        name="mode"
        value={details.mode || ""}
        onChange={handleChange}
      >  <option value="">Mode</option>
        <option value="buy">Buy</option>
        <option value="rent">Rent</option>
      </select>
      {showError("mode")}

      <input
        type="text"
        name="address"
        placeholder="Address"
        value={details.address || ""}
        onChange={handleChange}
      />
      {showError("address")}

      <select
        name="genderPreference"
        value={details.genderPreference || ""}
        onChange={handleChange}
      >
        <option value="">Gender Preference</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Unisex">Unisex</option>
      </select>
      {showError("genderPreference")}

      <input
        type="number"
        name="totalBeds"
        placeholder="Total Beds"
        value={details.totalBeds || ""}
        onChange={handleChange}
      />
      {showError("totalBeds")}

      <input
        type="number"
        name="availableBeds"
        placeholder="Available Beds"
        value={details.availableBeds || ""}
        onChange={handleChange}
      />
      {showError("availableBeds")}

      <input
        type="text"
        name="nearbyCollege"
        placeholder="Nearby College"
        value={details.nearbyCollege || ""}
        onChange={handleChange}
      />
      {showError("nearbyCollege")}

      <input
        type="text"
        name="nearbyMetro"
        placeholder="Nearby Metro"
        value={details.nearbyMetro || ""}
        onChange={handleChange}
      />
      {showError("nearbyMetro")}

      <select
        name="attachedBathroom"
        value={details.attachedBathroom || ""}
        onChange={handleChange}
      >
        <option value="">Attached Bathroom</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
      {showError("attachedBathroom")}

      <select
        name="foodIncluded"
        value={details.foodIncluded || ""}
        onChange={handleChange}
      >
        <option value="">Food Included</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
      {showError("foodIncluded")}

      <select
        name="laundryService"
        value={details.laundryService || ""}
        onChange={handleChange}
      >
        <option value="">Laundry Service</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
      {showError("laundryService")}

      <select
        name="housekeeping"
        value={details.housekeeping || ""}
        onChange={handleChange}
      >
        <option value="">Housekeeping</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
      {showError("housekeeping")}

      <select
        name="acRoom"
        value={details.acRoom || ""}
        onChange={handleChange}
      >
        <option value="">AC Room</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
      {showError("acRoom")}

      <select
        name="powerBackup"
        value={details.powerBackup || ""}
        onChange={handleChange}
      >
        <option value="">Power Backup</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
      {showError("powerBackup")}

      <select
        name="security"
        value={details.security || ""}
        onChange={handleChange}
      >
        <option value="">Security</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
      {showError("security")}

      <select
        name="cctv"
        value={details.cctv || ""}
        onChange={handleChange}
      >
        <option value="">CCTV Surveillance</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
      {showError("cctv")}

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

      <input
        type="number"
        name="safetyScore"
        placeholder="Safety Score (1-10)"
        value={details.safetyScore || ""}
        onChange={handleChange}
      />
      {showError("safetyScore")}

      <input
        type="text"
        name="occupancyRate"
        placeholder="Occupancy Rate (%)"
        value={details.occupancyRate || ""}
        onChange={handleChange}
      />
      {showError("occupancyRate")}
    </>
  );
}

export default PGFields;