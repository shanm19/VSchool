var app = angular.module("ToDoApp", []);

app.controller("MainController", function ($scope) {
    
    $scope.tasks = [1, 2, 3];
    $scope.task = "";

    $scope.addTask = function () {
        if ($scope.newTask != "") {
            $scope.tasks.push($scope.newTask);
            $scope.newTask = "";
        }
    }

    $scope.deleteTask = function (index) {
        $scope.tasks.splice(index, 1);
    }
    
});