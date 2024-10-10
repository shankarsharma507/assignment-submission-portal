const mongoose = require('mongoose');

// Define the user schema
const UserSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    task: { type: String, required: true },
    admin: { type: String, required: true },
    taskStatus: { type: String, enum: ['accepted', 'rejected'], default: '' }, // new field
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);