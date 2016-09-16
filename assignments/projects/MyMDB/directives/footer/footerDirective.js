var app = angular.module("MainApp");

app.directive("footer", function(){
    
    return {
        restrict: 'E',
        templateUrl: './directives/footer/footer.html'
    }
    
})