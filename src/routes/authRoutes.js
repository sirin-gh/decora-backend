const express = require("express");
const router = express.Router();
const { googleLogin, getMe } = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");

router.post("/google", googleLogin);
router.get("/me", protect, getMe);

module.exports = router;