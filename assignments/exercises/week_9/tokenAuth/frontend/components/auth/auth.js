var app = angular.module("ToDoApp.Auth", []);

app.config(function ($routeProvider) {
    $routeProvider.when("/signup", {
            templateUrl: "./components/auth/signup/signup.html",
            controller: "SignupController"
        })
        .when("/login", {
            templateUrl: "./components/auth/login/login.html",
            controller: "LoginController"
        })
        .when("/logout", {
            templateUrl: "./components/auth/logout/logout.html",
            controller: "LogoutController"
        });
});

app.service("TokenService", function () {

    var userToken = "token";

    this.setToken = function (token) {
        localStorage[userToken] = token;
    };

    this.getToken = function () {
        return localStorage[userToken];
    };

    this.removeToken = function () {
        localStorage.removeItem(userToken);
    };

});

app.service("UserService", function ($http, TokenService) {
    this.user = {};

    this.signup = function (userObj) {
        return $http.post("/auth/signup", userObj).then(function (response) {
            return response.data;
        });
    };

    this.login = function (userObj) {
        return $http.post("/auth/login", userObj).then(function (response) {
            this.user = response.data.user;
            TokenService.setToken(response.data.token);
        });
    };

    this.logout = function () {
        TokenService.removeToken();
        this.user = {};
    };

    this.isAuthenticated = function () {
        return !!TokenService.getToken();
    };

});

app.factory("AuthInterceptor", function ($q, $location, TokenService) {
    return {
        request: function (config) {
            var token = TokenService.getToken();
            if (token) {
                config.headers = config.headers || {};
                config.headers.authorization = "Bearer " + token;
            }
            return config;
        },
        responseError: function (response) {
            if (response.status === 401) {
                TokenService.removeToken();
                $location.path("/");
            }
            return $q.reject(response);
        }
    };
});

app.config(function ($httpProvider) {
    $httpProvider.interceptors.push("AuthInterceptor");
});