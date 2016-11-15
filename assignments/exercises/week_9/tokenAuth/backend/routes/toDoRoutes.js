var express = require('express');
var todoRoute = express.Router();
var Todo = require('../models/toDoSchema');
var User = require('../models/userSchema');

todoRoute.route("/")
    .get(function (req, res) {
        Todo.find({
            user: req.user._id
        }, function (err, todos) {
            if (err) res.status(500).send(err);
            res.send(todos);
        });
    })
    .post(function (req, res) {
        var todo = new Todo(req.body);
        todo.user = req.user;
        todo.save(function (err, newTodo) {
            if (err) res.status(500).send(err);
            res.status(201).send(newTodo);
        });
    });

todoRoute.route("/:todoId")
    .get(function (req, res) {
        Todo.findOne({
            _id: req.params.todoId,
            user: req.user._id
        }, function (err, todo) {
            if (err) res.status(500).send(err);
            if (!todo) res.status(404).send("No todo item found.");
            else res.send(todo);
        });
    })
    .put(function (req, res) {
        Todo.findByIdAndUpdate({
            _id: req.params.todoId,
            user: req.user._id
        }, req.body, {
            new: true
        }, function (err, todo) {
            if (err) res.status(500).send(err);
            res.send(todo);
        });
    })
    .delete(function (req, res) {
        Todo.findByIdAndRemove(req.params.todoId, function (err, todo) {
            if (err) res.status(500).send(err);
            res.send(todo);
        });
    });

module.exports = todoRoute;