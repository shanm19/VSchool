var app = angular.module("TodoApp");

app.service("TodoService", ["$http", function ($http) {
    this.getTodos = function () {
        return $http.get("/api/todos").then(function (response) {
            return response.data;
        }, function (response) {
            alert("Error " + response.status + ": " + response.statusText);
        });
    };

    this.saveTodo = function (todo) {
        return $http.post("/api/todos", todo).then(function (response) {
            return response.data;
        }, function (response) {
            alert("Error " + response.status + ": " + response.statusText);
        });
    };
}]);

app.controller("TodoController", ["$scope", "$http", "TodoService", "UserService", "$location", function ($scope, $http, TodoService, UserService, $location) {
    $scope.todo = {};
    $scope.todos = [];

    var isAuthenticated = UserService.isAuthenticated();

    if (!isAuthenticated) {
        $location.path('/login');
    }

    $scope.addTodo = function () {
        TodoService.saveTodo($scope.newTodo).then(function (savedTodo) {
            $scope.todos.push(savedTodo);
            $scope.newTodo = {};
        });
    };

    // define and immediately invoke this function when the 
    // page loads to get the list of todos from the server
    $scope.getTodos = function () {
        TodoService.getTodos().then(function (todos) {
            $scope.todos = todos;
        });
    }();
}]);