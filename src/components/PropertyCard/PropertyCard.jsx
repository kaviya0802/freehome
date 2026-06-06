import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "./PropertyCard.css";

import {
  addToWishlist,
  removeFromWishlist,
  isWishlisted,
} from "../../utils/wishlist";

function PropertyCard({ property }) {
  const navigate = useNavigate();

  const [liked, setLiked] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [toast, setToast] = useState("");
  const [burst, setBurst] = useState(false);

  const clickTimeout = useRef(null);
  const lastClickTime = useRef(0);

  useEffect(() => {
    setLiked(isWishlisted(property.id));
  }, [property.id]);

  const triggerWishlist = () => {
    if (liked) {
      removeFromWishlist(property.id);
      setLiked(false);
      setToast("Removed from wishlist");
    } else {
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

  const handleClick = () => {
    const now = Date.now();
    const timeDiff = now - lastClickTime.current;
    lastClickTime.current = now;

    // DOUBLE CLICK → wishlist only
    if (timeDiff < 300) {
      clearTimeout(clickTimeout.current);
      triggerWishlist();
      return;
    }

    // SINGLE CLICK → delay navigation slightly
    clickTimeout.current = setTimeout(() => {
      navigate(`/property/${property.id}`);
    }, 250);
  };

  return (
    <div className="property-card" onClick={handleClick}>

      {/* ❤️ HEART BUTTON */}
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

      {/* 💥 BURST */}
      {burst && <div className="heart-burst">❤️ ❤️ ❤️</div>}

      <img
        src={property.image}
        alt={property.title}
        onError={(e) =>
          (e.target.src =
            "https://source.unsplash.com/600x400/?house")
        }
      />

      <div className="property-info">
        <h3>{property.title}</h3>
        <p>{property.location}</p>
        <span>${property.price.toLocaleString()}</span>
      </div>

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}

export default PropertyCard;