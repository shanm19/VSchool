var app = angular.module("MainApp");

app.directive("newsScroll", function(){
    
    return {
        restrict: 'E',
        templateUrl: './directives/newsScroll/newsScroll.html',
        source: {
            article: '='
        }
    }
    
})