var express = require('express');
var path = require('path');

// set up server
var app = express();
var server = app.listen(8080);
var io = require('socket.io')(server);

// set up public facing files
app.use(express.static(path.join(__dirname + "/public")));
app.set("views", __dirname + "/public/views");

// set up view engine
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");

// main website
app.get("/", function (req, res) {
    res.render("index.html");
});

io.on("connection", function (socket) {
    console.log("A user has connected");
    socket.on("incoming", function (data) {
        if (data !== "") {
            io.emit("outgoing", {
                message: data
            });
        } else {
            io.sockets[socket.id].emit("outgoing", {
                message: "Must provide text in message."
            });
        }
    });
});