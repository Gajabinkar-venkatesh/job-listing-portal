const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,

  role: {
    type: String,
    enum: ["jobseeker", "employer"],
    required: true,
  },

  // Employer Fields
  companyName: String,
  industry: String,
  companyDescription: String,
  website: String,
  location: String,
});

module.exports =
  mongoose.models.User || mongoose.model("User", userSchema);
