var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bountySchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: String,
    living: Boolean,
    amount: Number,
    species: {
        type: String,
        enum: ["Jedi", "Sith"]
    }
});

module.exports = mongoose.model("bounty", bountySchema);