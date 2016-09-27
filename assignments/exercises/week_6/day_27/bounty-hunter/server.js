var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var bountyRoute = require('./routes/bountyRoute');
var app = express();

mongoose.connect("mongodb://localhost/bounty", function () {
    console.log("Mongoose caught the weasel");
});

app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());

app.use("/bounty", bountyRoute);


app.listen(8000, function () {
    console.log("Running on 8000");
});