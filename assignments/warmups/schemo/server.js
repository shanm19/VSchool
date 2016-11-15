var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();

var emoRoute = require("./routes/emoRoute");

mongoose.connect("mongodb://localhost/bands", function () {
    console.log("Mongoose caught the weasel!");
});

app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use("/bands/emo", emoRoute);

app.listen(8000, function () {
    console.log("All's good on 8000!");
});