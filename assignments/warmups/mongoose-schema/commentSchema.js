var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var user = require('./userSchema');
var post = require('./postSchema');

var commentSchema = new Schema({
    comment: String,
    upvotes: Number,
    downvotes: Number,
    post: {
        type: Schema.Types.ObjectId,
        ref: "post"
    },
    submitter: {
        type: Schema.Types.ObjectId,
        ref: "user"
    }
});

module.exports = mongoose.model("Comment", commentSchema);