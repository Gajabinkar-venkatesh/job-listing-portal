const mongoose = require("mongoose");

const JobSeekerProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true
  },
  fullName: {
    type: String,
    required: true
  },
  bio: {
    type: String
  },
  skills: {
    type: [String]
  },
  experience: {
    type: String
  },
  education: {
    type: String
  },
  contactNumber: {
    type: String
  },
  resume: {
    type: String // URL to uploaded file
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model(
  "jobseekerprofile",
  JobSeekerProfileSchema
);
