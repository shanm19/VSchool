var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var issueSchema = new Schema({
    issue: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    upvotes: {
        type: Number,
        default: 0
    },
    downvotes: {
        type: Number,
        default: 0
    },
    comments: [String]
});

module.exports = mongoose.model("issue", issueSchema);