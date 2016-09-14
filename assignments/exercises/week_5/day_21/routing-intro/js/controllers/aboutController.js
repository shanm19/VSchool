var app = angular.module("RoutingApp");

app.controller("AboutController", ["$scope", function($scope){
    $scope.title = "This is the about Bob page";
    $scope.about = "This is a paragraph in the about page";
    
}]);