var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var olympianSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    sport: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    age: Number,
    gender: {
        type: String,
        enum: ['M', 'F'],
        required: true
    },
    medals: [String]
});

module.exports = mongoose.model("olympian", olympianSchema);