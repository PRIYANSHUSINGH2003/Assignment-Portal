const express = require('express');
const { getAssignments, acceptAssignment, rejectAssignment } = require('../controllers/adminController');
const { protectAdmin } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/assignments', protectAdmin, getAssignments);
router.post('/assignments/:id/accept', protectAdmin, acceptAssignment);
router.post('/assignments/:id/reject', protectAdmin, rejectAssignment);

module.exports = router;
