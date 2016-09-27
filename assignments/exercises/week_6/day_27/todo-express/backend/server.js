var express = require('express');
var uuid = require('uuid');
var cors = require('cors');
var todos = require('./modules/todos');

var app = express();


app.listen(8000, function(){
    
    console.log("All's good on port 8000!");
    
});

app.use(cors());

app.get('/todo', function(req, res){
    
    if(req.query.name){
        todos.forEach(function(todo, index){
            console.log(req.query.name);
            if(todo.name.toLowerCase() === req.query.name.toLowerCase()){
                res.send(todos[index]);
            }
        })
    }else{
        console.log("No name");
        res.send(todos);
    }
    
});

app.post('/todo/:name', function(req, res){
    
    var todo = req.params;
    
    var newTodo = {
        name: todo.name,
        description: todo.description,
        imageUrl: todo.imageUrl,
        completed: todo.completed,
        _id: uuid.v4()
    };
    
    todos.push(newTodo);
    
    res.send(todos);
    
    
});

app.put('/todo/:_id', function(req, res){
    console.log("_id: " + req.params._id);
    console.log("updated todo: " + req.query);
    var todoIndex;
    var _id = req.params._id;
    var updatedTodo = req.query;
    
    todos.forEach(function(todo, index){
        console.log("todo._id:", todo._id);
        console.log("todo.name:", todo.name);
        if(todo._id === _id || todo.name === _id){
            todoIndex = index;
        }
    });
    
    if(todos[todoIndex]._id){
        updatedTodo._id = todos[todoIndex]._id;
    }else{
        updatedTodo._id = uuid.v4();
    }
    
    if(!updatedTodo.name){
        updatedTodo.name = req.params.name;
    }
    
    for(var key in updatedTodo){
        todos[todoIndex][key] = updatedTodo[key];
    }
    
    res.send(todos);
    
});

app.delete('/todo/:_id', function(req, res){
    
    var _id = req.params._id;
    console.log(_id);
    for(var todo in todos){
        if(todos[todo]._id === _id){
            todos.splice(todo, 1);
        }
        if(todos[todo].name === _id){
            todos.splice(todo, 1);
        }
    }
    
    res.send(todos);
    
});