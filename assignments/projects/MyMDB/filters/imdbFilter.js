var app = angular.module("MainApp");

app.filter("imdb", function(){
    
    return function(num){
        return (!isNaN(num)) ? num + "/10" : num;
    }
    
})