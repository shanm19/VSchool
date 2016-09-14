var app = angular.module("MainApp", ['ngRoute']);

app.config(function($routeProvider){
    
    $routeProvider
    .when("/", {
        templateUrl: "./templates/tech.html",
        controller: "TechController"
    })
    .when("/otherTech", {
        templateUrl: "./templates/otherTech.html",
        controller: "OtherTechController"
    })
    
})

app.controller("MainController", ["$scope", function($scope){
    
    
    
}]);