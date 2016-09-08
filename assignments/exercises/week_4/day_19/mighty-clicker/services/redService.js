var app = angular.module("MainApp");

app.service("RedService", function(){
    
    var _this = this;
    
    _this.redScore = 100;
    
    _this.redAdd = function(){ 
        _this.redScore++;
    }
    
    _this.redSubtract = function(){
        if(_this.redScore === 0){
            _this.redScore = 100;
        }else{
            _this.redScore--;
        }
    }
    
});