var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var memberSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    instrument: String,
    age: Number
});

module.exports = mongoose.model('member', memberSchema);