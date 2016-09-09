var app = angular.module("MainApp");

app.service("HttpService", function ($http) {

    this.data = [];

    this.getList = function () {
        return $http.get("http://mean.codingcamp.us:6543/hitlist.json").then(function (response) {
            return response.data;
        });
    }

});