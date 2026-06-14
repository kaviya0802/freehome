import { useNavigate } from "react-router-dom";
import "./MyListingCard.css";

function MyListingCard({ property, onDelete }) {
  const navigate = useNavigate();

  const handleDelete = (e) => {
    e.stopPropagation();

    // ✅ NO window.confirm anymore
    onDelete(property.id);
  };

  return (
    <div
      className="mylisting-card"
      onClick={() => navigate(`/my-property/${property.id}`)}
    >
      <button
        className="mylisting-delete-btn"
        onClick={handleDelete}
        title="Delete Property"
      >
        Delete
      </button>

      <img
        src={
          property.images?.[0]
            ? property.images[0]
            : "https://source.unsplash.com/600x400/?house"
        }
        alt={property.title}
        className="mylisting-image"
      />

      <div className="mylisting-info">
        <h3>{property.title}</h3>
        <p>{property.location}</p>
        <span>
          ${Number(property.price).toLocaleString("en-AU")}
        </span>
      </div>
    </div>
  );
}

export default MyListingCard;