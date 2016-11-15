var express = require('express');
var emoRoute = express.Router();
var Emo = require('../schemas/emoSchema');

emoRoute.route('/')
    .get(function (req, res) {
        Emo.find({})
            .exec(function (err, bands) {
                if (err) res.status(500).send(err);
                res.send(bands);
            });
    })
    .post(function (req, res) {
        var newBand = Emo(req.body);
        newBand.save(function (err, savedBand) {
            if (err) res.status(500).send(err);
            res.send(savedBand);
        });
    });

emoRoute.route('/:id')
    .get(function (req, res) {
        var bandID = req.params.id;
        Emo.findOne({
                _id: bandID
            })
            .populate("records")
            .exec(function (err, foundBand) {
                if (err) res.status(500).send(err);
                res.send(foundBand);
            });
    })
    .put(function (req, res) {
        var bandID = req.params.id;
        Emo.findOneAndUpdate({
                _id: bandID
            },
            req.body, {
                new: true
            },
            function (err, updatedBand) {
                if (err) res.status(500).send(err);
                res.send(updatedBand);
            });
    });

module.exports = emoRoute;