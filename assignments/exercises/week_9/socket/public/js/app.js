var app = angular.module("app", []);

app.service("io", function () {

    var socket = null;

    this.connect = function () {
        socket = io("/");
    };

    this.listen = function (callback) {
        socket.on("outgoing", function (data) {
            callback(data);
        });
    };

    this.sendMessage = function (message) {
        socket.emit("incoming", message);
    };

});

app.controller("ctrl", ["$scope", "io", function ($scope, io) {

    $scope.chats = [];
    $scope.test = "hello";

    $scope.addMessage = function (data) {
        $scope.chats.push(data);
        $scope.$apply();
    };

    $scope.initConnection = function () {
        console.log("Starting connection");
        io.connect();
        io.listen($scope.addMessage);
    };

    $scope.sendMessage = function () {
        io.sendMessage($scope.message);
    };

}]);