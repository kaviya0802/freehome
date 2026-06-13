import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import MyListingCard from "../../components/MyListingCard/MyListingCard";

import "./MyListings.css";

function MyListings() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    loadProperties();
  }, []);

  const loadProperties = () => {
    const storedProperties =
      JSON.parse(localStorage.getItem("agentProperties")) || [];

    setProperties(storedProperties);
  };

  const deleteProperty = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this property?"
    );

    if (!confirmDelete) return;

    const updatedProperties = properties.filter(
      (property) => property.id !== id
    );

    localStorage.setItem(
      "agentProperties",
      JSON.stringify(updatedProperties)
    );

    setProperties(updatedProperties);
  };

  return (
    <>
      <Navbar />

      <div className="mylistings-container">
        <div className="mylistings-header">
          <h1>My Listings</h1>
          <p>{properties.length} Properties Posted</p>
        </div>

        {properties.length === 0 ? (
          <div className="empty-listing">
            <h2>No Properties Added Yet</h2>
            <p>Add your first property to see it here.</p>
          </div>
        ) : (
          <div
  className={`property-grid ${
    properties.length === 1 ? "single-card" : ""
  }`}
>
            {properties.map((property) => (
              <MyListingCard
                key={property.id}
                property={property}
                onDelete={deleteProperty}
              />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default MyListings;