var app = angular.module("MainApp", []);

app.controller("MainController", function($scope){
    
    $scope.test = "Hello";
    $scope.coolCars = ["Tesla", "BMW"];
    
});