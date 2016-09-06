var app = angular.module("MainApp", []);

app.controller("MainController", function ($scope) {

    //array of objects holding the word type and the user input
    $scope.allInput = [
        {
            type: "Adjective",
            value: ""
        }, {
            type: "Adjective",
            value: ""
        }, {
            type: "Place",
            value: ""
        }, {
            type: "Verb",
            value: ""
        }, {
            type: "Noun",
            value: ""
        }, {
            type: "Noun",
            value: ""
        }, {
            type: "Noun",
            value: ""
        }, {
            type: "Adjective",
            value: ""
        }, {
            type: "Adjective",
            value: ""
        }, {
            type: "Noun",
            value: ""
        }
    ];

    $scope.display = false;
    index = 0;
    $scope.proxy = $scope.allInput[index];

    //binds to the submit button
    $scope.submit = function () {

        if (index < $scope.allInput.length) {

            //proxy used to bind input to an array with a local index
            $scope.allInput[index].value = $scope.proxy.value;

            index++;

            //prevents the index from falling off the array
            if (index != $scope.allInput.length) {
                //set proxy to the next index in the array
                $scope.proxy = $scope.allInput[index];
            } else {
                $scope.proxy.type = "Done!";
                $scope.display = true; //show the response with input
            }

            //clear the input field
            $scope.proxy.value = "";

        }
    }

});