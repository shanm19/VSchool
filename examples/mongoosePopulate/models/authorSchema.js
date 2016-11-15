var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bookSchema = require("./bookSchema");
var publisherSchema = require("./PublisherSchema");

var authorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    publisher: {
        type: Schema.Types.ObjectId,
        ref: "publisher"
    },
    address: {
        buildingNumber: Number,
        street: String,
        aptNumber: Number,
        state: {
            type: String,
            default: "UT"
        },
        city: String,
        zip: Number,
        isApt: Boolean,
    },
    books: [{
        type: Schema.Types.ObjectId,
        ref: "book"
    }]

}, {
    timestamps: true
});
module.exports = mongoose.model("author", authorSchema);