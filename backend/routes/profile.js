const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const User = require("../models/User");

// GET PROFILE
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

// UPDATE PROFILE
router.put("/", auth, async (req, res) => {
  try {
    const { name } = req.body;

    const user = await User.findById(req.user.id);
    user.name = name || user.name;

    await user.save();
    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: "Profile update failed" });
  }
});

module.exports = router;
