var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var recordSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    successLevel: {
        type: String,
        enum: ["none", "gold", "platinum", "double platinum"],
        default: "none"
    }
});

module.exports = mongoose.model('record', recordSchema);