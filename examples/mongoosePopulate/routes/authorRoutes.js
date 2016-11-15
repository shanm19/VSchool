var express = require('express');
var authorRoute = express.Router();
var Author = require("../models/authorSchema");


authorRoute.route("/")
    .get(function(req, res) {
        Author.find({}, function(err, books) {
            if (err) res.status(500).send(err);
            res.send(books);
        })
    })
    .post(function(req, res) {
        var newAuthor = new Author(req.body);
        console.log(newAuthor);
        newAuthor.save(function(err, savedAuthor) {
            if (err) res.status(500).send(err);
            res.send(savedAuthor);
        });
    })

authorRoute.route("/:id")
    .get(function(req, res) {
        var authorID = req.params.id;
        console.log(authorID);
        Author.findOne({
                _id: authorID
            })
            .populate("books")
            .populate("publisher")
            // .populate("publisher.books")
            .exec(function(err, foundAuthor) {
                if (err) res.status(500).send(err);
                res.send(foundAuthor);
            })
    })
    .put(function(req, res) {
        var authorID = req.params.id;
        Author.findOneAndUpdate({
            _id: authorID
        }, req.body, {
            new: true
        }, function(err, updatedAuthor) {
            if (err) res.status(500).send(err);
            res.send(updatedAuthor);
        })
    })
    .delete(function(req, res) {
        var authorID = req.params.id;
        Author.findOneAndRemove({
            _id: authorID
        }, function(err, deletedAuthor) {
            if (err) res.status(500).send(err);
            res.send(deletedAuthor);
        })
    })

module.exports = authorRoute;