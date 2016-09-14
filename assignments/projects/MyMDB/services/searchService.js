var app = angular.module("MainApp");
//&apikey=f5d09d23
app.service("SearchService", function ($http) {
    
    //OMDB search
    this.search = function(query){
        if(query.match(/^tt/)){
            return $http.get("http://www.omdbapi.com/?i=" + query + "&apikey=f5d09d23").then(function(response){
                //console.log(response.data);
                return response.data;
            })
        }else{
            return $http.get("http://www.omdbapi.com/?t=" + encodeURI(query) + "&apikey=f5d09d23" + "&tomatoes=true").then(function(response){
                //console.log(response.data);
                return response.data;
            })
        }
        
    }

});