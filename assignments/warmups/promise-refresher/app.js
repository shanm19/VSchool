angular.module("MainApp", [])
.controller("MainController", ["$scope", "PeopleService", function($scope, PeopleService){
    
    $scope.getPeople = function(){
        
        PeopleService.getPeople().then(function(response){
            
            $scope.people = response;
            console.log($scope.people);
            
        })
        
    }
    
    
}]);