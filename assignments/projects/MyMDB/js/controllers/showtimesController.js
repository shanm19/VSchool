var app = angular.module("MainApp");

app.controller("ShowtimesController", ["$scope", "ShowtimeService", function($scope, ShowtimeService){
    
    $scope.zip;
    $scope.results;
    
    $scope.findShowtimes = function(){
        if($scope.zip > 10000 && $scope.zip < 100000){
            ShowtimeService.findShowtimes($scope.zip).then(function(response){
                $scope.results = response;
            })
        }
    }
    
    
}]);