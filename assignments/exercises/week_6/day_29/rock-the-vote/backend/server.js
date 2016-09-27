var express = require('express');
var logger = require('morgan');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var issueRoute = require("./routes/issueRoute");

var app = express();

//Connect the database
mongoose.connect("mongodb://localhost/issue", function () {
    console.log("Mongoose caught the weasel");
});

//Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(logger("dev"));

//Routes
app.use("/issue", issueRoute);

app.listen(8000, function () {
    console.log("All's good on 8000!");
});