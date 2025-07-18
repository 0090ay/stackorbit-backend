// routes/authRoutes.js
const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware"); // ✅ Correct import

// Public routes
router.post("/register", register);
router.post("/login", login);

// Protected route to get user data
router.get("/me", protect, (req, res) => {
  res.status(200).json(req.user); // ✅ Auto-filled by middleware
});

module.exports = router;
