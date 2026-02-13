import React from "react";

const EmployerDashboard = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Employer Dashboard</h2>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div style={cardStyle}>
          <h3>Total Jobs</h3>
          <p>View your posted jobs</p>
        </div>

        <div style={cardStyle}>
          <h3>Applications</h3>
          <p>Check received applications</p>
        </div>
      </div>
    </div>
  );
};

const cardStyle = {
  flex: 1,
  padding: "20px",
  backgroundColor: "#f3f4f6",
  borderRadius: "10px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
};

export default EmployerDashboard;
