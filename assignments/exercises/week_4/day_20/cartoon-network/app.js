var app = angular.module("MainApp", []);

app.controller("MainController", ["$scope", "CartoonService", function ($scope, CartoonService) {

    //clear input fields
    var clear = function () {
        $scope.title = "";
        $scope.imgUrl = "";
        $scope.description = "";
    }

    clear();
    
    $scope.cartoonList = CartoonService.cartoonList;
    
    //match service set
    var setCartoon = function(){
        CartoonService.setCartoon($scope.title, $scope.imgUrl, $scope.description);
    }
    //match service get
    var getCartoon = function(){
        return CartoonService.getCartoon();
    }
    //add cartoon to list in the service
    $scope.addCartoon = function () {
        setCartoon();
        CartoonService.addCartoon(getCartoon());
        clear();
    }

}]);