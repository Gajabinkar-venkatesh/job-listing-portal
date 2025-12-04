const mongoose = require("mongoose");

const EmployerProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true
  },
  companyName: {
    type: String,
    required: true
  },
  companyDescription: {
    type: String
  },
  website: {
    type: String
  },
  contactNumber: {
    type: String
  },
  companyLogo: {
    type: String // URL for logo
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model(
  "employerprofile",
  EmployerProfileSchema
);
