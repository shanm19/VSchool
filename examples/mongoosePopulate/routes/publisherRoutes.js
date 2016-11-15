var express = require('express');
var publisherRoute = express.Router();
var Publisher = require("../models/publisherSchema");


publisherRoute.route("/")
    .get(function(req, res) {
        Publisher.find({}, function(err, publishers) {
            if (err) res.status(500).send(err);
            res.send(publishers);
        })
    })
    .post(function(req, res) {
        var newPublisher = new Publisher(req.body);
        console.log(newPublisher);
        newPublisher.save(function(err, savedPublisher) {
            if (err) res.status(500).send(err);
            res.send(savedPublisher);
        });
    })

publisherRoute.route("/:id")
    .get(function(req, res) {
        var publisherID = req.params.id;
        console.log(publisherID);
        Publisher.findOne({
                _id: publisherID
            })
            .populate("books")
            .exec(function(err, foundPublisher) {
                if (err) res.status(500).send(err);
                res.send(foundPublisher);
            })
    })
    .put(function(req, res) {
        var publisherID = req.params.id;
        console.log("publisherID ", publisherID);

        Publisher.findOneAndUpdate({
            _id: publisherID
        }, req.body, {
            new: true
        }, function(err, updatedPublisher) {
            console.log("req.body, ", req.body);
            console.log(updatedPublisher);

            if (err) res.status(500).send(err);
            res.send(updatedPublisher);
        })
    })
    .delete(function(req, res) {
        var publisherID = req.params.id;
        Publisher.findOneAndRemove({
            _id: publisherID
        }, function(err, deletedPublisher) {
            if (err) res.status(500).send(err);
            res.send(deletedPublisher);
        })
    })

module.exports = publisherRoute;