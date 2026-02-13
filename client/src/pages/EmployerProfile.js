import { useEffect, useState } from "react";

function EmployerProfile() {
  const [profile, setProfile] = useState({});
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("http://localhost:5000/api/employer/profile", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => res.json())
      .then(data => setProfile(data));
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/api/employer/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(profile),
    });

    alert("Profile Updated Successfully ✅");
  };

  return (
    <div>
      <h2>Employer Profile</h2>
      <form onSubmit={handleSubmit}>
        <input name="companyName" value={profile.companyName || ""} onChange={handleChange} placeholder="Company Name" />
        <input name="industry" value={profile.industry || ""} onChange={handleChange} placeholder="Industry" />
        <input name="website" value={profile.website || ""} onChange={handleChange} placeholder="Website" />
        <input name="location" value={profile.location || ""} onChange={handleChange} placeholder="Location" />
        <textarea name="companyDescription" value={profile.companyDescription || ""} onChange={handleChange} placeholder="Company Description" />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EmployerProfile;
