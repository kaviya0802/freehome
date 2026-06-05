import { useParams, useNavigate } from "react-router-dom";
import properties from "../../data/generateProperties";
import "./PropertyDetails.css";

function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const property = properties.find(
    (p) => String(p.id) === String(id)
  );

  if (!property) {
    return (
      <div className="not-found">
        <h2>Property Not Found</h2>
        <button onClick={() => navigate("/properties")}>
          Back to Listings
        </button>
      </div>
    );
  }

  return (
    <div className="details-page">

      {/* IMAGE SECTION */}
      <div className="image-section">
        <img src={property.image} alt={property.title} />
        <span className="type-badge">{property.type}</span>
      </div>

      {/* CONTENT SECTION */}
      <div className="content-section">

        <div className="top-row">
          <h1>{property.title}</h1>
          <h2 className="price">
            ${property.price.toLocaleString()}
          </h2>
        </div>

        <p className="location">{property.location}</p>

        <div className="meta-box">
          <div>
            <h3>{property.bedrooms}</h3>
            <p>Beds</p>
          </div>

          <div>
            <h3>{property.bathrooms}</h3>
            <p>Baths</p>
          </div>

          <div>
            <h3>{property.area}</h3>
            <p>Sqft</p>
          </div>

          <div>
            <h3>{property.mode.toUpperCase()}</h3>
            <p>Status</p>
          </div>
        </div>

        <div className="description">
          <h3>Overview</h3>
          <p>{property.description}</p>
        </div>

        <div className="pd-buttons">

  <button
    className="pd-btn pd-btn-primary"
    onClick={() => navigate(`/contact-agent/${property.id}`)}
  >
    Contact Agent
  </button>

  <button
    className="pd-btn pd-btn-secondary"
    onClick={() => navigate("/properties")}
  >
    Back to Listings
  </button>

</div>

      </div>
    </div>
  );
}

export default PropertyDetails;