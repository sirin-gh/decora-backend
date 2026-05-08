const CloudRoom = require("../models/CloudRoom");
const crypto = require("crypto");

// Generate a short unique code
const generateCode = () => {
  return crypto.randomBytes(4).toString("hex").toUpperCase();
};

// @desc    Save room to cloud
// @route   POST /api/cloud/save
const saveToCloud = async (req, res) => {
  try {
    const { roomData } = req.body;

    let code = generateCode();

    // Make sure code is unique
    let existing = await CloudRoom.findOne({ code });
    while (existing) {
      code = generateCode();
      existing = await CloudRoom.findOne({ code });
    }

    const cloudRoom = await CloudRoom.create({
      userId: req.user?._id || null,
      roomData,
      code,
    });

    res.status(201).json({ id: cloudRoom.code, code: cloudRoom.code });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get room from cloud by code
// @route   GET /api/cloud/:code
const getFromCloud = async (req, res) => {
  try {
    const cloudRoom = await CloudRoom.findOne({ code: req.params.code });
    if (!cloudRoom) {
      return res.status(404).json({ message: "Room not found" });
    }
    res.json(cloudRoom.roomData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { saveToCloud, getFromCloud };