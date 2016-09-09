var app = angular.module("MainApp", []);

app.controller("MainController", ["$scope", "ToDoService", function ($scope, ToDoService) {

    $scope.toDoList = ToDoService.toDoList;
    
    function clear(){
        $scope.param = {
            "title": "",
            "description": "",
            "price": "",
            "imgUrl": ""
        };
    }
    
    clear();
    
    //get
    $scope.getTodos = function(){
        ToDoService.getTodos().then(function(response){
            $scope.toDoList = response;
        })
    }
    
    $scope.getTodos();
    
    //post
    $scope.addToDo = function(){
        ToDoService.addToDo($scope.param).then(function(){
            clear();
        })
    }
    
    //put
    $scope.updateToDo = function(index, t, d, p, i){
        ToDoService.updateToDo(index, t, d, p, i);
    }
    
    //delete
    $scope.deleteToDo = function(taskId, index){
        ToDoService.deleteToDo(taskId, index);
    }
    

}]);