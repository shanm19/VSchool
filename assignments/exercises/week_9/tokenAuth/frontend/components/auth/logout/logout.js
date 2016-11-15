var app = angular.module("ToDoApp.Auth");

app.controller("LogoutController", ["$scope", "$location", "UserService", function ($scope, $location, UserService) {
    $scope.logout = function () {
        UserService.logout();
        $location.path("/home");
    };


}]);