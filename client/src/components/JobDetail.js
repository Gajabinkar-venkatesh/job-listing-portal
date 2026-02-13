import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function JobDetail() {
  const { id } = useParams(); // get job id from URL
  const [job, setJob] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/jobs/${id}`)
      .then((res) => res.json())
      .then((data) => setJob(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!job) return <p>Loading job details...</p>;

  return (
    <div>
      <h1>{job.title}</h1>
      <p><strong>Employer:</strong> {job.employer}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Salary:</strong> {job.salary}</p>
      <p><strong>Skills:</strong> {job.skills.join(", ")}</p>
    </div>
  );
}

export default JobDetail;
