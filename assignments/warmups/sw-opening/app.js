var app = angular.module("MainApp", []);

app.controller("MainController", ["$scope", "$http", function ($scope, $http) {

    var baseUrl = "http://swapi.co/api/films/1/";

    $http.get(baseUrl).then(function (response) {
        $scope.test = response.data;
    })

}]);