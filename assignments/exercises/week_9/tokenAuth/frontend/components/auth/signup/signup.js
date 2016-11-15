var app = angular.module("ToDoApp.Auth", []);

app.controller("SignupController", ["$scope", "$location", "UserService", function ($scope, $location, UserService) {
    $scope.passwordMessage = "";

    $scope.signup = function (user) {
        if ($scope.user.password !== $scope.passwordRepeat) {
            $scope.passwordMessage = "Passwords do not match.";
        } else {
            UserService.signup(user).then(function (response) {
                $location.path("/login");
            }, function (err) {
                alert("There was a problem: " + err.data);
            });
        }
    };
}]);