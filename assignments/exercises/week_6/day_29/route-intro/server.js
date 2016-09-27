var express = require('express');
var cors = require('cors');
var logger = require('morgan');
var bodyParser = require('body-parser');
var uuid = require('uuid');

var app = express();

var baseRoute = require('./routes/baseRoute');
var occupationRoute = require('./routes/occupationRoute');


//Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(logger("dev"));

//Routes
app.use("/people", baseRoute);
app.use("/people/occupation", occupationRoute);

app.listen(8000, function(){
    console.log("All's good on 8000!");
});