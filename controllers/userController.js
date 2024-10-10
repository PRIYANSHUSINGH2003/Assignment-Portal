const Assignment = require('../models/assignment');
const Admin = require('../models/admin');

exports.uploadAssignment = async (req, res) => {
    const { task, adminId } = req.body;

    try {
        const admin = await Admin.findById(adminId);
        if (!admin) {
            return res.status(404).json({ error: 'Admin not found' });
        }

        const assignment = new Assignment({
            userId: req.user.id, // This comes from the protected route (JWT)
            task,
            adminId: admin._id
        });

        await assignment.save();
        res.status(201).json({ message: 'Assignment uploaded successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
