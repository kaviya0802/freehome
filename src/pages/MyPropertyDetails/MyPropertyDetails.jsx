import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import "./MyPropertyDetails.css";

function MyPropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [property, setProperty] = useState(null);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const [imgIndex, setImgIndex] = useState(0);

  const images =
  editing
    ? formData?.images || []
    : property?.images || [];

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("agentProperties")) || [];

    const found = data.find((p) => String(p.id) === String(id));

    if (found) {
      setProperty(found);
      setFormData(found);
    }
  }, [id]);

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

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 const handleDetailChange = (e) => {
  const { name, value } = e.target;

  const parsedValue =
    value === "true"
      ? true
      : value === "false"
      ? false
      : value;

  setFormData((prev) => ({
    ...prev,
    propertyDetails: {
      ...prev.propertyDetails,
      [name]: parsedValue,
    },
  }));
};
const saveChanges = () => {
  const all =
    JSON.parse(localStorage.getItem("agentProperties")) || [];

  const updated = all.map((p) =>
    p.id === property.id ? formData : p
  );

  localStorage.setItem(
    "agentProperties",
    JSON.stringify(updated)
  );

  setProperty(formData);
  setEditing(false);

  alert("Property updated successfully");
};
// REPLACE CURRENT IMAGE
const handleReplaceImage = (e) => {
  const file = e.target.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onloadend = () => {
    setFormData((prev) => {
      const updatedImages = [...(prev.images || [])];

      updatedImages[imgIndex] = reader.result;

      return {
        ...prev,
        images: updatedImages,
      };
    });
  };

  reader.readAsDataURL(file);
};

// ADD NEW IMAGE (MAX 4)
const handleAddImage = (e) => {
  const files = Array.from(e.target.files);

  if (
    (formData.images?.length || 0) + files.length > 4
  ) {
    alert("Maximum 4 images allowed");
    return;
  }

  const readers = files.map((file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();

      reader.onloadend = () =>
        resolve(reader.result);

      reader.readAsDataURL(file);
    });
  });

  Promise.all(readers).then((newImages) => {
    setFormData((prev) => ({
      ...prev,
      images: [
        ...(prev.images || []),
        ...newImages,
      ],
    }));
  });
};
  const d = formData.propertyDetails || {};

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

        {/* IMAGE SECTION */}
      <div className="mypd-image-section">
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
      src={
        images.length > 0
          ? images[imgIndex]
          : "https://source.unsplash.com/600x400/?house"
      }
      alt="property"
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

  </div>
</div>

        {/* EDIT IMAGE UPLOAD */}
        {/* EDIT IMAGE SECTION */}
{editing && (
  <div className="mypd-edit-images">

    <h3>Current Images</h3>

    <div className="mypd-preview">
      {(formData.images || []).map((img, i) => (
        <img
          key={i}
          src={img}
          alt=""
          style={{
            width: "100px",
            height: "80px",
            objectFit: "cover",
            border:
              i === imgIndex
                ? "3px solid #007bff"
                : "1px solid #ccc",
            cursor: "pointer",
          }}
          onClick={() => setImgIndex(i)}
        />
      ))}
    </div>

    <br />

    {/* REPLACE */}
    <label>
      Replace Current Image:
      <input 
        type="file"
        accept="image/*"
        onChange={handleReplaceImage}
      />
    </label>

    <br />
    <br />

    {/* ADD */}
    {(formData.images?.length || 0) < 4 && (
      <label>
        Add New Image:
        <input className="addimage-button"
          type="file"
          accept="image/*"
          multiple
          onChange={handleAddImage}
        />
      </label>
    )}

    <p>
      Images: {formData.images?.length || 0} / 4
    </p>

  </div>
)}
        {/* TITLE + PRICE */}
        <div className="mypd-top-row">
          <h1>
            {editing ? (
              <input
                name="title"
                value={formData.title || ""}
                onChange={handleChange}
              />
            ) : (
              property.title
            )}
          </h1>

          <h2 className="mypd-price">
            {editing ? (
              <input
                name="price"
                value={formData.price || ""}
                onChange={handleChange}
              />
            ) : (
              `$${property.price}`
            )}
          </h2>
        </div>

        {/* LOCATION */}
        <p className="mypd-location">
          {editing ? (
            <input
              name="location"
              value={formData.location || ""}
              onChange={handleChange}
            />
          ) : (
            property.location
          )}
        </p>

        {/* DETAILS */}
        <h2>Property Details</h2>

        <div className="mypd-meta-box">
          {Object.keys(d).length === 0 ? (
            <p>No extra details added</p>
          ) : (
            Object.entries(d).map(([key, value]) => (
              <div key={key} className="mypd-meta-item">
  {editing ? (
    <input
      name={key}
      value={value || ""}
      onChange={handleDetailChange}
    />
  ) : (
    <>
      <h3>{formatValue(value)}</h3>
      <p>
        {key
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, (str) => str.toUpperCase())}
      </p>
    </>
  )}
</div>
            ))
          )}
        </div>

        {/* DESCRIPTION */}
        <div className="mypd-description">
          <h2>Property Overview</h2>

          {editing ? (
            <textarea
              name="description"
              value={formData.description || ""}
              onChange={handleChange}
            />
          ) : (
            <p>{property.description}</p>
          )}
        </div>

        {/* BUTTONS */}
      <div className="mypd-pd-buttons">
  {!editing ? (
    <button
      className="mypd-pd-btn mypd-pd-btn-primary"
      onClick={() => setEditing(true)}
    >
      Edit Property
    </button>
  ) : (
    <button
      className="mypd-pd-btn mypd-pd-btn-primary"
      onClick={saveChanges}
    >
      Save Changes
    </button>
  )}

  <button
    className="mypd-pd-btn mypd-pd-btn-secondary"
    onClick={() => navigate("/agent/listings")}
  >
    Back
  </button>
</div>
      </div>

      <Footer />
    </>
  );
}

export default MyPropertyDetails;