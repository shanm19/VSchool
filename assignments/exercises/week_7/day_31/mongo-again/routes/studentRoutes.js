var express = require("express");
var studentRoute = express.Router();
var Student = require("../schemas/studentSchema");

studentRoute.route("/")
    .get(function (req, res) {
        Student.find({}, function (err, students) {
            if (err) res.status(500).send(err);
            res.send(students);
        });
    })
    .post(function (req, res) {

        var newStudent = new Student(req.body);
        newStudent.save(function (err, savedStudent) {
            if (err) res.status(500).send(err);
            res.send(savedStudent);
        });

    });

studentRoute.route("/:id")
    .get(function (req, res) {
        var studentID = req.params.id;
        Student.find({
            _id: studentID
        }, function (err, foundStudent) {
            if (err) res.status(500).send(err);
            res.send(foundStudent);
        });
    })
    .put(function (req, res) {
        var studentId = req.params.id;
        Student.findOneAndUpdate({
            _id: studentID
        }, {
            new: true
        }, req.body, function (err, updatedStudent) {
            if (err) res.status(500).send(err);
            res.send(updatedStudent);
        });

    })
    .delete(function (req, res) {
        var studentID = req.params.id;
        Student.findOneAndRemove({
            _id: studentID
        }, function (err, deletedStudent) {
            if (err) res.status(500).send(err);
            res.send(deletedStudent);
        })
    })


module.exports = studentRoute;