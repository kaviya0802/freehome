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
  const isSelected = selected.find((p) => p.id === property.id);

  const [liked, setLiked] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [toast, setToast] = useState("");
  const [burst, setBurst] = useState(false);

  const clickTimeout = useRef(null);
  const lastClickTime = useRef(0);

  useEffect(() => {
    setLiked(isWishlisted(property.id));
  }, [property.id]);

  // ❤️ WISHLIST TOGGLE
  const triggerWishlist = () => {
    if (liked) {
  removeFromWishlist(property.id);
  setLiked(false);

  if (onWishlistRemove) {
    onWishlistRemove(property.id);
  }

  setToast("Removed from wishlist");
}
    else {
      addToWishlist(property);
      setLiked(true);
      setAnimate(true);
      setBurst(true);
      setToast("Added to wishlist ❤️");

      setTimeout(() => setAnimate(false), 600);
      setTimeout(() => setBurst(false), 700);
    }

    setTimeout(() => setToast(""), 2000);
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
   const handleCompare = (e) => {
  e.stopPropagation();

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
      }}
    >
      {/* ❤️ WISHLIST BUTTON */}
      <button
        className={`wishlist-icon ${liked ? "active" : ""} ${
          animate ? "animate" : ""
        }`}
        onClick={(e) => {
          e.stopPropagation();
          triggerWishlist();
        }}
      >
        {liked ? "❤️" : "🤍"}
      </button>

      {/* 📊 COMPARE BUTTON */}
      <button
        className={`compare-btn ${isSelected ? "active" : ""}`}
        onClick={handleCompare}
      >
        {isSelected ? "✔ Compare" : "+ Compare"}
      </button>

      {/* 💥 BURST ANIMATION */}
      {burst && <div className="heart-burst">❤️ ❤️ ❤️</div>}

      {/* 🏠 IMAGE */}
         <img
        src={
          property.images?.[0]
            ? property.images[0]
            : "https://source.unsplash.com/600x400/?house"
        }
        alt={property.title}
        className="mylisting-image"
      />


      {/* 📄 INFO */}
      <div className="property-info">
        <h3>{property.title}</h3>
        <p>{property.location}</p>
        <span>${property.price.toLocaleString()}</span>
      </div>

      {/* 🔔 TOAST */}
      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}

export default PropertyCard;