var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var logger = require('morgan');
var mongoose = require("mongoose");
var publisherRoutes = require("./routes/publisherRoutes");
var bookRoutes = require("./routes/bookRoutes");
var authorRoutes = require("./routes/authorRoutes");

var app = express();
mongoose.connect("mongodb://localhost/people", function() {
    console.log("Mongoose caught the weasel!");
})

app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());

app.use("/publisher", publisherRoutes);
app.use("/book", bookRoutes);
app.use("/author", authorRoutes);

app.listen(8000, function() {
    console.log("Server is running on port 8000!");
})

// NPM install necessary packages
// Write server 
// Write DB Schemas
// Write your routes... Your routes are going to use the Schemas
// to interact with the DB. 
// Your routes will provide specific actions/behaviors 
// at each endpoint