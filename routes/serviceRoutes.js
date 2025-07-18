const express = require("express");
const router = express.Router();

const {
  getAllServices,
  createService,
} = require("../controllers/serviceController");

const { protect } = require("../middleware/authMiddleware");

// Public: anyone can fetch all services
router.get("/", getAllServices);

// Protected: only logged in user can post (you can restrict to admin later)
router.post("/", protect, createService);

module.exports = router;
