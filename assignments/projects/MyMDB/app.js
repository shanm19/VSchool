var app = angular.module("MainApp", ['ngRoute', 'ngAnimate', 'ngSanitize', 'ui.bootstrap']);

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
    .when("/trivia", {
        templateUrl: "./templates/trivia.html",
        controller: "TriviaController"
    })
    
});
//api key = f5d09d23
//example = http://img.omdbapi.com/?i=tt2294629&apikey=f5d09d23
app.controller("MainController", ["$scope", "SearchService", function($scope, SearchService){
    
    $scope.searchInput = "";
    $scope.searchDisplay = false;
    
    //query a movie function
    $scope.search = function(){
        SearchService.search($scope.searchInput).then(function(response){
            console.log(response);
            $scope.response = response;
            $scope.searchDisplay = true;
        })
    }
    //replace the ng-view on page change after a query
    $scope.displayOn = function(){
        $scope.searchDisplay = false;
    }
    
}]);