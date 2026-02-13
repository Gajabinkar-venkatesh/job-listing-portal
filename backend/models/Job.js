const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    location: String,
    company: String,
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.Job || mongoose.model("Job", JobSchema);
