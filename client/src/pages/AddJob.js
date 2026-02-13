import React, { useState } from "react";
import axios from "axios";

const AddJob = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    location: "",
    company: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/jobs",
        form,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      alert(res.data.msg);
      setForm({ title: "", description: "", location: "", company: "" });
    } catch (err) {
      alert(err.response?.data?.msg || "Failed to post job");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Post New Job</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={form.title}
          onChange={handleChange}
          required
        /><br /><br />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
        /><br /><br />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          required
        /><br /><br />

        <input
          type="text"
          name="company"
          placeholder="Company"
          value={form.company}
          onChange={handleChange}
          required
        /><br /><br />

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#1e40af",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Post Job
        </button>
      </form>
    </div>
  );
};

export default AddJob;
