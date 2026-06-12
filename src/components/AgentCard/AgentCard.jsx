function AgentCard({ user, showEmptyFields = false }) {
  if (!user) return null;

  const renderField = (label, value) => {
    if (!value && !showEmptyFields) return null;

    return (
      <div className="profile-item">
        <span>{label}</span>
        <p>{value || "Not provided"}</p>
      </div>
    );
  };

  return (
    <div className="profile-card">

      <div className="profile-header">

        {user.profileImage ? (
          <img src={user.profileImage} className="profile-avatar" />
        ) : (
          <div className="profile-avatar default-avatar">
            {(user.fullName || "A").charAt(0).toUpperCase()}
          </div>
        )}

        <h3 className="profile-name">
          {user.fullName || "Agent Name"}
        </h3>

        <p className="profile-role">
          {user.role || "Agent"}
        </p>

      </div>

      <div className="profile-info">

        {renderField("Email", user.email)}
        {renderField("Phone", user.phone)}
        {renderField("Service Location", user.serviceLocation)}
        {renderField("Budget Handled", user.budgetHandled)}
        {renderField("Specialization", user.specialization)}
        {renderField("Age", user.age)}
        {renderField("Gender", user.gender)}
        {renderField("Agency", user.agencyName)}
        {renderField("Experience", user.experience ? `${user.experience} Years` : null)}
        {renderField("License", user.licenseNumber)}
        {renderField("About", user.bio)}

      </div>

    </div>
  );
}

export default AgentCard;