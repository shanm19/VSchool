var app = angular.module("MainApp");

app.directive("movieTitleRoll", function(){
    
    return {
        restrict: 'E',
        templateUrl: './directives/movieTitleRoll/movieTitleRoll.html',
        source: {
            movieTitle: '='
        }
    }
    
})