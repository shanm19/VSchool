var app = angular.module("MainApp");

app.service("FixerService", ["$http", function($http){
    
    var _this = this;
    _this.exchangeRate = null;
    
    this.getExchange = function(){

        return $http.get("http://api.fixer.io/latest").then(function(response){
            angular.copy(response.data.rates.USD, _this.exchangeRate);
            return response.data.rates.USD;
        })

    }
    
}]);