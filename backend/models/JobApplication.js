const mongoose = require("mongoose");

const JobApplicationSchema = new mongoose.Schema({
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
    required: true
  },
  jobSeeker: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "JobSeekerProfile",
    required: true
  },
  resume: {
    type: String // optional: can use the JobSeeker's uploaded resume
  },
  coverLetter: {
    type: String
  },
  status: {
    type: String,
    enum: ["applied", "shortlisted", "rejected", "hired"],
    default: "applied"
  },
  appliedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("JobApplication", JobApplicationSchema);
