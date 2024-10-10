// models/Admin.js

const mongoose = require('mongoose');

// Define the Admin schema
const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true, // Ensure usernames are unique
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Create the Admin model
const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
