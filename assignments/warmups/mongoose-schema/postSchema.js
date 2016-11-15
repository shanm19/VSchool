var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
    post: String,
    tag: {
        type: String,
        required: true
    },
    comments: [String],
    submitter: {
        type: Schema.Types.ObjectId,
        ref: "user"
    }

});

module.exports = mongoose.model("Post", postSchema);