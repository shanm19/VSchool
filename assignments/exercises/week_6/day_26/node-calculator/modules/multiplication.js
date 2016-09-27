function multiplication(){
    this.result = function(num1, num2){
        return num1 * num2;
    }
}

module.exports = new multiplication();