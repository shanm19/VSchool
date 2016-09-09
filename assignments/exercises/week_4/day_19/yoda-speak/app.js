var app = angular.module("MainApp", []).controller("MainController", ["$scope", "YodaService", function ($scope, YodaService) {
    
    var update = function(){
        $scope.display = YodaService.display;
        $scope.input = "";
    }
    
    update();
    
    $scope.translate = function(){
        YodaService.translate($scope.input).then(function(response){
            $scope.output = response;
            update();
        })
    }
    
}]);