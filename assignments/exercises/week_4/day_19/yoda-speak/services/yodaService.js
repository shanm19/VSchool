var app = angular.module("MainApp");

app.service("YodaService", ["$http", function($http){
    var _this = this; 
    
    var baseUrl = "https://yoda.p.mashape.com/yoda?sentence=";

    var config = {  
        headers: {
            'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'
        }
    };

    // GET Yoda translation with API key
    this.translate = function(input){

        var fullUrl = baseUrl + input;

        return $http.get(fullUrl, config).then(function(response){
            _this.display = true;
            return response.data;
        })
    }
    
}]);