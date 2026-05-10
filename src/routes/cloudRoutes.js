const express = require("express");
const router = express.Router();
const {
  saveToCloud,
  getFromCloud,
} = require("../controllers/cloudController");
const { protect } = require("../middleware/authMiddleware");

// Save works WITHOUT login too (optional auth)
router.post("/save", saveToCloud);
router.get("/:code", getFromCloud);

module.exports = router;