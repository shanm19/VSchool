var app = angular.module("MainApp", ['ngRoute']);

app.config(function($routeProvider){
    
    $routeProvider
    .when("/", {
        templateUrl: "./templates/home.html",
        controller: "HomeController"
    })
    .when("/about", {
        templateUrl: "./templates/about.html",
        controller: "AboutController"
    })
    .when("/whyilove", {
        templateUrl: "./templates/whyilove.html",
        controller: "WhyILoveController"
    })
    
});

app.controller("MainController", ["$scope", function($scope){
    
}]);