angular.module("MainApp", [])
    .controller("MainController", ["$scope", function ($scope) {

        $scope.magicians = [{
            name: "Harry Houdini",
            age: 33,
            skills: ["Escaping", "Slight of hand"]
        }, {
            name: "Happy Houdini",
            age: 33,
            skills: ["Running", "Slight of hand"]
        }, {
            name: "Henry Houdini",
            age: 33,
            skills: ["Walking", "Slight of hand"]
        }, {
            name: "Hacky Houdini",
            age: 33,
            skills: ["Disappearing", "Slight of hand"]
        }, {
            name: "Hoopi Houdini",
            age: 33,
            skills: ["Flying", "Slight of hand"]
        }, ];

    }]);