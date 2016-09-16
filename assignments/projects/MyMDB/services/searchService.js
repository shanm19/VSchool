var app = angular.module("MainApp");
//&apikey=f5d09d23
app.service("SearchService", function ($http) {
    
    this.searchInput = "";
    var _this = this;
    _this.movie = {};
    
    var getImage = function(q){
        //http://img.omdbapi.com/?i=tt2294629&apikey=f5d09d23
        console.log(q);
        return $http.get("http://img.omdbapi.com/?i=tt" + q + "&apikey=f5d09d23")
            .then(function(response){
            console.log(response.data);
            return response.data;

        })
    }
    
    //OMDb search
    this.search = function(query){
        if(query.match(/^tt/)){
            return $http.get("http://www.omdbapi.com/?i=" + query + "&apikey=f5d09d23")
                .then(function(response){
                console.log(response.data.Poster);
                angular.copy(response.data, _this.movie);
                //response.data.Poster = getImage(query);
                //_this.movie = response.data;
                return _this.movie;
            })
        }else{
            return $http.get("http://www.omdbapi.com/?t=" + encodeURI(query) + "&apikey=f5d09d23" + "&tomatoes=true")
                .then(function(response){
                console.log(response.data.Poster);
                angular.copy(response.data, _this.movie);
                //response.data.Poster = getImage(response.data);
                //_this.movie = response.data;
                return _this.movie;
            })
        }
    }
    
    

});