var app = angular.module("RoutingApp", ['ngRoute']);

app.config(function ($routeProvider) {

    $routeProvider
        .when("/", {
            templateUrl: "templates/home.html",
            controller: "HomeController"
        }).when("/about", {
            templateUrl: "templates/about.html",
            controller: "AboutController"
        }).when("/prices", {
            templateUrl: "templates/prices.html"
        }).when("/contact", {
            templateUrl: "templates/contact.html"
        })

});

app.controller("MainController", ["$scope", function ($scope) {



}]);