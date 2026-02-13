import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/Jobs/${id}`)
      .then((res) => setJob(res.data))
      .catch(() => alert("Job not found"));
  }, [id]);

  const applyJob = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login to apply");
      navigate("/login");
      return;
    }

    try {
      await axios.post(
        `http://localhost:5000/api/Jobs/apply/${id}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert("Applied successfully!");
    } catch (err) {
      alert(err.response?.data?.msg || "Already applied");
    }
  };

  if (!job) return <p>Loading...</p>;

  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "auto" }}>
      <h2>{job.title}</h2>
      <p><b>Company:</b> {job.employer?.name}</p>
      <p><b>Location:</b> {job.location}</p>
      <p><b>Experience:</b> {job.experience}</p>
      <p><b>Salary:</b> {job.salary}</p>
      <p><b>Description:</b> {job.description}</p>

      <button onClick={applyJob} style={applyBtn}>
        Apply Job
      </button>
    </div>
  );
}

const applyBtn = {
  padding: "12px 20px",
  background: "#16a34a",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  marginTop: "20px",
};

export default JobDetails;
