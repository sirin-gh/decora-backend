const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./src/routes/authRoutes"));
app.use("/api/designs", require("./src/routes/designRoutes"));
app.use("/api/likes", require("./src/routes/likeRoutes"));
app.use("/api/cloud", require("./src/routes/cloudRoutes"));
app.use("/api/users", require("./src/routes/userRoutes"));

// Health check
app.get("/", (req, res) => {
  res.json({ message: "Decora API is running!" });
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("✅ MongoDB connected!");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
  });

// Start server regardless
app.listen(process.env.PORT || 5000, () => {
  console.log(`🚀 Server running on port ${process.env.PORT || 5000}`);
});