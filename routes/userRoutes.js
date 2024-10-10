const express = require('express');
const router = express.Router();
const User = require('../models/User');

// POST: Register a new user
router.post('/register', async(req, res) => {
    try {
        const { userId, admin } = req.body;

        // Check if the userId already exists
        const existingUser = await User.findOne({ userId });
        if (existingUser) {
            return res.status(400).send({ error: 'User already exists' });
        }

        // Create a new user
        const newUser = new User({ userId, admin });

        // Save the new user to the database
        await newUser.save();
        res.status(201).send({ message: 'User registered successfully!', newUser });
    } catch (error) {
        res.status(400).send({ error: 'Error registering user', details: error.message });
    }
});

// POST: Upload an assignment
router.post('/upload-assignment', async(req, res) => {
    try {
        const { userId, task } = req.body;

        // Find the user by userId and update their task
        const user = await User.findOneAndUpdate({ userId }, { task }, { new: true });

        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }

        res.status(200).send({ message: 'Assignment uploaded successfully!', user });
    } catch (error) {
        res.status(400).send({ error: 'Error uploading assignment', details: error.message });
    }
});

// GET: Fetch all users and their assignments
router.get('/assignments', async(req, res) => {
    try {
        const users = await User.find();
        res.status(200).send({ users });
    } catch (error) {
        res.status(400).send({ error: 'Error fetching users and assignments', details: error.message });
    }
});

module.exports = router;

// POST: Accept or reject an assignment
router.post('/accept-reject-assignment', async(req, res) => {
    try {
        const { userId, status } = req.body;

        // Find the user and update the assignment status
        const user = await User.findOne({ userId });

        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }

        // Assuming 'task' is what needs to be updated (you can change this to something else if needed)
        if (status === 'accepted' || status === 'rejected') {
            user.taskStatus = status; // Add this field if necessary
            await user.save();
            res.status(200).send({ message: `Assignment ${status} successfully!`, user });
        } else {
            res.status(400).send({ error: 'Invalid status' });
        }

    } catch (error) {
        res.status(400).send({ error: 'Error accepting/rejecting assignment', details: error.message });
    }
});