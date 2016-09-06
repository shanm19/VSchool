var app = angular.module("MainApp");

app.service("MainService", function(){
    this.test = "Hello";
    
    this.coolCars = ["Tesla", "BMW"];
});