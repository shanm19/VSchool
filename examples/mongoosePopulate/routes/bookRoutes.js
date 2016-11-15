var express = require('express');
var bookRoute = express.Router();
var Book = require("../models/bookSchema");
var Publisher = require("../models/publisherSchema");
var Author = require("../models/authorSchema");
bookRoute.route("/")
    .get(function(req, res) {
        Book.find({}, function(err, books) {
            if (err) res.status(500).send(err);
            res.send(books);
        })
    })
    .post(function(req, res) {
        // create new Book instance. It gets an _id here
        var newBook = new Book(req.body);

        // If the newBook has an author or publisher property
        // populate those objects in other collections with the newBook's
        // _id
        if (newBook.author) { // newBook.author is an ObjectId here. 
            Author.findOne({
                _id: newBook.author
            }, function(err, foundAuthor) {
                if (err) {
                    console.log(err);
                } else {
                    foundAuthor.books.push(newBook._id);
                    foundAuthor.save();
                }
            })
        }

        if (newBook.publisher) {
            Publisher.findOne({
                _id: newBook.publisher
            }, function(err, foundPublisher) {
                if (err) {
                    console.log(err);
                } else {
                    foundPublisher.books.push(newBook._id);
                    foundPublisher.save();
                }
            })
        }

        newBook.save(function(err, savedBook) {
            if (err) res.status(500).send(err);
            res.send(savedBook);
        })



    })

bookRoute.route("/:id")
    .get(function(req, res) {
        var bookID = req.params.id;
        console.log(bookID);
        Book.findOne({
                _id: bookID
            })
            .populate("author")
            .populate("publisher")
            .exec(function(err, foundBook) {
                if (err) res.status(500).send(err);
                res.send(foundBook);
            })
    })
    .put(function(req, res) {
        var bookID = req.params.id;
        Book.findOneAndUpdate({
            _id: bookID
        }, req.body, {
            new: true
        }, function(err, updatedBook) {
            if (err) res.status(500).send(err);
            res.send(updatedBook);
        })
    })
    .delete(function(req, res) {
        var bookID = req.params.id;
        Book.findOneAndRemove({
            _id: bookID
        }, function(err, deletedBook) {
            if (err) res.status(500).send(err);
            res.send(deletedBook);
        })
    })

module.exports = bookRoute;