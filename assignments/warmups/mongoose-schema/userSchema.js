var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    user: {
        username: String,
        required: true,
        unique: true,
        password: {
            type: String,
            required: true
        }
    },
    posts: [{
        type: "Schema,Types.ObjectId",
        ref: "post"
    }]

});

module.exports = mongoose.model("User", userSchema);