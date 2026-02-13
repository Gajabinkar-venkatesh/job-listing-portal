import React, { useState } from "react";

function CreateJob() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    skills: "",
    experience: "",
    salary: "",
    location: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const jobData = {
      ...form,
      skills: form.skills.split(","),
    };

    try {
      const res = await fetch("http://localhost:5000/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jobData),
      });

      const data = await res.json();
      alert("Job Posted Successfully!");
      console.log(data);

    } catch (error) {
      console.error("Error:", error);
      alert("Failed to post job");
    }
  };

  return (
    <div style={{ width: "60%", margin: "40px auto" }}>
      <h2 style={{ textAlign: "center" }}>Create New Job</h2>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          onChange={handleChange}
          required
          style={{ padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
        />

        <textarea
          name="description"
          placeholder="Job Description"
          rows="4"
          onChange={handleChange}
          style={{ padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
        ></textarea>

        <input
          type="text"
          name="skills"
          placeholder="Skills (comma separated)"
          onChange={handleChange}
          style={{ padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
        />

        <input
          type="text"
          name="experience"
          placeholder="Experience (e.g. 1-2 years)"
          onChange={handleChange}
          style={{ padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
        />

        <input
          type="text"
          name="salary"
          placeholder="Salary (e.g. 4 LPA)"
          onChange={handleChange}
          style={{ padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
        />

        <input
          type="text"
          name="location"
          placeholder="Job Location"
          onChange={handleChange}
          style={{ padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
        />

        <button
          type="submit"
          style={{
            padding: "12px",
            background: "#0a3d62",
            color: "white",
            borderRadius: "10px",
            border: "none",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Post Job
        </button>
      </form>
    </div>
  );
}

export default CreateJob;
