var express = require('express');
var bountyRoute = express.Router();
var Bounty = require("../schemas/bountySchema");

bountyRoute.route("/")
    .get(function (req, res) {
        Bounty.find({}, function (err, bounties) {
            if (err) res.status(500).send(err);
            res.send(bounties);
        })
    })
    .post(function (req, res) {
        var newBounty = new Bounty(req.body);
        newBounty.save(function (err, savedBounty) {
            if (err) res.status(500).send(err);
            res.send(savedBounty);
        })
    });

bountyRoute.route('/:id')
    .get(function (req, res) {
        var bountyID = req.params.id;
        Bounty.find({
                _id: bountyID
            },
            function (err, foundBounty) {
                if (err) res.status(500).send(err);
                res.send(foundBounty);
            });
    })
    .put(function (req, res) {
        var bountyID = req.params.id;
        Bounty.findOneAndUpdate({
                _id: bountyID

            },
            req.body, {
                new: true
            },
            function (err, updatedBounty) {
                if (err) res.status(500).send(err);
                res.send(updatedBounty);
            });
    })
    .delete(function (req, res) {
        var bountyID = req.params.id;
        Bounty.findOneAndRemove({
                _id: bountyID
            },
            function (err, deletedBounty) {
                if (err) res.status(500).send(err);
                res.send(deletedBounty);
            })
    });

module.exports = bountyRoute;