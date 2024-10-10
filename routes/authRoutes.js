const express = require('express');
const { registerUser, loginUser, registerAdmin, loginAdmin } = require('../controllers/authController');
const { uploadAssignment } = require('../controllers/userController'); // Import your function
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// User Routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Assignment Route
router.post('/upload', protect, uploadAssignment); // Add this line

module.exports = router;
