var app = angular.module("MainApp");

app.directive("techList", function(){
    return {
        restrict: "E", 
        templateUrl: "./directives/techList/techList.html",
        scope: {
            tech: "="
        }
    }
})