var app = angular.module("MainApp", []);

app.controller("MainController", function($scope, $http){
    
    $http.get("http://mean.codingcamp.us:6543/hitlist.json").then(function(response){
        $scope.hitList = response.data;
    });
    
});