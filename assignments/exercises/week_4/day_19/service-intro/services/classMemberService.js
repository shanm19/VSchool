var app = angular.module("ServicesApp");

app.service("ClassMemberService", function(){
    
    var self = this;
    
    self.test = "Hello from the Class Member Service";
    
    self.classMembers = ["Shan", "Heather", "Laylee"];
    
    self.addClassMember = function(classMember){
        this.classMembers.push(classMember);
    }
    
    this.removeClassMember = function(studentName){
        this.classMembers.forEach(function(name, index){
            if(name === studentName){
                self.classMembers.splice(index, 1);
            }
        })
    }
    
});