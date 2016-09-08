var app = angular.module("MainApp");

app.service("PokeService", function(){
    
    var _this = this;
    
    _this.pokeList = ["Pikachu", "Squirtle", "Charizard"];
    
    _this.addPokemon = function(pokemon){
        _this.pokeList.push(pokemon);
    }


    _this.removePokemon = function(pokemon){
        _this.pokeList.forEach(function(name, index){
            if(name === pokemon){
                _this.pokeList.splice(index, 1);
            }
        })
    }
    
});