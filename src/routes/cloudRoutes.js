const express = require("express");
const router = express.Router();
const {
  saveToCloud,
  getFromCloud,
} = require("../controllers/cloudController");
const { protect } = require("../middleware/authMiddleware");

// Save requires login, but get is public
router.post("/save", protect, saveToCloud);
router.get("/:code", getFromCloud);

module.exports = router;