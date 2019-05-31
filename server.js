// Dependencies
// =============================================================
const express = require("express");
const path = require("path");
const htmlRoute = require('./app/routing/htmlRoutes');
const apiRoute = require('./app/routing/apiRoutes');

// Set up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', htmlRoute);
app.use('/api', apiRoute);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});