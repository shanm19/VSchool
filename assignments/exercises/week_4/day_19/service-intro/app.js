var app = angular.module("ServicesApp", []);

app.controller("MainController", ["$scope", "ClassMemberService", function($scope, ClassMemberService){
    
    //$scope.test = ClassMemberService.test;
    $scope.newStudent = "";
    $scope.classMembers = ClassMemberService.classMembers;
    $scope.addStudent = function(){
        ClassMemberService.addClassMember($scope.newStudent);
    }
    
    $scope.removeStudent = function(name){
        ClassMemberService.removeClassMember(name);
    }
    
    $scope.isVisible = false;
    
}]);