import React, { useEffect, useState } from "react";
import axios from "axios";

const Applications = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/applications/my",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setApplications(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const getStatusColor = (status) => {
    if (status === "Pending") return "orange";
    if (status === "Accepted") return "green";
    if (status === "Rejected") return "red";
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Applications</h2>

      {applications.length === 0 && <p>No applications yet.</p>}

      {applications.map((app) => (
        <div
          key={app._id}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            margin: "10px 0",
            borderRadius: "8px",
            backgroundColor: "#f9fafb",
          }}
        >
          <h3>{app.job?.title}</h3>
          <p><strong>Company:</strong> {app.job?.company}</p>

          <p>
            <strong>Status: </strong>
            <span style={{ color: getStatusColor(app.status) }}>
              {app.status}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Applications;
