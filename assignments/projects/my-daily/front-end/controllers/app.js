var app = angular.module("MainApp", ["ngRoute"]);

app.config(function ($routeProvider) {

    $routeProvider
        .when("/", {
            templateUrl: "./templates/home.html",
            controller: "./controllers/homeCtrl.js"
        })

});

app.controller("MainController", ["$scope", function ($scope) {

}]);