var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        enum: ["M", "F", "male", "female"]
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: Number,
    birthday: Date,
    jsStudent: Boolean,
    frameworks: [String],
    languages: [String],
    address: {
        buildingNumber: Number,
        street: String,
        aptNumber: Number,
        state: String,
        city: String,
        zip: Number,
        isApt: Boolean,
    },
    phone: {
        countryCode: Number,
        areaCode: Number,
        number: Number
    }
});

module.exports = mongoose.model("students", studentSchema);