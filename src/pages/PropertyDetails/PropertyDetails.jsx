import { useParams, useNavigate } from "react-router-dom";
import {useState,useEffect,useRef}from "react";
import { useCompare } from "../../context/CompareContext";

import {
  addToWishlist,
  removeFromWishlist,
  isWishlisted,
} from "../../utils/wishlist";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import "../MyPropertyDetails/MyPropertyDetails.css";

function MyPropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [property, setProperty] = useState(null);
  
  const [imgIndex, setImgIndex] = useState(0);
  const [liked, setLiked] = useState(false);
  const [burst, setBurst] = useState(false);
  const [toast, setToast] = useState("");
  const lastTap = useRef(0);
  const { selected, toggleProperty } = useCompare();
  const isSelected =
selected.some(
(p)=>
String(p.id) ===
String(property?.id)
);
  const images = property?.images || [];
  useEffect(() => {
  const data =
    JSON.parse(localStorage.getItem("agentProperties")) || [];

  const found = data.find(
    (p) => String(p.id) === String(id)
  );

  if (found) {
    setProperty(found);
  }
}, [id]);
    
  useEffect(() => {
  if (property) {
    setLiked(isWishlisted(property.id));
  }
}, [property]);
const triggerWishlist = () => {

if (!property) return;

const exists =
isWishlisted(property.id);

if (exists) {

removeFromWishlist(
property.id
);

setLiked(false);

setToast(
"Removed from wishlist"
);

} else {

addToWishlist(
property
);

setLiked(true);

setBurst(true);

setToast(
"Added to wishlist ❤️"
);

setTimeout(
() =>
setBurst(false),
800
);

}

setTimeout(
() =>
setToast(""),
2000
);

};

const handleDoubleClick = () => triggerWishlist();

const handleClickHeart = (e) => {
  e.stopPropagation();
  triggerWishlist();
};
const handleCompare=(e)=>{

e.stopPropagation();

const exists =
selected.some(
(p)=>
String(p.id)===
String(property.id)
);

const result=
toggleProperty(
property
);

setToast(

exists
? "Removed from compare List"

: result===false

? "Only 3 properties can be compared"

: "Added to compare List"

);

setTimeout(
()=>setToast(""),
2000
);

};
  if (!property) {
    return (
      <>
        <Navbar />
        <div className="mypd-not-found">
          <h2>Property Not Found</h2>
          <button onClick={() => navigate("/agent/listings")}>
            Back
          </button>
        </div>
        <Footer />
      </>
    );
  }
const d = property?.propertyDetails || {};
  // ✅ convert true/false → Yes/No
  const formatValue = (value) => {
  if (typeof value === "boolean") {
    return value ? "Yes" : "No";
  }
  return value;
};
  return (
    <>
      <Navbar />

      <div className="mypd-page">

<div
className="mypd-image-section"

onTouchEnd={()=>{

const now=
Date.now();

if(
now-
lastTap.current
<
300
){
triggerWishlist();
}

lastTap.current=
now;

}}
>

  <button
type="button"
className={`wishlist-icon ${
liked ? "active" : ""
}`}
onClick={(e)=>{
e.stopPropagation();
handleClickHeart(e);
}}

onTouchStart={(e)=>{
e.stopPropagation();
}}

>
    {liked ? "❤️" : "🤍"}
  </button>

  {burst && (
    <div className="heart-burst">
      ❤️ ❤️ ❤️
    </div>
  )}

  <div className="mypd-slider-wrapper">

    <button
      className="mypd-slider-btn mypd-left"
      onClick={() =>
        setImgIndex((prev) =>
          prev === 0 ? images.length - 1 : prev - 1
        )
      }
    >
      ◀
    </button>

    <img
      src={images[imgIndex]}
      alt={property.title}
      className="mypd-slider-image"
    />

    <button
      className="mypd-slider-btn mypd-right"
      onClick={() =>
        setImgIndex((prev) =>
          prev === images.length - 1 ? 0 : prev + 1
        )
      }
    >
      ▶
    </button>

    <span className="mypd-type-badge">
      {property.type}
    </span>

     <button
type="button"
className={`compare-img-btn ${
isSelected ? "active" : ""
}`}
onClick={(e)=>{
e.stopPropagation();
handleCompare(e);
}}

onTouchStart={(e)=>{
e.stopPropagation();
}}
>
      {isSelected
        ? "✔ Compare"
        : "+ Compare"}
    </button>

  </div>
</div>
        {/* TITLE + PRICE */}
        <div className="mypd-top-row">
  <h1>{property.title}</h1>

  <h2 className="mypd-price">
    ${Number(property.price).toLocaleString()}
  </h2>
</div>
        {/* LOCATION */}
       <p className="mypd-location">
  {property.location}
</p>
        {/* DETAILS */}
        <h2>Property Details</h2>

        <div className="mypd-meta-box">
  {Object.entries(d).map(([key, value]) => (
    <div key={key} className="mypd-meta-item">
      <h3>{formatValue(value)}</h3>

      <p>
        {key
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, (str) =>
            str.toUpperCase()
          )}
      </p>
    </div>
  ))}
</div>
        {/* DESCRIPTION */}
       <div className="mypd-description">
  <h2>Property Overview</h2>
  <p>{property.description}</p>
</div>
        {/* BUTTONS */}
      <div className="mypd-pd-buttons">
  <button
    className="mypd-pd-btn mypd-pd-btn-primary"
    onClick={() =>
      navigate(`/contact-agent/${property.id}`)}
    
  >
    Contact Agent
  </button>

  <button
    className="mypd-pd-btn mypd-pd-btn-secondary"
    onClick={() =>
      navigate("/properties")}
  >
    Back
  </button>
</div>
      </div>
    {toast && (
  <div className="toast">
    {toast}
  </div>
)}
      <Footer />
    </>
  );
}

export default MyPropertyDetails;