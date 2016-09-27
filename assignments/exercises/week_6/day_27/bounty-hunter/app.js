angular.module("MainApp", [])
.controller("MainController", ["$scope", "BountyService", function($scope, BountyService){
    
    $scope.display = true;
    $scope.newBounty;
    
    $scope.updateFrom;
    $scope.updateTo;
    
    $scope.get = function(){
        
        BountyService.get().then(function(response){
            
            $scope.bounties = response;
            
        })
        
    }
    
    $scope.post = function(){
        
        if($scope.newBounty && $scope.newBounty.length > 3){
            BountyService.post($scope.newBounty).then(function(response){
                
                $scope.bounties = response;

            });
        }
        
    }
    
    $scope.delete = function(){
        
        if($scope.deleteBounty){
            BountyService.delete($scope.deleteBounty).then(function(response){

                $scope.bounties = response;

            });
        }
        
    }
    
    $scope.put = function(){
        
        if($scope.updateFrom && $scope.updateTo){
            
            BountyService.put($scope.updateFrom, $scope.updateTo).then(function(response){
                
                $scope.bounties = response;
                
            })
            
        }
        
    }
    
}]);