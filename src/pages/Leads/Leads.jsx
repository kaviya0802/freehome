import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Leads.css";

function Leads() {
  const [leads, setLeads] = useState([]);
  const [toast, setToast] = useState("");
  const [confirmToast, setConfirmToast] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  useEffect(() => {
    const currentUser =
      JSON.parse(localStorage.getItem("currentUser"));

    const allLeads =
      JSON.parse(localStorage.getItem("agentLeads")) || [];

    const myLeads = allLeads.filter(
      (lead) =>
        String(lead.agentId) === String(currentUser?.id)
    );

    setLeads(myLeads);
  }, []);
  const showToast = (message) => {
  setToast(message);

  setTimeout(() => {
    setToast("");
  }, 5000);
};

const requestDelete = (id) => {
  setDeleteId(id);
  setConfirmToast(true);
};

const confirmDelete = () => {
  const allLeads =
    JSON.parse(localStorage.getItem("agentLeads")) || [];

  const updated = allLeads.filter(
    (lead) => lead.id !== deleteId
  );

  localStorage.setItem(
    "agentLeads",
    JSON.stringify(updated)
  );

  setLeads((prev) =>
    prev.filter((lead) => lead.id !== deleteId)
  );

  setConfirmToast(false);
  setDeleteId(null);

  showToast("Lead deleted successfully");
};

const cancelDelete = () => {
  setConfirmToast(false);
  setDeleteId(null);
};
  const deleteLead = (leadId) => {
    const allLeads =
      JSON.parse(localStorage.getItem("agentLeads")) || [];

    const updated = allLeads.filter(
      (lead) => lead.id !== leadId
    );

    localStorage.setItem(
      "agentLeads",
      JSON.stringify(updated)
    );

    setLeads((prev) =>
      prev.filter((lead) => lead.id !== leadId)
    );
  };

  return (
    <>
      <Navbar />

      <div className="agent-lead-page">

        <div className="agent-lead-header">
          <h1>Buyer Leads</h1>
          <p>
            PROPERTY VISIT REQUESTS FROM BUYERS
          </p>
        </div>

        {leads.length === 0 ? (
          <div className="agent-lead-empty">
            No Leads Available
          </div>
        ) : (
            <div className={`agent-lead-grid ${ leads.length === 1 ? "agent-lead-single" : ""}`}>
            {leads.map((lead) => (
              <div
                key={lead.id}
                className="agent-lead-card"
              >
                <div className="agent-lead-image-wrapper">

  <button
    className="agent-lead-delete-btn"
    onClick={() => requestDelete(lead.id)}
  >
    Delete
  </button>

  {lead.propertyImage && (
    <img
      src={lead.propertyImage}
      alt={lead.propertyTitle}
      className="agent-lead-image"
    />
  )}

</div>

                
                <div className="agent-lead-content">

                  <h2>{lead.propertyTitle}</h2>

                  <div className="agent-lead-badges">

                    <span className="agent-lead-type">
                      {lead.propertyType}
                    </span>

                    <span
                      className={`agent-lead-mode ${
                        lead.propertyMode?.toLowerCase()
                      }`}
                    >
                      {lead.propertyMode === "Rent"
                        ? "For Rent"
                        : "For Buy"}
                    </span>

                  </div>

                  <p className="agent-lead-location">
                    {lead.propertyLocation}
                  </p>

                  <h3 className="agent-lead-price">
                    $
                    {Number(
                      lead.propertyPrice
                    ).toLocaleString()}
                  </h3>

                  <div className="agent-lead-details">

                    <p>
                      <strong>Name:</strong>{" "}
                      {lead.name}
                    </p>

                    <p>
                      <strong>Email:</strong>{" "}
                      {lead.email}
                    </p>

                    <p>
                      <strong>Phone:</strong>{" "}
                      {lead.phone}
                    </p>

                    <p>
                      <strong>Contact Mode:</strong>{" "}
                      {lead.contactMode}
                    </p>

                    <p>
                      <strong>Visit Date:</strong>{" "}
                      {lead.visitDate}
                    </p>

                    <p>
                      <strong>Message:</strong>{" "}
                      {lead.message || "-"}
                    </p>

                    <p>
                      <strong>Submitted:</strong>{" "}
                      {lead.createdAt}
                    </p>

                  </div>
                </div>

              </div>
            ))}

          </div>
        )}

      </div>
      {toast && (
  <div className="lead-toast lead-toast-success">
    {toast}
  </div>
)}

{confirmToast && (
  <div className="lead-toast lead-toast-confirm">
    <p>
      Are you sure you want to delete this lead?
    </p>

    <div className="lead-toast-actions">
      <button onClick={confirmDelete}>
        Yes
      </button>

      <button onClick={cancelDelete}>
        No
      </button>
    </div>
  </div>
)}
      <Footer />
    </>
  );
}

export default Leads;