var app = angular.module("MainApp", []);

app.controller("MainController", ["$scope", "PokeService", function($scope, PokeService){
    
    $scope.newPokemon = "";
    $scope.pokeList = PokeService.pokeList;
    
    $scope.addPokemon = function(){
        PokeService.addPokemon($scope.newPokemon);
        $scope.newPokemon = "";
    }
    
    $scope.removePokemon = function(pokemon){
        PokeService.removePokemon(pokemon);
    }
    
}]);

