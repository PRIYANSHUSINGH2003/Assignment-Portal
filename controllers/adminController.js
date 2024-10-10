const Assignment = require('../models/assignment');

exports.getAssignments = async (req, res) => {
    try {
        const assignments = await Assignment.find({ adminId: req.user.id }).populate('userId', 'name');
        res.status(200).json(assignments);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.acceptAssignment = async (req, res) => {
    try {
        const assignment = await Assignment.findById(req.params.id);
        if (!assignment) {
            return res.status(404).json({ error: 'Assignment not found' });
        }

        assignment.status = 'accepted';
        await assignment.save();

        res.status(200).json({ message: 'Assignment accepted' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.rejectAssignment = async (req, res) => {
    try {
        const assignment = await Assignment.findById(req.params.id);
        if (!assignment) {
            return res.status(404).json({ error: 'Assignment not found' });
        }

        assignment.status = 'rejected';
        await assignment.save();

        res.status(200).json({ message: 'Assignment rejected' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
