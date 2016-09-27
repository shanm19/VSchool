var express = require('express');
var logger = require('morgan');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');
var olympianRoute = require('./routes/olympianRoute');

var app = express();

//Connect the db
mongoose.connect("mongodb://localhost/olympian", function () {
    console.log("Mongoose caught the weasel");
});

//Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(logger("dev"));

//Routes
app.use("/olympian", olympianRoute);

app.listen(8000, function () {
    console.log("All's good on 8000!");
});