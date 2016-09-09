var app = angular.module("MainApp");

app.service("ToDoService", ["$http", function($http){
    
    var baseUrl = "http://mean.codingcamp.us/shan/todo/";
    var _this = this;
    
    this.toDoList = [];
    this.newToDo = {};

    // GET function
    this.getTodos = function () {
        return $http.get(baseUrl).then(function (response) {
            _this.toDoList = response.data;
            //console.log(_this.toDoList);
            _this.toDoList.forEach(function (task) {
                task.isBeingEdited = false;
            })
            return _this.toDoList;
        })
    }

    this.getTodos();

    // POST function
    this.addToDo = function (todo) {
        
        return $http.post(baseUrl, todo).then(function (result) {
            
            var newTask = result.data;
            
            newTask.isBeingEdited = false;
            _this.toDoList.push(newTask);
            
        })
    }

    // PUT function
    this.updateToDo = function (index, t, d, p, i) {
        var newTask = {
            "title": t,
            "description": d,
            "price": p,
            "imgUrl": i
        };
        var id = _this.toDoList[index]._id;
        return $http.put(baseUrl + id, newTask).then(function (result) {

            newTask.isBeingEdited = false;
            _this.toDoList[index] = result.data;

        })
    }

    // DELETE function
    this.deleteToDo = function (taskId, index) {
        $http.delete(baseUrl + taskId).then(function () {
            _this.toDoList.splice(index, 1);
        })
    }
    
}]);