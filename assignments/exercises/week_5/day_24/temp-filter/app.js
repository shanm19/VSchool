var app = angular.module("MainApp", []);


app.controller("MainController", ["$scope", "$http", "HttpService", function ($scope, $http, HttpService) {

	$scope.scale;

	$scope.getWeatherService = function () {
		HttpService.getWeather().then(function (weatherData) {
			$scope.weatherData = weatherData;
		})
	}

	$scope.degreeScales = [
		{
			name: "Fahrenheit",
			symbol: "F",
			fahrRatio: function (fhTemp) {
				return fhTemp;
			}
		},
		{
			name: "Celsius",
			symbol: "C",
			fahrRatio: function (fhTemp) {
				return (fhTemp - 32) * 5 / 9;
			}
		},
		{
			name: "Kelvin",
			symbol: "K",
			fahrRatio: function (fhTemp) {
				return (fhTemp - 32) * 5 / 9 + 273.15;
			}
		}


  ];
	
	$scope.getWeatherService();

	$scope.temps = [10, 15, 20, 25, 30];

}]);