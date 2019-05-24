//Use router to create router module
var express = require('express')
var path = require("path");
var router = express.Router()

// Basic route that sends the user first to the home page
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
})

//Route that sends to survey page
router.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"))
})

module.exports = router