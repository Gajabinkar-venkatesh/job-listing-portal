import React, { useEffect, useState } from "react";
import axios from "axios";

const EmployerApplications = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:5000/api/applications/employer",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setApplications(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchApplications();
  }, []);

  return (
    <div>
      <h2>Applications for My Jobs</h2>

      {applications.length === 0 ? (
        <p>No applications yet</p>
      ) : (
        applications.map((app) => (
          <div
            key={app._id}
            style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}
          >
            <h3>Job: {app.job?.title}</h3>
            <p>Candidate: {app.user?.name}</p>
            <p>Email: {app.user?.email}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default EmployerApplications;
