var app = angular.module("MainApp", []).controller("MainController", ["$scope", "$http", function ($scope, $http) {
    
    $scope.display = false;
    $scope.input = "";
    var baseUrl = "https://yoda.p.mashape.com/yoda?sentence=";
    
    var config = {  
        headers: {
            'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'
        }
    };
    
    // GET Yoda translation with API key
    $scope.translate = function(){
        
        var fullUrl = baseUrl + $scope.input;
        
        $http.get(fullUrl, config).then(function(response){
            
            $scope.output = response.data;
            
            $scope.display = true;
        })
    }
    
}]);