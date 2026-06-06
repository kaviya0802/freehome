import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
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

  const normalize = (str) =>
    (str || "")
      .toLowerCase()
      .replace(/\s+/g, "")
      .replace(/\//g, "");

  const filtered = properties.filter((property) => {
    const matchLocation =
      !location ||
      property.location.toLowerCase() === location.toLowerCase();

    const matchType =
      !type ||
      normalize(property.type) === normalize(type);

    const matchMode =
      !mode ||
      property.mode?.toLowerCase() === mode.toLowerCase();

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

  // Dynamic page title
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

          <p>{filtered.length} Properties Found</p>
        </div>

        {/* ✅ IMPORTANT CHANGE HERE */}
        <div
          className={`property-grid ${
            filtered.length === 1 ? "single-card" : ""
          }`}
        >

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
            </div>
          )}

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Properties;