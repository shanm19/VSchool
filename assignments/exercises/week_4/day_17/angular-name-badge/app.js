var app = angular.module("MainApp", []);

app.controller("MainController", function ($scope) {

    $scope.employees = [];

    $scope.firstName = "";
    $scope.lastName = "";
    $scope.email = "";
    $scope.birthPlace = "";
    $scope.phone = "";
    $scope.food = "";
    $scope.about = "";
    
    $scope.enableSubmit = false;

    var Employee = function (firstName, lastName, email, birthPlace, phone, food, about) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.birthPlace = birthPlace;
        this.phone = phone;
        this.food = food;
        this.about = about;
    }

    $scope.submit = function () {

        if ($scope.firstName.length > 3 && $scope.lastName.length > 3 && $scope.email.length > 3 && $scope.birthPlace.length > 3 && $scope.phone.match(/^\d{10}$/) && $scope.food.length > 3 && $scope.about.length > 3) {

            //new employee instance
            var employee = new Employee($scope.firstName, $scope.lastName, $scope.email, $scope.birthPlace, $scope.phone, $scope.food, $scope.about);

            //clear inputs fields
            $scope.firstName = "";
            $scope.lastName = "";
            $scope.email = "";
            $scope.birthPlace = "";
            $scope.phone = "";
            $scope.food = "";
            $scope.about = "";

            //adds new employee to array
            $scope.employees.push(employee);
        } else {
            alert("You haven't finished!");
        }

    };

});