const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Admin = require('../models/admin');

exports.protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id);
            next();
        } catch (error) {
            res.status(401).json({ message: 'Not authorized' });
        }
    } else {
        res.status(401).json({ message: 'No token, not authorized' });
    }
};

exports.protectAdmin = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await Admin.findById(decoded.id);
            next();
        } catch (error) {
            res.status(401).json({ message: 'Not authorized as admin' });
        }
    } else {
        res.status(401).json({ message: 'No token, not authorized' });
    }
};
