const express = require("express");
const router = express.Router();
const {
  toggleLike,
  getLikes,
  isLiked,
} = require("../controllers/likeController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, getLikes);
router.post("/toggle", protect, toggleLike);
router.get("/:roomId", protect, isLiked);

module.exports = router;