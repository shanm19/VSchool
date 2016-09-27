var express = require('express');
var olympianRoute = express.Router();

var Olympian = require('../schemas/olympianSchema');

olympianRoute.route("/")
    .get(function (req, res) {
        Olympian.find({}, function (err, olympians) {
            if (err) res.status(500).send(err);
            res.send(olympians)
        });
    })
    .post(function (req, res) {
        var newOlympian = new Olympian(req.body);
        newOlympian.save(function (err, savedOlympian) {
            if (err) res.status(500).send(err);
            res.send(savedOlympian);
        });
    });

olympianRoute.route("/:id")
    .get(function (req, res) {
        var olympianID = req.params.id;
        Olympian.find({
            _id: olympianID
        }, function (err, foundOlympian) {
            if (err) res.status(500).send(err);
            res.send(foundOlympian);
        });
    })
    .put(function (req, res) {
        var olympianID = req.params.id;
        Olympian.findOneAndUpdate({
                _id: olympianID
            },
            req.body, {
                new: true
            },
            function (err, updatedOlympian) {
                if (err) res.status(500).send(err);
                res.send(updatedOlympian);
            });
    })

module.exports = olympianRoute;