var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var book = require("./bookSchema")

var publisherSchema = new Schema({
    name: {
        type: String,
        required: true
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

module.exports = mongoose.model("publisher", publisherSchema);