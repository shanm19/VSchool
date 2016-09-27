angular.module("MainApp")
.filter("euro", ["FixerService", function(FixerService){
    
    return function(num){
        //console.log(FixerService.exchangeRate);
//        num *= FixerService.exchangeRate;
//        num = num.toFixed(2);
//        console.log("€" + num);
        return "€" + num; 
//        FixerService.getExchange().then(function(response){
//            num *= response;
//            num = num.toFixed(2);
//            console.log("€" + num);
//            return "€" + num;
//        })
    }
    
    
}]);
