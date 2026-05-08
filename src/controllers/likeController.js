const Like = require("../models/Like");

// @desc    Toggle like on a room
// @route   POST /api/likes/toggle
const toggleLike = async (req, res) => {
  try {
    const { roomId } = req.body;
    const userId = req.user._id;

    const existing = await Like.findOne({ userId, roomId });

    if (existing) {
      await existing.deleteOne();
      res.json({ liked: false, roomId });
    } else {
      await Like.create({ userId, roomId });
      res.json({ liked: true, roomId });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all liked rooms for a user
// @route   GET /api/likes
const getLikes = async (req, res) => {
  try {
    const likes = await Like.find({ userId: req.user._id });
    const roomIds = likes.map((like) => like.roomId);
    res.json(roomIds);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Check if a room is liked
// @route   GET /api/likes/:roomId
const isLiked = async (req, res) => {
  try {
    const like = await Like.findOne({
      userId: req.user._id,
      roomId: req.params.roomId,
    });
    res.json({ liked: !!like });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { toggleLike, getLikes, isLiked };