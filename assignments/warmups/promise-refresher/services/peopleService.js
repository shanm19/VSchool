angular.module("MainApp")
.service("PeopleService", ["$http", function($http){
    
    this.getPeople = function(){
        
        return $http.get("http://swapi.co/api/people").then(function(response, e){

            return response.data;

        }).catch(function(e){
            alert("You Schruted it!");
        })
        
    }
    
    
}]);