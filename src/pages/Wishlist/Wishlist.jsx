import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import { getWishlist } from "../../utils/wishlist";
import "./Wishlist.css";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    setWishlist(getWishlist());
  }, []);

  return (
    <>
      <Navbar />

      <div className="wishlist-container">
        <div className="wishlist-header">
          <h1>My Wishlist</h1>
          <span className="wishlist-h2">YOUR PERSONAL COLLECTION OF PERFECT PROPERTIES</span>
          <p>{wishlist.length} Saved Properties</p>
        </div>

        <div
          className={`property-grid wishlist-grid ${
            wishlist.length === 1 ? "single-card" : ""
          }`}
        >
          {wishlist.length > 0 ? (
            wishlist.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))
          ) : (
            <div className="no-results">
              <h2>No Wishlist Properties Yet</h2>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Wishlist;