function Division(){
    
    this.result = function(num1, num2){
        return (num2 == 0) ? "Can't divide by 0" : num1 / num2;
    }
    
}

module.exports = Division;