var app = angular.module("ToDoApp.Auth");

app.controller("LoginController", ["$scope", "$location", "UserService", function ($scope, $location, UserService) {

    $scope.login = function () {
        UserService.login($scope.user).then(function (response) {
            $location.path("/todo");
        }, function (err) {
            alert(err.data.message);
        });
    };
}]);