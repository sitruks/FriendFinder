// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var api = require('./app/routing/apiRoutes')
var html = require('./app/routing/htmlRoutes')

// Set up the Express App
// =============================================================
var app = express();
var PORT = 8000;

// Sets up the Express app to handle data parsing
api.use(api)
app.use(html)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Friends (DATA)
// =============================================================
var person = [
  {
    "name": "Obi Wan Kenobi",
    "photo": "",
    "scores": [
      5, 4, 1, 1, 5, 8, 9, 10, 3, 7
    ]
  },
  {
    "name": "Darth Maul",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores": [
      5, 4, 1, 1, 5, 8, 9, 10, 3, 7
    ]
  },
  {
    "name": "Yoda",
    "photo": "",
    "scores": [
      5, 4, 1, 1, 5, 8, 9, 10, 3, 7
    ]
  }
];

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});