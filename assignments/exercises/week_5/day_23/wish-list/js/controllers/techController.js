var app = angular.module("MainApp");

app.controller("TechController", ["$scope", function($scope){
    
    $scope.techList = [
        {
            name: "Samsung Galaxy 7",
            cost: "200"
        },
        {
            name: "Windows Surface Pro 4",
            cost: "1000"
        },
        {
            name: "Oculus Rift",
            cost: "500"
        }
    ]
    
}]);