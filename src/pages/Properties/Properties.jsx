import { useState } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import PropertyFilters from "../../components/PropertyFilters/PropertyFilters";
import { getAgentProperties } from "../../utils/propertyStorage";
import "./Properties.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Properties() {
  const query = useQuery();

  const location = query.get("location")
    ? decodeURIComponent(query.get("location"))
    : "";

  const type = query.get("type")
    ? decodeURIComponent(query.get("type"))
    : "";

  const budget = query.get("budget");
  const mode = query.get("mode");

  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({});
  const [resetKey, setResetKey] = useState(0);

  // ✅ ONLY AGENT PROPERTIES (NEW SOURCE)
  const allProperties = getAgentProperties();

  const normalize = (str) =>
    (str || "")
      .toLowerCase()
      .replace(/\s+/g, "")
      .replace(/\//g, "");

  // STEP 1: URL FILTERS
  const urlFiltered = allProperties.filter((property) => {
    const matchLocation =
      !location ||
      property.location?.toLowerCase() === location.toLowerCase();

    const matchType =
      !type ||
      normalize(property.type) === normalize(type);

    const matchMode =
      !mode ||
      property.mode?.toLowerCase() === mode.toLowerCase();

    const price = Number(property.price);

    let matchBudget = true;

    if (budget === "200k") {
      matchBudget = price >= 200000 && price <= 500000;
    } else if (budget === "500k") {
      matchBudget = price > 500000 && price <= 1000000;
    } else if (budget === "1m") {
      matchBudget = price > 1000000;
    }

    return (
      matchLocation &&
      matchType &&
      matchMode &&
      matchBudget
    );
  });

  // STEP 2: SEARCH FILTER
  const searched = urlFiltered.filter((property) => {
    if (!search) return true;

    const s = search.toLowerCase().trim();

    return (
      property.title?.toLowerCase().startsWith(s) ||
      property.type?.toLowerCase().startsWith(s) ||
      property.location?.toLowerCase().startsWith(s)
    );
  });

  // STEP 3: ADVANCED FILTERS
  const advancedFiltered = searched.filter((property) => {
    const matchType =
      !filters.type || property.type === filters.type;

    const matchMode =
      !filters.mode || property.mode === filters.mode;

    const matchLocation =
      !filters.location ||
      property.location
        ?.toLowerCase()
        .includes(filters.location.toLowerCase());

    const matchBedrooms =
      !filters.bedrooms ||
      (filters.bedrooms === "4+"
        ? Number(property.propertyDetails?.bedrooms) >= 4
        : Number(property.propertyDetails?.bedrooms)=== Number(filters.bedrooms));

    const matchBathrooms =
      !filters.bathrooms ||
      (filters.bathrooms === "3+"
        ? Number(property.propertyDetails?.bathrooms) >= 3
        : Number(property.propertyDetails?.bathrooms) === Number(filters.bathrooms));

    const matchPropertyAge =
  !filters.propertyAge ||
  property.propertyDetails?.propertyAge === filters.propertyAge;
    const matchFurnishing =
      !filters.furnishing ||
      property.propertyDetails?.furnishing?.toLowerCase() === filters.furnishing.toLowerCase();

    const matchParking =
      !filters.parking ||
      (() => {
        const p = Number(property.propertyDetails?.parking);

        if (filters.parking === "3+") return p >= 3;
        if (filters.parking === "3") return p === 3;
        if (filters.parking === "2") return p === 2;
        if (filters.parking === "1") return p === 1;

        return true;
      })();

    const price = Number(property.price);
     const matchBudget =
  !filters.budget ||
  (() => {
    if (filters.budget === "pg1")
      return price >= 0 && price <= 5000;

    if (filters.budget === "pg2")
      return price > 5000 && price <= 10000;

    if (filters.budget === "pg3")
      return price > 10000;

    if (filters.budget === "200k")
      return price >= 200000 && price <= 500000;

    if (filters.budget === "500k")
      return price > 500000 && price <= 1000000;

    if (filters.budget === "1m")
      return price > 1000000;

    return true;
  })();
    return (
      matchType &&
      matchMode &&
      matchLocation &&
      matchBedrooms &&
      matchBathrooms &&
      matchBudget &&
      matchPropertyAge &&
      matchFurnishing &&
      matchParking
    );
  });

  // STEP 4: SORTING
  let finalResults = [...advancedFiltered];

  if (filters.sort === "low") {
    finalResults.sort((a, b) => Number(a.price) - Number(b.price));
  }

  if (filters.sort === "high") {
    finalResults.sort((a, b) => Number(b.price) - Number(a.price));
  }

  let pageTitle = "Explore Properties";

  if (type) pageTitle = `${type} Properties`;
  else if (mode === "buy") pageTitle = "Properties for Sale";
  else if (mode === "rent") pageTitle = "Properties for Rent";

  const handleResetFilters = () => {
    setSearch("");
    setFilters({
      type: "",
      mode: "",
      location: "",
      bedrooms: "",
      bathrooms: "",
      propertyAge: "",
      furnishing: "",
      parking: "",
      budget: "",
      sort: "",
    });
    setResetKey((prev) => prev + 1);
  };

  return (
    <>
      <Navbar />

      <div className="properties-container">
        <div className="properties-header">
          <h1 className="propertypage-title">{pageTitle}</h1>

          <div className="page-tag">
            FreeHome Property Collection
          </div>

          <p>{finalResults.length} Properties Found</p>

          <div className="properties-searchbar">
            <input
              type="text"
              placeholder="Search properties..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <PropertyFilters key={resetKey} onChange={setFilters} />
        </div>

        <div
          className={`property-grid ${
            finalResults.length === 1 ? "single-card" : ""
          }`}
        >
          {finalResults.length > 0 ? (
            finalResults.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))
          ) : (
            <div className="properties-no-results">
              <h2>No Properties Found</h2>
              <p>Try adjusting filters or search keywords</p>
               <div className="no-results-buttons">
              <button className="btn-clear-search" onClick={() => setSearch("")}>
                Clear Search
              </button>

              <button className="btn-reset-filters" onClick={handleResetFilters}>
                Reset Filters
              </button>
             </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Properties;