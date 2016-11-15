var express = require('express');
var authRoute = express.Router();
var User = require('../models/userSchema');
var jwt = require('jsonwebtoken');
var config = require('../config');

authRoute.post("/signup", function (req, res) {
    User.find({
        username: req.body.username
    }, function (err, existingUser) {
        if (err) {
            res.status(500).send(err);
        }
        if (existingUser.length) {
            res.send({
                success: false,
                message: "That username is already taken!"
            });
        } else {
            var newUser = new User(req.body);
            newUser.save(function (err, savedUser) {
                if (err) res.status(500).send(err);
                res.send(savedUser);
            });
        }
    });
});

authRoute.post("/login", function (req, res) {
    User.findOne({
        username: req.body.username
    }, function (err, foundUser) {
        if (err) res.status(500).send(err);
        if (!foundUser) {
            res.send({
                success: false,
                message: "There is no user with that username!"
            });
        } else if (foundUser) {
            foundUser.checkPassword(req.body.password, function (err, match) {
                if (err) throw (err);
                if (!match) {
                    throw res.status(402).send({
                        success: false,
                        message: "Incorrect password"
                    });
                } else {
                    var token = jwt.sign(foundUser.toObject(), config.secret, {
                        expiresIn: "24h"
                    });
                    res.json({
                        token: token,
                        user: foundUser.withoutPassword(),
                        success: true,
                        message: "Here is your user object and token!"
                    });
                }

            });
        }
    });
});


module.exports = authRoute;