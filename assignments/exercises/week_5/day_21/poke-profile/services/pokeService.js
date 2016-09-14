var app = angular.module("MainApp");

app.service("PokeService", function ($http) {

    var baseUrl = "http://pokeapi.co/api/v1/";

    var _this = this;
    this.pokemon;

    this.getPokemon = function (pokeNumber) {
        return $http.get(baseUrl + "pokemon/" + pokeNumber)
            .then(function (response) {
                _this.pokemon = response.data;
                return $http.get("http://pokeapi.co" +  _this.pokemon.sprites[0].resource_uri)
                    .then(function (response) {
                        _this.pokemon.sprite = response.data.image;
                        return _this.pokemon;
                    })
            })
    }


});