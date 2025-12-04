
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/jobs")
      .then((res) => setJobs(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Job Listings</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job._id} style={{ margin: "10px 0" }}>
            <strong>{job.title}</strong> ({job.company}) → {job.location}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
