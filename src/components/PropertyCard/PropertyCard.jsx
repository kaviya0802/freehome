import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import "./PropertyCard.css";

import {
  addToWishlist,
  removeFromWishlist,
  isWishlisted,
} from "../../utils/wishlist";

import { useCompare } from "../../context/CompareContext";

function PropertyCard({ property, onWishlistRemove }) {
  const navigate = useNavigate();

  const { selected, toggleProperty } = useCompare();
  const isSelected =
selected.some(
(p)=>
String(p.id)===
String(property.id)
);
  const [liked, setLiked] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [toast, setToast] = useState("");
  const [burst, setBurst] = useState(false);

  const clickTimeout = useRef(null);
  const lastClickTime = useRef(0);

  useEffect(() => {
try {

setLiked(
isWishlisted(
property?.id
)
);

} catch {

setLiked(false);

}

}, [property]);

  // ❤️ WISHLIST TOGGLE
 const triggerWishlist =
() => {

setLiked((prev) => {

if (prev) {

removeFromWishlist(
property.id
);

if (
onWishlistRemove
) {
onWishlistRemove(
property.id
);
}

setToast(
"Removed from wishlist"
);

return false;
}

addToWishlist(
property
);

setBurst(true);

setToast(
"Added to wishlist ❤️"
);

setTimeout(
() =>
setBurst(false),
700
);

return true;

});

setTimeout(
() =>
setToast(""),
2000
);

};

  // 🖱 SINGLE + DOUBLE CLICK LOGIC
  const handleClick = () => {
    const now = Date.now();
    const timeDiff = now - lastClickTime.current;
    lastClickTime.current = now;

    // DOUBLE CLICK → wishlist
    if (timeDiff < 300) {
      clearTimeout(clickTimeout.current);
      triggerWishlist();
      return;
    }

    // SINGLE CLICK → navigate
    clickTimeout.current = setTimeout(() => {
      navigate(`/property/${property.id}`, {
        state: { fromProperties: true },
      });
    }, 250);
  };

  // 📊 COMPARE TOGGLE (LIMIT SAFE)
   // ... inside PropertyCard function

  const handleCompare = (e) => {
    e.preventDefault();
    e.stopPropagation(); // Ensure this is here
    
    if (isSelected) {
      toggleProperty(property);
      setToast("Removed from compare List");
    } else {
      const added = toggleProperty(property);
      if (!added) {
        setToast("Only 3 properties can be compared");
      } else {
        setToast("Added to compare List");
      }
    }
    setTimeout(() => setToast(""), 2000);
  };

  return (
    <div
      className="property-card"
      onClick={handleClick}
      style={{
        border: isSelected ? "2px solid #00c853" : "1px solid #ddd",
        cursor: 'pointer'
      }}
    >
      {/* ❤️ WISHLIST BUTTON */}
      <button
        type="button"
        className={`wishlist-icon ${liked ? "active" : ""} ${animate ? "animate" : ""}`}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation(); // Prevents navigating to details page
          triggerWishlist();
        }}
      >
        {liked ? "❤️" : "🤍"}
      </button>

      {/* 📊 COMPARE BUTTON */}
      <button
        type="button"
        className={`compare-btn ${isSelected ? "active" : ""}`}
        onClick={handleCompare} // Uses the improved handler above
      >
        {isSelected ? "✔ Compare" : "+ Compare"}
      </button>

      {/* Rest of your component remains same */}
      {burst && <div className="heart-burst">❤️ ❤️ ❤️</div>}
      <img src={property?.images?.[0] || "/placeholder.jpg"} alt={property?.title} className="mylisting-image" />
      <div className="property-info">
        <h3>{property.title}</h3>
        <p>{property.location}</p>
        <span>${Number(property?.price || 0).toLocaleString()}</span>
      </div>
      {toast && <div className="toast">{toast}</div>}
    </div>
  );

}

export default PropertyCard;