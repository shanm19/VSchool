var express = require('express');
var occupationRoute = express.Router();
var occupation = require("../myData");

occupationRoute.route("/:occupation")
.get(function(req, res){
    res.send("You found all of the " + req.params.occupation);
});

module.exports = occupationRoute;