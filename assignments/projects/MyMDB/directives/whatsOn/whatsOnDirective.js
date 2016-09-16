var app = angular.module("MainApp");

app.directive("whatsOn", function(){
    
    return {
        restrict: 'E',
        templateUrl: './directives/whatsOn/whatsOn.html',
        source: {
            show: '='
        }
    }
    
})