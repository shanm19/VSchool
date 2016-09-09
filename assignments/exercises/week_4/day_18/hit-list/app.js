var app = angular.module("MainApp", []);

app.controller("MainController", ["$scope", "HttpService", function($scope, HttpService){
    
    $scope.getList = function(){
        HttpService.getList().then(function(response){
            $scope.hitList = response;
        })
    }
    
    $scope.getList();
    
}]);