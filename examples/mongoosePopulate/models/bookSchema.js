var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var publisherSchema = require("./publisherSchema").Schema;
var authorSchema = require("./authorSchema").Schema;
// var ObjectId = mongoose.Schema.Types.ObjectId;

var bookSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: "author"
    },
    publisher: {
        type: Schema.Types.ObjectId,
        ref: "publisher"
    },
});

module.exports = mongoose.model("book", bookSchema);