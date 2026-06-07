import { useState } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import PropertyFilters from "../../components/PropertyFilters/PropertyFilters";
import properties from "../../data/generateProperties";
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

  const normalize = (str) =>
    (str || "")
      .toLowerCase()
      .replace(/\s+/g, "")
      .replace(/\//g, "");

  // STEP 1: URL FILTERS
  const urlFiltered = properties.filter((property) => {
    const matchLocation =
      !location ||
      property.location.toLowerCase() === location.toLowerCase();

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

    return matchLocation && matchType && matchMode && matchBudget;
  });

  // STEP 2: SEARCH FILTER
  const searched = urlFiltered.filter((property) => {
    if (!search) return true;

    const s = search.toLowerCase();

    return (
      property.title.toLowerCase().includes(s) ||
      property.location.toLowerCase().includes(s) ||
      property.type.toLowerCase().includes(s)
    );
  });

  // STEP 3: ADVANCED FILTERS (FIXED)
  const advancedFiltered = searched.filter((property) => {
    const matchType =
      !filters.type || property.type === filters.type;

    const matchMode =
      !filters.mode || property.mode === filters.mode;

    const matchLocation =
      !filters.location ||
      property.location.toLowerCase().includes(
        filters.location.toLowerCase()
      );

    // FIXED: Bedrooms 4+
    const matchBedrooms =
      !filters.bedrooms ||
      (filters.bedrooms === "4+"
        ? Number(property.bedrooms) >= 4
        : Number(property.bedrooms) === Number(filters.bedrooms));

    // FIXED: Bathrooms 3+
    const matchBathrooms =
      !filters.bathrooms ||
      (filters.bathrooms === "3+"
        ? Number(property.bathrooms) >= 3
        : Number(property.bathrooms) === Number(filters.bathrooms));
    const age = new Date().getFullYear() - property.yearBuilt;

   const matchPropertyAge =
      !filters.propertyAge ||
      (filters.propertyAge === "0-5" && age <= 5) ||
      (filters.propertyAge === "5-10" && age > 5 && age <= 10) ||
      (filters.propertyAge === "10-20" && age > 10 && age <= 20) ||
      (filters.propertyAge === "20+" && age > 20);
    const matchFurnishing =
      !filters.furnishing ||
      (filters.furnishing === "furnished" && property.furnished) ||
      (filters.furnishing === "unfurnished" && !property.furnished);
    const matchParking =
  !filters.parking ||
  (property.parking > 0 &&
    (filters.parking === "3"
      ? property.parking >= 3
      : property.parking === Number(filters.parking)));
    // FIXED: Budget logic added properly
    const price = Number(property.price);

    const matchBudget =
      !filters.budget ||
      (() => {
        if (filters.budget === "pg1") return price <= 5000;
        if (filters.budget === "pg2") return price > 5000 && price <= 10000;
        if (filters.budget === "pg3") return price > 10000;

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
    finalResults.sort((a, b) => a.price - b.price);
  }

  if (filters.sort === "high") {
    finalResults.sort((a, b) => b.price - a.price);
  }

  let pageTitle = "Explore Properties";

  if (type) {
    pageTitle = `${type} Properties`;
  } else if (mode === "buy") {
    pageTitle = "Properties for Sale";
  } else if (mode === "rent") {
    pageTitle = "Properties for Rent";
  }

  return (
    <>
      <Navbar />

      <div className="properties-container">

        <div className="properties-header">
          <div className="page-tag">
            FreeHome Property Collection
          </div>

          <h1>{pageTitle}</h1>

          <p>{finalResults.length} Properties Found</p>

          <div className="properties-search">
            <input
              type="text"
              placeholder="Search properties..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <PropertyFilters onChange={setFilters} />
        </div>

        <div
          className={`property-grid ${
            finalResults.length === 1 ? "single-card" : ""
          }`}
        >
          {finalResults.length > 0 ? (
            finalResults.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
              />
            ))
          ) : (
            <div className="no-results">
              <h2>No Properties Found</h2>
              <p>Try adjusting filters or search keywords</p>

              <button onClick={() => setSearch("")}>
                Clear Search
              </button>

              <button onClick={() => setFilters({})}>
                Reset Filters
              </button>
            </div>
          )}
        </div>

      </div>

      <Footer />
    </>
  );
}

export default Properties;