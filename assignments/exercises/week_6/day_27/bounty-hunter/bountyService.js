angular.module("MainApp")
.service("BountyService", ["$http", function($http){
    
    var baseUrl = "http://localhost:8000";
    
    this.get = function(){
        
        return $http.get(baseUrl + "/bounty").then(function(response){
            
            return response.data;
            
        });
        
    }
    
    this.post = function(bounty){
       
        return $http.post(baseUrl + "/bounty/" + bounty).then(function(response){
            
            return response.data;
            
        })
        
    }
    
    this.put = function(from, to){
        
        return $http.put(baseUrl + "/bounty/" + from + "?firstname=" + to).then(function(response){
            
            return response.data;
            
        })
        
    }
    
    this.delete = function(bounty){
        
        return $http.delete(baseUrl + "/bounty/" + bounty).then(function(response){
            
            return response.data;
            
        })
        
    }
    
}]);