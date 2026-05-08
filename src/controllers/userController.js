const User = require("../models/User");
const Design = require("../models/Design");
const Like = require("../models/Like");

// @desc    Get user profile with stats
// @route   GET /api/users/profile
const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const designsCount = await Design.countDocuments({ userId: req.user._id });
    const likesCount = await Like.countDocuments({ userId: req.user._id });

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      photoUrl: user.photoUrl,
      provider: user.provider,
      createdAt: user.createdAt,
      stats: {
        designs: designsCount,
        likes: likesCount,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update user profile
// @route   PUT /api/users/profile
const updateProfile = async (req, res) => {
  try {
    const { name, photoUrl } = req.body;
    const user = await User.findByIdAndUpdate(
      req.user._id,
      { name, photoUrl },
      { new: true }
    );
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      photoUrl: user.photoUrl,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getProfile, updateProfile };