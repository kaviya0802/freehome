import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import MyListingCard from "../../components/MyListingCard/MyListingCard";

import "./MyListings.css";

function MyListings() {
  const [properties, setProperties] = useState([]);

  // TOAST STATES
  const [toast, setToast] = useState("");
  const [confirmToast, setConfirmToast] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [currentUser, setCurrentUser] = useState(() =>
  JSON.parse(localStorage.getItem("currentUser"))
);
useEffect(() => {
  loadProperties();
}, []);
const loadProperties = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const all = JSON.parse(localStorage.getItem("agentProperties")) || [];

  console.log("CURRENT USER:", user);
  console.log("ALL PROPERTIES:", all);

  const my = all.filter((p) => {
    console.log("CHECK:", p.agentId, user?.id);
    return String(p.agentId) === String(user?.id);
  });

  console.log("MY PROPERTIES:", my);

  setProperties(my);
};
  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(""), 5000);
  };

  // STEP 1: open confirm toast
  const requestDelete = (id) => {
    setDeleteId(id);
    setConfirmToast(true);
  };

  // STEP 2: YES → delete
   const confirmDelete = () => {
  const all = JSON.parse(localStorage.getItem("agentProperties")) || [];

  const updated = all.filter((p) => p.id !== deleteId);

  localStorage.setItem("agentProperties", JSON.stringify(updated));

  const user = JSON.parse(localStorage.getItem("currentUser"));

  const myProperties = updated.filter(
    (p) => String(p.agentId) === String(user.id)
  );

  setProperties(myProperties);

  setConfirmToast(false);
  setDeleteId(null);

  showToast("Property deleted successfully ");
};
  // STEP 3: NO → close only
  const cancelDelete = () => {
    setConfirmToast(false);
    setDeleteId(null);
  };

  return (
    <>
      <Navbar />

      <div className="mylistings-container">
        <div className="mylistings-header">
          <h1>My Listings</h1>
          <p>{properties.length} Properties Posted</p>
        </div>

        {properties.length === 0 ? (
          <div className="empty-listing">
            <h2>No Properties Added Yet</h2>
            <p>Add your first property to see it here.</p>
          </div>
        ) : (
          <div
            className={`property-grid ${
              properties.length === 1 ? "single-card" : ""
            }`}
          >
            {properties.map((property) => (
              <MyListingCard
                key={property.id}
                property={property}
                onDelete={requestDelete}   // 👈 IMPORTANT CHANGE
              />
            ))}
          </div>
        )}
      </div>

      {/* SUCCESS TOAST */}
      {toast && <div className="list-toast list-toast-success">{toast}</div>}

      {/* CONFIRM TOAST */}
      {confirmToast && (
        <div className="list-toast list-toast-confirm">
          <p>Are you sure you want to delete this property?</p>

          <div className="list-toast-actions">
            <button onClick={confirmDelete}>Yes</button>
            <button onClick={cancelDelete}>No</button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default MyListings;