import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./UserProfile.css";
import "../AgentProfile/AgentProfile.css";

function UserProfile() {
  const navigate = useNavigate();
  const [successMsg, setSuccessMsg] = useState("");
  const [errors, setErrors] = useState({});

  const [user, setUser] = useState({
    id: "",
    role: "",

    fullName: "",
    email: "",
    phone: "",

    age: "",
    gender: "",

    address: "",
    city: "",
    state: "",
    pincode: "",

    preferredLocation: "",
    budgetRange: "",

    bio: "",
    profileImage: "",

    password: ""
  });
  const showSuccess = (msg) => {
  setSuccessMsg(msg);

  setTimeout(() => {
    setSuccessMsg("");
  }, 3000);
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

  // IMAGE UPLOAD (NO ALERT, ONLY ERROR)
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/webp"
    ];

    const newErrors = {};

    if (!imageTypes.includes(file.type)) {
      newErrors.profileImage =
        "Only JPG, JPEG, PNG, WEBP allowed";
    }

    if (file.size > 200000) {
      newErrors.profileImage =
        "Image must be below 200KB";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors((prev) => ({ ...prev, ...newErrors }));
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      const updatedUser = {
        ...user,
        profileImage: reader.result
      };

      setUser(updatedUser);

      const users =
        JSON.parse(localStorage.getItem("users")) || [];

      const updatedUsers = users.map((u) =>
        u.id === updatedUser.id ? updatedUser : u
      );

      localStorage.setItem("users", JSON.stringify(updatedUsers));
      localStorage.setItem("currentUser", JSON.stringify(updatedUser));

      setErrors((prev) => ({ ...prev, profileImage: "" }));
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

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("currentUser", JSON.stringify(updatedUser));
    showSuccess("Profile updated successfully");
  };

  // SAVE PROFILE VALIDATION
  const handleSave = () => {
    const newErrors = {};

    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in|au|com\.au|org|org\.au|net|edu|gov|gov\.au)$/i;
    const phoneRegex = /^\d{10}$/;

    if (!user.fullName.trim()) newErrors.fullName = "Full name required";
    else if (!nameRegex.test(user.fullName)) newErrors.fullName = "Only alphabets allowed";

    if (!user.email.trim()) {
  newErrors.email = "Email is required";
} else if (!emailRegex.test(user.email.trim())) {
  newErrors.email = "Enter a valid email address";
}

    if (!phoneRegex.test(user.phone)) newErrors.phone = "Phone must be 10 digits";

    if (user.age && !/^\d+$/.test(user.age)) {
  newErrors.age = "Age must be numbers only";
}

   


    // Optional Address
if (
  user.address &&
  user.address.trim() &&
  user.address.trim().length < 3
) {
  newErrors.address = "Address is too short";
}

// Optional Australian Postcode
if (
  user.pincode &&
  user.pincode.trim() &&
  !/^\d{4}$/.test(user.pincode.trim())
) {
  newErrors.pincode =
    "Australian postcode must be 4 digits";
}

if (user.city && !/^[A-Za-z\s]+$/.test(user.city))
  newErrors.city = "Only alphabets allowed";

if (user.state && !/^[A-Za-z\s]+$/.test(user.state))
  newErrors.state = "Only alphabets allowed";


    if (user.bio && user.bio.length > 500)
      newErrors.bio = "Max 500 characters";

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

  // PASSWORD CHANGE (NO ALERT)
  const handlePasswordChange = () => {
    const newErrors = {};

    if (oldPassword !== user.password) {
      newErrors.oldPassword = "Old password incorrect";
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!passwordRegex.test(newPassword)) {
      newErrors.newPassword =
        "Min 8 chars, upper, lower, number & special char";
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

      <div className="ap-hero">
        <h1>User Profile</h1>
        <p className="ap-subtitle">
          MANAGE YOUR PROFILE, ACCOUNT SETTINGS AND PERSONAL PREFERENCES
        </p>
      </div>

      <div className="ap-container">

        {/* LEFT PROFILE CARD */}

        <div className="profile-card">

          <div className="profile-header">

            {user.profileImage ? (
              <img
                src={user.profileImage}
                alt="Profile"
                className="profile-avatar"
              />
            ) : (
              <div className="profile-avatar default-avatar">
                {user.fullName
                  ? user.fullName.charAt(0).toUpperCase()
                  : "U"}
              </div>
            )}

            <h3 className="profile-name">
              {user.fullName || "User Name"}
            </h3>

            <p className="profile-role">
              {user.role}
            </p>

          </div>

          <div className="profile-info">

            {user.email && (
              <div className="profile-item">
                <span>Email</span>
                <p>{user.email}</p>
              </div>
            )}

            {user.phone && (
              <div className="profile-item">
                <span>Phone</span>
                <p>{user.phone}</p>
              </div>
            )}

            {user.age && (
              <div className="profile-item">
                <span>Age</span>
                <p>{user.age}</p>
              </div>
            )}

            {user.gender && (
              <div className="profile-item">
                <span>Gender</span>
                <p>{user.gender}</p>
              </div>
            )}

            {user.address && (
              <div className="profile-item">
                <span>Address</span>
                <p>{user.address}</p>
              </div>
            )}

            {user.city && (
              <div className="profile-item">
                <span>City</span>
                <p>{user.city}</p>
              </div>
            )}

            {user.state && (
              <div className="profile-item">
                <span>State</span>
                <p>{user.state}</p>
              </div>
            )}

            {user.pincode && (
              <div className="profile-item">
                <span>Pincode</span>
                <p>{user.pincode}</p>
              </div>
            )}

            {user.preferredLocation && (
              <div className="profile-item">
                <span>Preferred Location</span>
                <p>{user.preferredLocation}</p>
              </div>
            )}

            {user.budgetRange && (
              <div className="profile-item">
                <span>Budget Range</span>
                <p>{user.budgetRange}</p>
              </div>
            )}

            {user.bio && (
              <div className="profile-item">
                <span>About</span>
                <p>{user.bio}</p>
              </div>
            )}

          </div>

        </div>

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

          <div className="edit-grid">

            <div>
              <input
                value={user.role}
                disabled
                placeholder="Role"
              />
            </div>

            <div>
              <input
                name="fullName"
                value={user.fullName}
                onChange={handleChange}
                placeholder="Full Name"
              />
              {errors.fullName && (
                <span className="ap-error">{errors.fullName}</span>
              )}
            </div>

            <div>
              <input
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Email"
              />
              {errors.email && (
                <span className="ap-error">{errors.email}</span>
              )}
            </div>

            <div>
              <input
                name="phone"
                value={user.phone}
                onChange={handleChange}
                placeholder="Phone"
              />
              {errors.phone && (
                <span className="ap-error">{errors.phone}</span>
              )}
            </div>

            <div>
              <input
                name="age"
                value={user.age}
                onChange={handleChange}
                placeholder="Age"
              />
              {errors.age && (
    <span className="ap-error">
      {errors.age}
    </span>
  )}
            </div>

            <div>
              <select
                name="gender"
                value={user.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
              </select>
            </div>

            <div>
              <input
                name="address"
                value={user.address}
                onChange={handleChange}
                placeholder="Address"
              />
              {errors.address && (
    <span className="ap-error">
      {errors.address}
    </span>
  )}
            </div>

            <div>
              <input
                name="city"
                value={user.city}
                onChange={handleChange}
                placeholder="City"
              />
              {errors.city && (
    <span className="ap-error">
      {errors.city}
    </span>
  )}
            </div>

            <div>
              <input
                name="state"
                value={user.state}
                onChange={handleChange}
                placeholder="State"
              />
              {errors.state && (
    <span className="ap-error">
      {errors.state}
    </span>
  )}
            </div>

            <div>
              <input
                name="pincode"
                value={user.pincode}
                onChange={handleChange}
                placeholder="Pincode"
              />
              {errors.pincode && (
    <span className="ap-error">
      {errors.pincode}
    </span>
  )}
            </div>

            <div>
              <input
                name="preferredLocation"
                value={user.preferredLocation}
                onChange={handleChange}
                placeholder="Preferred Location"
              />
              {errors.bio && (
    <span className="ap-error">
      {errors.bio}
    </span>
  )}
            </div>

            <div>
              <select
  name="budgetRange"
  value={user.budgetRange}
  onChange={handleChange}
>
  <option value="">Budget</option>
  <option value="$0 - $5,000">$0 - $5,000</option>
  <option value="$5,000 - $10,000">$5,000 - $10,000</option>
  <option value="$10,000+">$10,000+</option>
  <option value="$200k - $500k">$200k - $500k</option>
  <option value="$500k - $1M">$500k - $1M</option>
  <option value="$1M+">$1M+</option>
</select>
            </div>

            <div className="full-row">
              <textarea
                name="bio"
                value={user.bio}
                onChange={handleChange}
                placeholder="About Me"
              />
            </div>

          </div>

          <div className="btn-center">
            <button
              className="ap-btn"
              onClick={handleSave}
            >
              Save Profile
            </button>
          </div>

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
                onChange={(e) =>
                  setOldPassword(e.target.value)
                }
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
                onChange={(e) =>
                  setNewPassword(e.target.value)
                }
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

          <div className="btn-center">
            <button
              className="ap-logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>

        </div>

      </div>

    </div>

    <Footer />
  </>
);
}

export default UserProfile;