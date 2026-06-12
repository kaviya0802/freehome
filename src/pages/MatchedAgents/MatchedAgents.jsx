import "./MatchedAgents.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import AgentCard from "../../components/AgentCard/AgentCard";
import { useLocation } from "react-router-dom";

function MatchedAgents() {
  const location = useLocation();

  const allAgents = location.state?.matchedAgents || [];
  const preference = location.state?.preference;

  // safety check
  if (!preference) {
    return (
      <>
        <Navbar />
        <div className="no-results">
          No search preference found.
        </div>
        <Footer />
      </>
    );
  }

  // MATCH IF ANY ONE FIELD MATCHES
  const matchedAgents = allAgents.filter((agent) => {
    const matchCount = [
      agent.serviceLocation === preference.serviceLocation,
      agent.specialization === preference.specialization,
      agent.budgetHandled === preference.budgetHandled,
    ].filter(Boolean).length;

    return matchCount > 0; // ✔ at least one match required
  });

  return (
    <>
      <Navbar />

      <div className="matched-wrapper">
          <div className="matched-header">
             <h1>Matched Agents</h1>
             <p>AGENTS MATCHING YOUR PROPERTY PREFERENCES</p>
          </div>

        <div className="matched-grid">

          {matchedAgents.length === 0 ? (
            <div className="no-results">
              No agents found for your preference.
            </div>
          ) : (
            matchedAgents.map((agent, index) => (
              <AgentCard
                key={index}
                user={agent}
                showEmptyFields={true}
              />
            ))
          )}

        </div>
      </div>

      <Footer />
    </>
  );
}

export default MatchedAgents;