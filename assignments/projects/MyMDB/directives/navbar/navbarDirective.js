var app = angular.module("MainApp");

app.directive("navbar", function(){
    
    return {
        restrict: 'E',
        templateUrl: './directives/navbar/navbar.html'
    }
    
})