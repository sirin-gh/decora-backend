const Design = require("../models/Design");

// @desc    Get all designs for a user
// @route   GET /api/designs
const getDesigns = async (req, res) => {
  try {
    const designs = await Design.find({ userId: req.user._id }).sort({
      createdAt: -1,
    });
    res.json(designs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Save a new design
// @route   POST /api/designs
const saveDesign = async (req, res) => {
  try {
    const { name, style, items, roomSize, surfaces } = req.body;
    const design = await Design.create({
      userId: req.user._id,
      name,
      style,
      items,
      roomSize,
      surfaces,
    });
    res.status(201).json(design);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update a design
// @route   PUT /api/designs/:id
const updateDesign = async (req, res) => {
  try {
    const design = await Design.findById(req.params.id);
    if (!design) {
      return res.status(404).json({ message: "Design not found" });
    }
    if (design.userId.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }
    const updated = await Design.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete a design
// @route   DELETE /api/designs/:id
const deleteDesign = async (req, res) => {
  try {
    const design = await Design.findById(req.params.id);
    if (!design) {
      return res.status(404).json({ message: "Design not found" });
    }
    if (design.userId.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }
    await design.deleteOne();
    res.json({ message: "Design deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getDesigns, saveDesign, updateDesign, deleteDesign };