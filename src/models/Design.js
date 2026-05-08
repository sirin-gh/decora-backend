const mongoose = require("mongoose");

const designSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: { type: String, required: true },
    style: { type: String, default: "modern" },
    items: { type: Array, default: [] },
    roomSize: {
      width: { type: Number, default: 5 },
      depth: { type: Number, default: 5 },
    },
    surfaces: { type: Object, default: null },
    likes: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Design", designSchema);