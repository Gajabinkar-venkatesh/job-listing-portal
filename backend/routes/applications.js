const express = require("express");
const router = express.Router();
const Application = require("../models/Application");
const auth = require("../middleware/auth");

// APPLY JOB
router.post("/", auth, async (req, res) => {
  try {
    const { jobId } = req.body;
    if (!jobId) return res.status(400).json({ msg: "Job ID missing" });

    const alreadyApplied = await Application.findOne({
      job: jobId,
      user: req.user.id,
    });

    if (alreadyApplied) return res.status(400).json({ msg: "Already applied" });

    const application = new Application({
      job: jobId,
      user: req.user.id,
      status: "Pending",
    });

    await application.save();
    return res.status(201).json({ msg: "Application submitted successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Application failed" });
  }
});

// GET my applications
router.get("/my", auth, async (req, res) => {
  try {
    const applications = await Application.find({ user: req.user.id })
      .populate("job")
      .sort({ createdAt: -1 });
    return res.json(applications);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Failed to fetch applications" });
  }
});

module.exports = router;
