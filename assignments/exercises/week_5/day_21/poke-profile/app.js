var app = angular.module("MainApp", []);

app.controller("MainController", ["$scope", "PokeService", function($scope, PokeService){
    
    $scope.pokeNumber;
    $scope.display = false;
    
    $scope.getPokemon = function(){
        if($scope.pokeNumber > 0 && $scope.pokeNumber < 151){
            PokeService.getPokemon($scope.pokeNumber).then(function(response){
                $scope.newPokemon = response;
                $scope.sprite = "http://pokeapi.co" + response.sprite;
                //$scope.sprite = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + $scope.pokeNumber + ".png";
                $scope.display = true;
            })
        }else{
            alert("Not a valid input!");
        }
        
    }
    
}]);