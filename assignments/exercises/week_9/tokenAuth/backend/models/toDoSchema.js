var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var toDoSchema = new Schema({
    title: {
        type: String,
        completed: Boolean,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

module.exports = mongoose.model('ToDo', toDoSchema);