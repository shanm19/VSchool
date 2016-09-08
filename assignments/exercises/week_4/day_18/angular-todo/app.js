var app = angular.module("MainApp", []);

app.controller("MainController", ["$scope", "$http", function ($scope, $http) {

    var baseUrl = "http://mean.codingcamp.us/shan/todo/";

    $scope.toDoList = [];
    $scope.newToDo = {};

    $scope.param = {
        "title": "",
        "description": "",
        "price": "",
        "imgUrl": ""
    };

    // GET function
    $scope.getTodos = function () {
        $http.get(baseUrl).then(function (response) {
            $scope.toDoList = response.data;
            $scope.toDoList.forEach(function (task) {
                task.isBeingEdited = false;
            })
        })
    }

    $scope.getTodos();

    // POST function
    $scope.addToDo = function () {
        var newTask = $scope.param;
        //console.log(newTask);
        $http.post(baseUrl, newTask).then(function (result) {

            var newTask = result.data;
            //alert(newTask.title);
            newTask.isBeingEdited = false;
            $scope.toDoList.push(newTask);
            //console.log($scope.toDoList);
            //console.log(newTask);
            // clear input fields
            $scope.param = {
                "title": "",
                "description": "",
                "price": "",
                "imgUrl": ""
            };
        })
    }

    // PUT function
    $scope.updateToDo = function (index, t, d, p, i) {
        //alert(t + d + p + i);
        var newTask = {
            "title": t,
            "description": d,
            "price": p,
            "imgUrl": i
        };
        var id = $scope.toDoList[index]._id;
        $http.put(baseUrl + id, newTask).then(function (result) {

            var updatedToDo = result.data;
            task.isBeingEdited = false;
            $scope.toDoList[index] = updatedToDo;
            
        })
    }

    // DELETE function
    $scope.deleteToDo = function (taskId, index) {

        $http.delete(baseUrl + taskId).then(function () {
            $scope.toDoList.splice(index, 1);
        })
    }

}]);