var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var recordSchema = require('../schemas/recordSchema');

var emoSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    members: [{
        name: {
            type: String,
            required: true
        },
        instrument: String,
        age: Number
    }],
    yearFormed: Number,
    records: [{
        type: Schema.Types.ObjectId,
        ref: "record"
    }],
    platinumRecs: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model("emo", emoSchema);