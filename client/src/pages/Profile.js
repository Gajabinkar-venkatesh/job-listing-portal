import React from "react";

const Profile = () => {
  const name = localStorage.getItem("name");
  const role = localStorage.getItem("role");

  return (
    <div style={{ padding: "40px" }}>
      <div
        style={{
          background: "#f3f4f6",
          padding: "30px",
          borderRadius: "10px",
          maxWidth: "500px",
        }}
      >
        <h2>{name}</h2>
        <p><strong>Role:</strong> {role}</p>
        <p><strong>Email:</strong> (Your registered email)</p>
      </div>
    </div>
  );
};

export default Profile;
