import React, { useEffect, useState } from "react";
import axios from "axios";

const JobListings = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch jobs
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/jobs", {
          headers: {
            "Cache-Control": "no-cache",
          },
        });
        setJobs(res.data);
      } catch (err) {
        console.error("Jobs fetch error:", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // Apply job
  const applyJob = async (jobId) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login first");
        return;
      }

      await axios.post(
        "http://localhost:5000/api/applications",
        { jobId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Cache-Control": "no-cache",
            Pragma: "no-cache",
            Expires: "0",
          },
        }
      );

      alert("✅ Job applied successfully");
    } catch (err) {
      console.error("Apply job error:", err.response?.data || err.message);
      alert("❌ Application failed");
    }
  };

  if (loading) return <p style={{ padding: "30px" }}>Loading jobs...</p>;

  return (
    <div style={{ padding: "30px" }}>
      <h2>Available Jobs</h2>

      {jobs.length === 0 ? (
        <p>No jobs found</p>
      ) : (
        jobs.map((job) => (
          <div key={job._id} style={card}>
            <h3>{job.title}</h3>
            <p><b>Company:</b> {job.company}</p>
            <p><b>Location:</b> {job.location}</p>
            <p>{job.description}</p>

            <button style={btn} onClick={() => applyJob(job._id)}>
              Apply Job
            </button>
          </div>
        ))
      )}
    </div>
  );
};

const card = {
  background: "#f1f5f9",
  padding: "20px",
  marginBottom: "15px",
  borderRadius: "12px",
};

const btn = {
  padding: "10px 15px",
  background: "#2563eb",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

export default JobListings;
