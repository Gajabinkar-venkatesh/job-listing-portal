import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddJob() {
  const navigate = useNavigate();

  const [job, setJob] = useState({
    title: "",
    description: "",
    skills: "",
    experience: "",
    salary: "",
    location: "",
  });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login first");
        navigate("/login");
        return;
      }

      await axios.post(
        "http://localhost:5000/api/Jobs",
        {
          ...job,
          skills: job.skills.split(","),
        },
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );

      alert("✅ Job Posted Successfully");
      navigate("/jobs");

    } catch (err) {
      console.error(err);
      alert("❌ Failed to post job");
    }
  };

  return (
    <div style={container}>
      <h2>Post a New Job</h2>

      <form onSubmit={handleSubmit} style={form}>
        <input name="title" placeholder="Job Title" onChange={handleChange} required />
        <input name="location" placeholder="Location" onChange={handleChange} required />
        <input name="salary" placeholder="Salary" onChange={handleChange} />
        <input name="experience" placeholder="Experience" onChange={handleChange} />
        <input name="skills" placeholder="Skills (comma separated)" onChange={handleChange} />
        <textarea name="description" placeholder="Job Description" onChange={handleChange} />

        <button type="submit">Post Job</button>
      </form>
    </div>
  );
}

const container = {
  padding: "40px",
  maxWidth: "500px",
  margin: "auto",
};

const form = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

export default AddJob;
