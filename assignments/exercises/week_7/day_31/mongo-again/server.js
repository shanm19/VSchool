var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var objectId = require("mongodb").ObjectId;
var logger = require("morgan");
var mongoose = require("mongoose");
var Student = require("./schemas/studentSchema");
var studentRoutes = require("./routes/studentRoutes");

var app = express();
mongoose.connect("mongodb://localhost/people", function () {
    console.log("Mongoose caught the weasel");
});

app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());

app.use("/student", studentRoutes);


app.listen(8000, function () {
    console.log("All's good on 8000!");
});