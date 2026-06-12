import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import AgentCard from "../../components/AgentCard/AgentCard";
import "./AgentProfile.css";
function AgentProfile() {
  const navigate = useNavigate();
  const [successMsg, setSuccessMsg] = useState("");
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState({
    id: "",
    role: "",

    fullName: "",
    email: "",
    phone: "",

    serviceLocation: "",
    budgetHandled: "",
    specialization: "",

    age: "",
    gender: "",

    agencyName: "",
    experience: "",
    licenseNumber: "",
    

    bio: "",
    profileImage: "",
    password: ""
  });
 const showSuccess = (msg) => {
  setSuccessMsg(msg);

  setTimeout(() => {
    setSuccessMsg("");
  }, 2500);
};
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  useEffect(() => {
    const currentUser =
      JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const imageTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/webp"
    ];
    if (!imageTypes.includes(file.type)) {
      setErrors({
        ...errors,
        profileImage:
          "Only JPG, JPEG, PNG and WEBP images are allowed"
      });
      return;
    }
    if (file.size > 200000) {
      setErrors({
        ...errors,
        profileImage:
          "Image size must be below 200 KB"
      });
      return;
    }
    setErrors({
      ...errors,
      profileImage: ""
    });
    const reader = new FileReader();
    reader.onload = () => {
      const imageData = reader.result;
      const updatedUser = {
        ...user,
        profileImage: imageData,
      };
      setUser(updatedUser);
      const users =
        JSON.parse(localStorage.getItem("users")) || [];
      const updatedUsers = users.map((u) =>
        u.id === updatedUser.id ? updatedUser : u
      );
      localStorage.setItem(
        "users",
        JSON.stringify(updatedUsers)
      );
      localStorage.setItem(
        "currentUser",
        JSON.stringify(updatedUser)
      );
    };
    reader.readAsDataURL(file);
  };
  const handleDeletePhoto = () => {
    const updatedUser = {
      ...user,
      profileImage: ""
    };
    setUser(updatedUser);
    const users =
      JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = users.map((u) =>
      u.id === updatedUser.id ? updatedUser : u
    );
    localStorage.setItem(
      "users",
      JSON.stringify(updatedUsers)
    );
    localStorage.setItem(
      "currentUser",
      JSON.stringify(updatedUser)
    );
  
    showSuccess("Profile updated successfully");
  };
  const handleSave = () => {
  const newErrors = {};
  const nameRegex = /^[A-Za-z\s]+$/;
  const emailRegex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in|au|com\.au|org|org\.au|net|edu|gov|gov\.au)$/i;
  const phoneRegex = /^\d{10}$/;
  // REQUIRED FIELDS
  if (!user.fullName.trim()) {
    newErrors.fullName = "Full Name is required";
  } else if (!nameRegex.test(user.fullName)) {
    newErrors.fullName = "Only alphabets allowed";
  }

  if (!user.email.trim()) {
  newErrors.email = "Email is required";
} else if (!emailRegex.test(user.email.trim())) {
  newErrors.email = "Enter a valid email address";
}
  if (!phoneRegex.test(user.phone)) {
    newErrors.phone = "Phone must be 10 digits";
  }
  if (!user.serviceLocation) {
  newErrors.serviceLocation =
    "Service location is required";
}

if (!user.budgetHandled) {
  newErrors.budgetHandled =
    "Budget range is required";
}

if (!user.specialization) {
  newErrors.specialization =
    "Property specialization is required";
}
  // OPTIONAL FIELDS (ONLY validate if filled)
  if (user.age && !/^\d+$/.test(user.age)) {
    newErrors.age = "Age must be numbers only";
  }

  if (user.gender && !["Male", "Female", "Others"].includes(user.gender)) {
  newErrors.gender = "Invalid gender";
}

  if (user.agencyName && !nameRegex.test(user.agencyName)) {
    newErrors.agencyName = "Only alphabets allowed";
  }

  if (user.experience && !/^\d+$/.test(user.experience)) {
    newErrors.experience = "Experience must be numbers only";
  }

  if (user.licenseNumber && user.licenseNumber.length < 3) {
    newErrors.licenseNumber = "Invalid license number";
  }

  

  if (user.bio && user.bio.length > 500) {
    newErrors.bio = "Max 500 characters allowed";
  }

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  setErrors({});

  const users =
    JSON.parse(localStorage.getItem("users")) || [];

  const updatedUsers = users.map((u) =>
    u.id === user.id ? user : u
  );

  localStorage.setItem("users", JSON.stringify(updatedUsers));
  localStorage.setItem("currentUser", JSON.stringify(user));

    showSuccess("profile updated successfully");
  };

  const handlePasswordChange = () => {
  const newErrors = {};

  if (oldPassword !== user.password) {
    newErrors.oldPassword = "Old password is incorrect";
  }

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

  if (!passwordRegex.test(newPassword)) {
    newErrors.newPassword =
      "Min 8 chars, uppercase, lowercase, number & special char required";
  }

  if (Object.keys(newErrors).length > 0) {
    setErrors((prev) => ({ ...prev, ...newErrors }));
    return;
  }

  const updatedUser = {
    ...user,
    password: newPassword
  };

  const users =
    JSON.parse(localStorage.getItem("users")) || [];

  const updatedUsers = users.map((u) =>
    u.id === user.id ? updatedUser : u
  );

  localStorage.setItem("users", JSON.stringify(updatedUsers));
  localStorage.setItem("currentUser", JSON.stringify(updatedUser));

  setUser(updatedUser);
  showSuccess("Password updated successfully");

  setOldPassword("");
  setNewPassword("");

  // clear only password errors
  setErrors((prev) => ({
    ...prev,
    oldPassword: "",
    newPassword: ""
  }));
};

   const handleLogout = () => {
  localStorage.removeItem("currentUser");

  showSuccess("Logged out successfully");

  setTimeout(() => {
    navigate("/");
  }, 1200);
};
return (
   <>
    <Navbar />
  <div className="ap-page">
    {successMsg && (
      <div className="toast toast-success">
        <span>{successMsg}</span>
      </div>
    )}
    {(!user?.serviceLocation ||
  !user?.budgetHandled ||
  !user?.specialization) && (
  <div className="ap-profile-warning">
    ⚠ Complete Service Location, Budget Handled and Specialization to receive buyer enquiries.
  </div>
)}

     <div className="ap-hero">
  <h1>Agent Profile</h1>
  <p className="ap-subtitle">
    MANAGE YOUR PROFILE, ACCOUNT SETTINGS AND PROFESSIONAL DETAILS
  </p>
</div>
    <div className="ap-container">

      {/* LEFT PROFILE CARD */}

      <AgentCard user={user} />
      {/* RIGHT EDIT CARD */}

      <div className="edit-card">

        <h3 className="edit-title">
          Edit Profile
        </h3>

        <div className="ap-photo-actions">

          <label
            htmlFor="profilePhoto"
            className="ap-photo-btn"
          >
            {user.profileImage
              ? "Change Photo"
              : "Upload Photo"}
          </label>

          <input
            id="profilePhoto"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            hidden
          />

          {user.profileImage && (
            <button
              type="button"
              className="ap-delete-btn"
              onClick={handleDeletePhoto}
            >
              Delete Photo
            </button>
          )}

          {errors.profileImage && (
            <span className="ap-error">
              {errors.profileImage}
            </span>
          )}

        </div>

        {/* ONLY THIS PART CHANGES */}
  <div className="edit-grid">

    {/* Role */}
    <div>
      <input
        value={user.role}
        disabled
        placeholder="Role"
      />
    </div>

    {/* Full Name */}
    <div>
      <input
        name="fullName"
        value={user.fullName}
        onChange={handleChange}
        placeholder="Full Name"
      />
      {errors.fullName && (
        <span className="ap-error">
          {errors.fullName}
        </span>
      )}
    </div>

    {/* Email */}
    <div>
      <input
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Email"
      />
      {errors.email && (
        <span className="ap-error">
          {errors.email}
        </span>
      )}
    </div>

    {/* Phone */}
    <div>
      <input
        name="phone"
        value={user.phone}
        onChange={handleChange}
        placeholder="Phone"
      />
      {errors.phone && (
        <span className="ap-error">
          {errors.phone}
        </span>
      )}
    </div>
    <div>
  <select
    name="serviceLocation"
    value={user.serviceLocation || ""}
    onChange={handleChange}
  >
    <option value="">Service Location *</option>

    <option>Sydney</option>
    <option>Melbourne</option>
    <option>Brisbane</option>
    <option>Perth</option>
    <option>Adelaide</option>
    <option>Canberra</option>
    <option>Gold Coast</option>
    <option>Hobart</option>
    <option>Darwin</option>

    <option>New South Wales</option>
    <option>Victoria</option>
    <option>Queensland</option>
    <option>Western Australia</option>
    <option>South Australia</option>
    <option>Tasmania</option>
    <option>Northern Territory</option>
  </select>

  {errors.serviceLocation && (
    <span className="ap-error">
      {errors.serviceLocation}
    </span>
  )}
</div>
<div>
  <select
    name="budgetHandled"
    value={user.budgetHandled || ""}
    onChange={handleChange}
  >
    <option value="">Budget Handled *</option>

    <option value="$0 - $5,000">
      $0 - $5,000
    </option>

    <option value="$5,000 - $10,000">
      $5,000 - $10,000
    </option>

    <option value="$10,000+">
      $10,000+
    </option>

    <option value="$200k - $500k">
      $200k - $500k
    </option>

    <option value="$500k - $1M">
      $500k - $1M
    </option>

    <option value="$1M+">
      $1M+
    </option>
  </select>

  {errors.budgetHandled && (
    <span className="ap-error">
      {errors.budgetHandled}
    </span>
  )}
</div>
<div>
  <select
    name="specialization"
    value={user.specialization || ""}
    onChange={handleChange}
  >
    <option value="">
      Property Specialization *
    </option>

    <option>Apartment</option>
    <option>Villa</option>
    <option>Townhouse</option>
    <option>Commercial</option>
    <option>Luxury Homes</option>
    <option>Land</option>
    <option>PG Hostel</option>
  </select>

  {errors.specialization && (
    <span className="ap-error">
      {errors.specialization}
    </span>
  )}
</div>

    {/* Age */}
    <div>
      <input
        name="age"
        value={user.age || ""}
        onChange={handleChange}
        placeholder="Age"
      />
      {errors.age && (
    <span className="ap-error">
      {errors.age}
    </span>
  )}
    </div>

    {/* Gender */}
    <div>
      <select
        name="gender"
        value={user.gender}
        onChange={handleChange}
      >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Others">Others</option>
      </select>
    </div>

    {/* Agency */}
    <div>
      <input
        name="agencyName"
        value={user.agencyName || ""}
        onChange={handleChange}
        placeholder="Agency Name"
      />
    </div>

    {/* Experience */}
    <div>
      <input
        name="experience"
        value={user.experience || ""}
        onChange={handleChange}
        placeholder="Experience (Years)"
      />
    </div>

    {/* License */}
    <div>
      <input
        name="licenseNumber"
        value={user.licenseNumber || ""}
        onChange={handleChange}
        placeholder="License Number"
      />
    </div>


    {/* Bio Full Width */}
    <div className="full-row">
      <textarea
        name="bio"
        value={user.bio}
        onChange={handleChange}
        placeholder="About Me"
      />
      {errors.bio && (
    <span className="ap-error">
      {errors.bio}
    </span>
  )}
    </div>

  </div>

  {/* KEEP EVERYTHING BELOW SAME */}

  <button
    className="ap-btn"
    onClick={handleSave}
  >
    Save Profile
  </button>

  <hr className="ap-divider" />
<div className="password-grid">

  <h3 className="ap-section-title">
    Change Password
  </h3>

  <div>
    <input
      type="password"
      placeholder="Old Password"
      value={oldPassword}
      onChange={(e) => setOldPassword(e.target.value)}
    />

    {errors.oldPassword && (
      <span className="ap-error">
        {errors.oldPassword}
      </span>
    )}
  </div>

  <div>
    <input
      type="password"
      placeholder="New Password"
      value={newPassword}
      onChange={(e) => setNewPassword(e.target.value)}
    />

    {errors.newPassword && (
      <span className="ap-error">
        {errors.newPassword}
      </span>
    )}
  </div>

  <div className="password-btn-row">
    <button
      className="ap-btn"
      onClick={handlePasswordChange}
    >
      Update Password
    </button>
  </div>

</div>
  <hr className="ap-divider" />

  <button
    className="ap-logout-btn"
    onClick={handleLogout}
  >
    Logout
  </button>

</div>
    </div>

  </div>
  <Footer />
  </>
);
}
export default AgentProfile;