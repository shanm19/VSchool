// server.js
var express = require("express");
var app = express();
var path = require("path");
var morgan = require("morgan");
var cors = require("cors");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var expressJwt = require("express-jwt");

var port = process.env.PORT || 5000;

// require server modules
var toDoRoutes = require('./routes/todoRoutes');
var authRoutes = require('./routes/authRoutes');
var config = require('./config');

mongoose.connect(config.database, function () {
    console.log("DB UP");
});

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// When we get to doing the frontend, we'll put it in a folder called
// 'frontend' and we'll let express serve up the static files for us.
app.use(express.static(path.join(__dirname, "..", "frontend")));

app.use('/api', expressJwt({
    secret: config.secret
}));
app.use('/api/todos', toDoRoutes);
app.use('/auth', authRoutes);

app.listen(port, function () {
    console.log("Server listening on port " + port);
});