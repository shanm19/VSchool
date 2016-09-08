var app = angular.module("MainApp");

app.service("BlueService", function(){
    
    var _this = this;
    
    _this.blueScore = 100;
    
    _this.blueAdd = function(){ 
        _this.blueScore++;
    }
    
    _this.blueSubtract = function(){
        if(_this.blueScore === 0){
            _this.blueScore = 100;
        }else{
            _this.blueScore--;
        }
    }
    
});