var app = angular.module("MainApp");

app.controller("HomeController", ["$scope", "CarouselService", function($scope, CarouselService){
    
    $scope.slides = CarouselService.slides;
    $scope.myInterval = CarouselService.myInterval;
    $scope.active = CarouselService.active;
    
}]);