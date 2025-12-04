const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  employer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",   // ✅ FIXED HERE
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  skills: {
    type: [String],
    default: []
  },
  experience: {
    type: String
  },
  salary: {
    type: String
  },
  location: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Job", JobSchema);
