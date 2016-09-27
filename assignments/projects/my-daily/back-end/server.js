var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

var app = express();

mongoose.connect("mongodb://localhost/news", function () {
    console.log("Mongoose caught the weasel!");
});

//Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(logger("dev"));

//Routes
app.use("/news", newsRoute);

app.listen(8000, function () {
    console.log("All's good on 8000!");
});