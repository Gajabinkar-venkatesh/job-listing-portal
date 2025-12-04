const express = require("express");
const router = express.Router();
const Job = require("../models/Job");
const auth = require("../middleware/auth");

// ✅ CREATE A JOB (Employer only - logged in user)
router.post("/", auth, async (req, res) => {
  try {
    const { title, description, skills, experience, salary, location } = req.body;

    const job = new Job({
      employer: req.user.id,
      title,
      description,
      skills,
      experience,
      salary,
      location
    });

    await job.save();
    res.json(job);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// ✅ GET ALL JOBS (Public)
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find().populate("employer", ["name", "email"]);
    res.json(jobs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// ✅ DELETE JOB (Only job owner)
router.delete("/:id", auth, async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ msg: "Job not found" });
    }

    if (job.employer.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    await job.deleteOne();
    res.json({ msg: "Job removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
