const mongoose = require("mongoose");

const cloudRoomSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    roomData: {
      type: Object,
      required: true,
    },
    code: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CloudRoom", cloudRoomSchema);