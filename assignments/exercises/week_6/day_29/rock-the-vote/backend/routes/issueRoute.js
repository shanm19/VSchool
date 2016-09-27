var express = require('express');
var issueRoute = express.Router();
var Issue = require("../schemas/issueSchema");

issueRoute.route("/")
    .get(function (req, res) {
        Issue.find({}, function (err, issues) {
            if (err) res.status(500).send(err);
            res.send(issues);
        })
    })
    .post(function (req, res) {
        var newIssue = new Issue(req.body);
        newIssue.save(function (err, savedIssue) {
            if (err) res.status(500).send(err);
            res.send(savedIssue);
        })
    });

issueRoute.route("/:id")
    .get(function (req, res) {
        var issueID = req.params.id;
        Issue.find({
                _id: issueID
            },
            function (err, foundIssue) {
                if (err) res.status(500).send(err);
                res.send(foundIssue);
            })
    })
    .post(function (req, res) {
        var issueID = req.params.id;
        Issue.findOneAndUpdate({
                _id: issueID
            },
            req.body, {
                new: true
            },
            function (err, updatedIssue) {
                if (err) res.status(500).send(err);
                res.send(updatedIssue);
            })
    })
    .put(function (req, res) {
        var issueID = req.params.id;
        Issue.findOneAndUpdate({
                _id: issueID
            },
            req.body, {
                new: true
            },
            function (err, updatedIssue) {
                if (err) res.status(500).send(err);
                res.send(updatedIssue);
            })
    })
    .delete(function (req, res) {
        var issueID = req.params.id;
        Issue.findOneAndRemove({
                _id: issueID
            },
            function (err, deletedIssue) {
                if (err) res.status(500).send(err);
                res.send(deletedIssue);
            })
    });

module.exports = issueRoute;