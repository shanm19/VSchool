var app = angular.module("MainApp", ['ngRoute', 'ngAnimate', 'ngSanitize', 'ui.bootstrap']);

app.config(function($routeProvider){
    
    $routeProvider
    .when("/", {
        templateUrl: "./templates/home.html",
        controller: "HomeController"
    })
    .when("/showtimes", {
        templateUrl: "./templates/showtimes.html",
        controller: "ShowtimesController"
    })
    .when("/trivia", {
        templateUrl: "./templates/trivia.html",
        controller: "TriviaController"
    })
    .when("/search", {
        templateUrl: "./templates/search.html",
        controller: "SearchController"
    })
    
});
//api key = f5d09d23
//example = http://img.omdbapi.com/?i=tt2294629&apikey=f5d09d23
app.controller("MainController", ["$scope", "$location", "SearchService", function($scope, $location, SearchService){
    
    $scope.searchInput = "";
    
    $scope.search = function(path){
        //console.log($scope.searchInput);
        if($scope.search != ""){
            SearchService.search($scope.searchInput);
            $location.path( path );
            $scope.searchInput = "";
        }
    }
    
}]);