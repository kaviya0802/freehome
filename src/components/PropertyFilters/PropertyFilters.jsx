import { useState, useEffect } from "react";
import "./PropertyFilters.css";

function PropertyFilters({ onChange }) {
  const [mode, setMode] = useState("");
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [sort, setSort] = useState("");
  const [propertyAge, setPropertyAge] = useState("");
  const [furnishing, setFurnishing] = useState("");
  const [parking, setParking] = useState("");
  useEffect(() => {
  onChange({
    mode,
    location,
    budget,
    bedrooms,
    bathrooms,
    propertyAge,
    furnishing,
    parking,
    sort,
  });
}, [
  mode,
  location,
  budget,
  bedrooms,
  bathrooms,
  propertyAge,
  furnishing,
  parking,
  sort,
  onChange,
]);

  return (
    <div className="filter-container">
      <select value={mode} onChange={(e) => setMode(e.target.value)}>
        <option value="">Buy / Rent</option>
        <option value="buy">Buy</option>
        <option value="rent">Rent</option>
      </select>

      <select value={location} onChange={(e) => setLocation(e.target.value)}>
        <option value="">Select Location</option>
        <option>Sydney</option>
        <option>Melbourne</option>
        <option>Brisbane</option>
        <option>Perth</option>
        <option>Adelaide</option>
        <option>Canberra</option>
        <option>Gold Coast</option>
        <option>Hobart</option>
        <option>Darwin</option>
        <option>New South Wales</option>
        <option>Victoria</option>
        <option>Queensland</option>
        <option>Western Australia</option>
        <option>South Australia</option>
        <option>Tasmania</option>
        <option>Northern Territory</option>
      </select>

      <select value={budget} onChange={(e) => setBudget(e.target.value)}>
        <option value="">Budget</option>
        <option value="pg1">$0 - $5,000</option>
        <option value="pg2">$5,000 - $10,000</option>
        <option value="pg3">$10,000+</option>
        <option value="200k">$200k - $500k</option>
        <option value="500k">$500k - $1M</option>
        <option value="1m">$1M+</option>
      </select>

      <select value={bedrooms} onChange={(e) => setBedrooms(e.target.value)}>
        <option value="">Bedrooms</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4+">4+</option>
      </select>

      <select value={bathrooms} onChange={(e) => setBathrooms(e.target.value)}>
        <option value="">Bathrooms</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3+">3+</option>
      </select>
      <select value={propertyAge} onChange={(e) => setPropertyAge(e.target.value)}>
       <option value="">Property Age</option>
       <option value="0-5">0 - 5 Years</option>
       <option value="5-10">5 - 10 Years</option>
       <option value="10-20">10 - 20 Years</option>
       <option value="20+">20+ Years</option>
     </select>
      <select value={furnishing} onChange={(e) => setFurnishing(e.target.value)}>
       <option value="">Furnishing</option>
       <option value="furnished">Furnished</option>
       <option value="unfurnished">Unfurnished</option>
      </select>
      <select value={parking} onChange={(e) => setParking(e.target.value)}>
       <option value="">Parking</option>
       <option value="1">1 Space</option>
       <option value="2">2 Spaces</option>
       <option value="3">3+ Spaces</option>
     </select>
      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="">Sort By</option>
        <option value="low">Price Low → High</option>
        <option value="high">Price High → Low</option>
      </select>

    </div>
  );
}

export default PropertyFilters;