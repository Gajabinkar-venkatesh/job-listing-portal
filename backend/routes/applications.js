const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

// TEST ROUTE (for now)
router.get("/", auth, (req, res) => {
  res.json({ msg: "Applications route working ✅", user: req.user });
});

module.exports = router;
