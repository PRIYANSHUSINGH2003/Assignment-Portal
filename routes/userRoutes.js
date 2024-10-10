const express = require('express');
const { uploadAssignment } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/upload', protect, uploadAssignment);

module.exports = router;
