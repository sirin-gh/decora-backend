const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");
const User = require("../models/User");

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

// @desc    Login with Google
// @route   POST /api/auth/google
const googleLogin = async (req, res) => {
  const { idToken } = req.body;

  try {
    // Verify Google token
    const ticket = await client.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { sub: googleId, name, email, picture: photoUrl } = payload;

    // Check if user exists
    let user = await User.findOne({ email });

    if (!user) {
      // Create new user
      user = await User.create({
        name,
        email,
        photoUrl,
        googleId,
        provider: "google",
      });
    } else {
      // Update existing user
      user.googleId = googleId;
      user.photoUrl = photoUrl;
      await user.save();
    }

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      photoUrl: user.photoUrl,
      token: generateToken(user._id),
    });
  } catch (error) {
    console.error("Google login error:", error);
    res.status(401).json({ message: "Invalid Google token" });
  }
};

// @desc    Get current user
// @route   GET /api/auth/me
const getMe = async (req, res) => {
  res.json({
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
    photoUrl: req.user.photoUrl,
  });
};

module.exports = { googleLogin, getMe };