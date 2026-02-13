const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Job = require("../models/job");
const Application = require("../models/Application");

// Get all jobs posted by the logged-in employer
router.get("/jobs", auth, async (req, res) => {
  try {
    const jobs = await Job.find({ employer: req.user.id });
    res.json(jobs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Get all applications for jobs posted by logged-in employer
router.get("/applications", auth, async (req, res) => {
  try {
    // Find all jobs by employer
    const jobs = await Job.find({ employer: req.user.id });
    const jobIds = jobs.map((job) => job._id);

    // Find applications for those jobs
    const applications = await Application.find({ job: { $in: jobIds } }).populate("job applicant", "title name");
    res.json(applications);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
