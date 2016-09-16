var app = angular.module("MainApp");

app.filter("runtime", function(){
    
    return function(dateTime){
        
        var hours = dateTime.match(/\d{2}H/);
        hours = hours[0].match(/\d{2}/);
        var minutes = dateTime.match(/\d{2}M/);
        minutes = minutes[0].match(/\d{2}/);
        return parseInt(hours) * 60 + parseInt(minutes);
        
    }
    
})