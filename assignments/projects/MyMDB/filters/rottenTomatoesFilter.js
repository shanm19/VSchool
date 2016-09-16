var app = angular.module("MainApp");

app.filter("rotTom", function(){
    
    return function(num){
        
        return (!isNaN(num)) ? num + "%" : num;
        
    }
    
})