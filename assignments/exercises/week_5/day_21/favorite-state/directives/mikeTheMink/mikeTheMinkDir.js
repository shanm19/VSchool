var app = angular.module("MainApp");

app.directive("mikeTheMink", function(){
    
    return {
        
        restrict: 'E',
        templateUrl: './directives/mikeTheMink/mikeTheMink.html'
        
    }
    
})