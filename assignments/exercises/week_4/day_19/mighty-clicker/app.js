var app = angular.module("MainApp", []);

app.controller("MainController", ["$scope", "RedService", "BlueService", function($scope, RedService, BlueService){
    
    var updateScore = function(){
        $scope.blueScore = BlueService.blueScore;
        $scope.redScore = RedService.redScore;
    }
    
    updateScore();

    $scope.blueAdd = function(){
        BlueService.blueAdd();
        RedService.redSubtract();
        updateScore();
    }
    $scope.redAdd = function(){
        RedService.redAdd();
        BlueService.blueSubtract(); 
        updateScore();
    }
    
}]);