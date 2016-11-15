var app = angular.module("app", []);

app.service("io", function () {
    var socket = null;
    this.connect = function () {
        socket = io("/");
    };
    this.listen = function (callback) {
        console.log("Called listen")
        socket.on("outgoing", function (data) {
            console.log("Received Message");
            callback(data);
        });
    };
    this.sendChat = function (message) {
        socket.emit("incoming", message);
    }
});

app.controller("ctrl", ["$scope", "io", function ($scope, io) {
    $scope.chats = [];
    $scope.addChat = function (data) {
        console.log(data);
        $scope.chats.push(data);
        $scope.$apply();
    };
    $scope.initConnection = function () {
        console.log("Starting connection");
        io.connect();
        io.listen($scope.addChat);
    };
    $scope.sendChat = function () {
        io.sendChat($scope.message);
    }
}]);