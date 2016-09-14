var app = angular.module("MainApp");

app.controller("HomeController", ["$scope", function($scope){
    
    $scope.title = "California";
    $scope.url = "http://www.all-flags-world.com/usa-states/California/California-Flag-US-State-Metal-XL.jpg";
    
}]);