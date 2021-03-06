//Use router to create router module
const express = require('express');
const potentialFriends = require('../data/friends');
const router = express.Router();

// GET request to display all potential friends in JSON format with /api/friends entered as end point in url
router.get('/api/friends', function (req, res) {
    return res.json(potentialFriends);
});

// POST request to receive data from client and push to potentialFriends array
router.post('/api/friends', function (req, res) {
    return potentialFriends.push(req.body);
});

module.exports = router;