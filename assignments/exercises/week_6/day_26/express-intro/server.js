var express = require('express');
var uuid = require("uuid");

var app = express();

var classMembers = require("./classMembers.js");

app.get("/student", function(req, res){
    
    if(req.query.firstName){
        var index = classMembers.indexOf(req.query.firstName);
        res.send(classMembers[index]);
    }else{
        res.send(classMembers);
    }
})

app.get("/student/:id", function(req, res){
    classMembers.forEach(function(student){
        if(student.id === req.params.id){
            res.send(student);
        }
    })
    console.log(req.params);
    console.log("Hit classmembers endpoint");
    res.send(req.params);
    
});

res.send(req.params){
    
};

app.post("/student/:name", function(req, res){
    var newName = req.params.name;
    var newStudent = {
        name: newName,
        id: uuid.v4()
    }
    classMembers.push(newStudent);
    res.send(classMembers);
    
});

app.delete("/student/:name", function(req, res){
    var newName = req.params.name;
    classMembers.splice(classMembers.lastIndexOf(newName), 1);
    res.send(classMembers);
})

app.listen(8000, function(){
    console.log("Your server is running on port 8000!");
});