import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "../AgentProfile/AgentProfile.css"; // 👈 reuse SAME CSS

function MatchedAgents() {
  const location = useLocation();
  const matchedAgents = location.state?.matchedAgents || [];

  return (
    <>
      <Navbar />

      <div className="ap-page">
        <div className="ap-hero">
          <h1>Matched Agents</h1>
          <p>BEST MATCHED PROFESSIONALS FOR YOUR REQUIREMENT</p>
        </div>

        <div className="ap-container">

          {matchedAgents.length === 0 ? (
            <div className="ap-profile-warning">
              No agents matched for your preference
            </div>
          ) : (
            matchedAgents.map((agent) => (
              <div key={agent.id} className="profile-card">

                {/* SAME EXACT PROFILE DESIGN */}

                <div className="profile-header">
                  {agent.profileImage ? (
                    <img
                      src={agent.profileImage}
                      className="profile-avatar"
                    />
                  ) : (
                    <div className="profile-avatar default-avatar">
                      {agent.fullName?.charAt(0).toUpperCase()}
                    </div>
                  )}

                  <h3 className="profile-name">
                    {agent.fullName}
                  </h3>

                  <p className="profile-role">
                    {agent.role}
                  </p>

                  {/* ⭐ SCORE BADGE */}
                  <span className="score-badge">
                    Match Score: {agent.score}
                  </span>
                </div>

                <div className="profile-info">

                  <div className="profile-item">
                    <span>Email</span>
                    <p>{agent.email}</p>
                  </div>

                  <div className="profile-item">
                    <span>Phone</span>
                    <p>{agent.phone}</p>
                  </div>

                  <div className="profile-item">
                    <span>Location</span>
                    <p>{agent.serviceLocation}</p>
                  </div>

                  <div className="profile-item">
                    <span>Specialization</span>
                    <p>{agent.specialization}</p>
                  </div>

                  <div className="profile-item">
                    <span>Budget</span>
                    <p>{agent.budgetHandled}</p>
                  </div>

                  <div className="profile-item">
                    <span>Experience</span>
                    <p>{agent.experience} Years</p>
                  </div>

                  <div className="profile-item">
                    <span>Agency</span>
                    <p>{agent.agencyName}</p>
                  </div>

                  <div className="profile-item">
                    <span>About</span>
                    <p>{agent.bio}</p>
                  </div>

                </div>

              </div>
            ))
          )}

        </div>
      </div>

      <Footer />
    </>
  );
}

export default MatchedAgents;