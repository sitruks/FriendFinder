// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var api = require('./app/routing/apiRoutes');
var html = require('./app/routing/htmlRoutes');

// Set up the Express App
// =============================================================
var app = express();
var PORT = 8000;

// Sets up the Express app to handle data parsing
api.use(api)
app.use(html)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});