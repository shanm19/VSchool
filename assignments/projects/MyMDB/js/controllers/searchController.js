var app = angular.module("MainApp");

app.controller("SearchController", ["$scope", "SearchService", function($scope, SearchService){

    $scope.movie = SearchService.movie;

}]);