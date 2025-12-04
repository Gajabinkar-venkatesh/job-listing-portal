const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

// Route files
const authRoutes = require("./routes/auth");
const profileRoutes = require("./routes/profile");
const jobRoutes = require("./routes/Jobs");   // ✅ FIXED (lowercase)

// Initialize app
const app = express();

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/jobListingDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Error:", err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/jobs", jobRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("✅ Job Listing Portal Backend is Running Perfectly");
});

// Server Start
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
