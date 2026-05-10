const CloudRoom = require("../models/CloudRoom");
const crypto = require("crypto");

const generateCode = () => {
  return crypto.randomBytes(4).toString("hex").toUpperCase();
};

const saveToCloud = async (req, res) => {
  try {
    const { roomData } = req.body;
    let code = generateCode();
    let existing = await CloudRoom.findOne({ code });
    while (existing) {
      code = generateCode();
      existing = await CloudRoom.findOne({ code });
    }
    const cloudRoom = await CloudRoom.create({
      userId: null,
      roomData,
      code,
    });
    res.status(201).json({ id: cloudRoom.code, code: cloudRoom.code });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

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