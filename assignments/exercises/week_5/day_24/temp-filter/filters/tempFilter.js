angular.module("MainApp")
.filter("temp", function(){
    
    return function(temperature, scaleObj){
        if(scaleObj){
            return scaleObj.fahrRatio(temperature).toFixed(2) + scaleObj.symbol + "°";
        }else{
            return temperature + "F°";
        }
        
    }
    
//    return function(num, conversion){
//        
//        if(conversion == 'F'){
//            num = num * 1.8 + 32;
//            num = num.toFixed(0);
//            return num + "°F";
//        }else if(conversion == 'C'){
//            num = (num - 32) / 1.8;
//            num = num.toFixed(0);
//            return num + "°C";
//        }else{
//            return num;
//        }
//        
//    }
    
})