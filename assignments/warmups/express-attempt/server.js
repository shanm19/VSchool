var express = require('express');
var uuid = require('uuid');
var cors = require('cors');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var data = require('./data');
var middleware = require('./sampleMiddleware');
var myMiddle = require('./myMiddle');

var app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(middleware);
app.use(myMiddle);

app.get('/:person', function(req, res){
    
    var person = req.params.person;
    
    for(var i = 0; i < data.length; i++){
        if(person === data[i]){
            res.send(data[i]);
        }
    }

});

app.get('/', function(req, res){
    res.send(data);
});

app.listen(8000, function(){
    console.log("All's good on 8000!");
});