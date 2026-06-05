import { useNavigate } from "react-router-dom";
import "./PropertyCard.css";

function PropertyCard({ property }) {
  const navigate = useNavigate();

  return (
    <div
      className="property-card"
      onClick={() => navigate(`/property/${property.id}`)}
    >
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
    </div>
  );
}

export default PropertyCard;