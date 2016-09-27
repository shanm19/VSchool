var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongo = require('mongodb');
var logger = require('morgan');
var mongoClient = mongo.MongoClient;
var studentRoute = express.Router();

var app = express();
var database = "mongodb://localhost:27017/people";

app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());

app.get("/students", function (req, res) {
    mongoClient.connect(database, function (err, db) {
        console.log("DB up!");
        if (err) {
            console.log("Could not connect to the database!", err);
        } else {
            var students = db.collection("students");
            students.find({}).toArray(function (err, results) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    console.log("Results found");
                    res.send(results);
                }
            });
        }
    });
});

app.post("/students", function (req, res) {
    var newStudent = req.body;
    mongoClient.connect(database, function (err, db) {
        console.log("DB up!");
        if (err) {
            console.log(err);
        } else {
            var students = db.collection("students");
            students.insert(newStudent, function (err, savedStudent) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.send(savedStudent);
                }
            });
        }
    });
});

app.put("/students/:id", function (req, res) {
    var studentID = req.params.id;
    var updatedStudent = req.body;
    mongoClient.connect(database, function (err, db) {
        console.log("DB connected!");
        if (err) {
            console.log(err);
        } else {
            var students = db.collection("students");
            students.update({
                _id: studentID
            }, updateStudent, function (err, updatedStudent) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.send(updatedStudent);
                }
            });
        }
    })
});

app.listen(8000, function () {
    console.log("All's good on 8000!");
});