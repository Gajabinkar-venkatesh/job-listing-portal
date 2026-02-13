const express = require("express");
const router = express.Router();
const Job = require("../models/job");
const auth = require("../middleware/auth");

// GET all jobs
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

// POST add new job (employer)
router.post("/", auth, async (req, res) => {
  try {
    const { title, description, location } = req.body;

    const job = new Job({
      title,
      description,
      location,
      company: "Demo Company",
    });

    await job.save();
    res.json({ msg: "Job added successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Failed to add job" });
  }
});

module.exports = router;
