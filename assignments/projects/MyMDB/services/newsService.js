var app = angular.module("MainApp");

app.service("NewsService", ["$http", function($http){
    
//    var apiKey = "70a56e29-3d56-4621-88f9-d79314cfee99";
    var _this = this;
    this.newsArr = [];
    
    this.getNews = function(){
        //api key 70a56e29-3d56-4621-88f9-d79314cfee99
        return $http.get("https://webhose.io/search?token=70a56e29-3d56-4621-88f9-d79314cfee99&format=json&q=language%3A(english)%20thread.country%3AUS%20site%3Ascreenrant.com%20performance_score%3A%3E4")
            .then(function(response){
                //console.log(response.data);
                for(var i = 0; i < 5; i++){
                    _this.newsArr.push(response.data.posts[i]);
                }
            
                return _this.newsArr;
        })
        
    }
    
}]);