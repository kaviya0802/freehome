import { useLocation } from "react-router-dom";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import properties from "../../data/generateProperties";
import "./Properties.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Properties() {
  const query = useQuery();

  const location = query.get("location");
  const type = query.get("type");
  const budget = query.get("budget");
  const mode = query.get("mode"); // ✅ NEW ADDED

  const filtered = properties.filter((property) => {
    const matchLocation =
      !location ||
      property.location.toLowerCase() === location.toLowerCase();

    const matchType =
      !type ||
      property.type.toLowerCase() === type.toLowerCase();

    const matchMode =
      !mode ||
      property.mode.toLowerCase() === mode.toLowerCase();

    // 💰 Budget filter FIXED (correct ranges)
    let matchBudget = true;

    const price = Number(property.price);

    if (budget === "200k") {
      matchBudget = price >= 200000 && price <= 500000;
    } else if (budget === "500k") {
      matchBudget = price > 500000 && price <= 1000000;
    } else if (budget === "1m") {
      matchBudget = price > 1000000;
    }

    return matchLocation && matchType && matchBudget && matchMode;
  });

  return (
    <div className="properties-container">

      {/* HEADER */}
      <div className="properties-header">
        <h1>Explore Properties</h1>
        <p>Find your perfect home across Australia</p>

        {/* OPTIONAL: show active filter */}
        {(location || type || budget || mode) && (
          <div className="active-filters">
            {location && <span>{location}</span>}
            {type && <span>{type}</span>}
            {budget && <span>{budget}</span>}
            {mode && <span>{mode.toUpperCase()}</span>}
          </div>
        )}
      </div>

      {/* GRID */}
      <div className="property-grid">

        {filtered.length > 0 ? (
          filtered.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
            />
          ))
        ) : (
          <div className="no-results">
            <h2>No Properties Found</h2>
            <p>Try adjusting your filters</p>
          </div>
        )}

      </div>

    </div>
  );
}

export default Properties;