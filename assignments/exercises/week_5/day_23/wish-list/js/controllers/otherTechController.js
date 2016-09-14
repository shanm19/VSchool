var app = angular.module("MainApp");

app.controller("OtherTechController", ["$scope", function($scope){
    
    $scope.techList = [
        {
            name: "Beats Audio",
            cost: "$300"
        },
        {
            name: 'Samsung Smart TV 60" 4K LED',
            cost: "$1000"
        },
        {
            name: "Nintendo 3DS XL",
            cost: "$200"
        }
    ];
    
}]);