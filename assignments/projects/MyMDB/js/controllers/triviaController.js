var app = angular.module("MainApp");

app.controller("TriviaController", ["$scope", "SearchService", function($scope, SearchService){
    
    $scope.display = false;
    $scope.titleGuess = "";
    
    var triviaArray = [
        "0111161",
        "0468569",
        "0108052",
        "0167260",
        "0137523",
        "0080684",
        "0133093",
        "0114369",
        "0816692",
        "0088763"
    ];
    
    var randomMovie = function(){
        var rand = Math.floor(Math.random() * 10);
        return triviaArray[rand];
    }
    
    $scope.play = function(){
        SearchService.search("tt" + randomMovie()).then(function(response){
            $scope.movie = response;
            $scope.display = true;
            console.log(response);
        })
    }
    
    $scope.count = 0;
    $scope.nextHint = function(){
        $scope.count++;
    }
    
}]);