import React from "react";
import "./JobCard.css"; // Import CSS for the card

function JobCard({ title, skills, salary, location, employer }) {
  return (
    <div className="job-card">
      <h2 className="job-title">{title}</h2>
      <p><strong>Employer:</strong> {employer}</p>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Salary:</strong> {salary}</p>
      <p><strong>Skills:</strong> {skills.join(", ")}</p>
    </div>
  );
}

export default JobCard;
