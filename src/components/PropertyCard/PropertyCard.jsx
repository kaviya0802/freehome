import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

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
  const handleClick = (e) => {

if (
e.target.closest(".wishlist-icon") ||
e.target.closest(".compare-btn")
) {
return;
}

navigate(
`/property/${property.id}`,
{
state:{
fromProperties:true
}
}
);

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
onTouchStart={(e)=>{

if(
e.target.closest(
".wishlist-icon"
) ||
e.target.closest(
".compare-btn"
)
){

e.stopPropagation();

}

}}

      style={{
        border: isSelected ? "2px solid #00c853" : "1px solid #ddd",
      }}
    >
      {/* ❤️ WISHLIST BUTTON */}
       <button
type="button"
className={`wishlist-icon ${
liked ? "active" : ""
} ${
animate ? "animate" : ""
}`}

onClick={(e)=>{
e.preventDefault();
e.stopPropagation();
triggerWishlist();
}}

>
{liked ? "❤️" : "🤍"}
</button>

      {/* 📊 COMPARE BUTTON */}
      <button
type="button"

className={`compare-btn ${
isSelected
? "active"
: ""
}`}

onClick={(e)=>{
e.preventDefault();
handleCompare(e);
}}

>
{isSelected
? "✔ Compare"
: "+ Compare"}
</button>

      {/* 💥 BURST ANIMATION */}
      {burst && <div className="heart-burst">❤️ ❤️ ❤️</div>}

      {/* 🏠 IMAGE */}
         <img
src={
property?.images?.length
? property.images[0]
: "/placeholder.jpg"
}
alt={property?.title || "Property"}
className="mylisting-image"
/>

      {/* 📄 INFO */}
      <div className="property-info">
        <h3>{property.title}</h3>
        <p>{property.location}</p>
        <span>
$
{Number(
property?.price || 0
).toLocaleString()}
</span>
      </div>

      {/* 🔔 TOAST */}
      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}

export default PropertyCard;