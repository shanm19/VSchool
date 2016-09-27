var express = require('express');
var baseRoute = express.Router();
var people = require("../myData");

baseRoute.route("/")
    .get(function (req, res) {
        res.send(people);
    })
    .post(function (req, res) {
        var newPerson = req.body.person;
        people.push(newPerson);
        res.send(newPerson);
    })
    .put(function (req, res) {

    })
    .delete(function (req, res) {
    
});

baseRoute.route("/:name")
.get(function(req, res){
    res.send(req.params.name);
});

module.exports = baseRoute;