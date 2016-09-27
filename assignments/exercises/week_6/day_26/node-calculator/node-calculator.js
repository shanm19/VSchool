var readlineSync = require("readline-sync");

var response = readlineSync.question("Would you like to: \nA: Add\nS: Subtract\nM: Multiply\nD: Divide\nE: Exponentiate\n");

function getNum1(){
    return parseInt(readlineSync.question("Enter a number: "));
}
function getNum2(){
    return parseInt(readlineSync.question("Enter a second number: "));
}

var addition = require("./modules/addition");
var subtraction = require("./modules/subtraction");
var multiplication = require("./modules/multiplication");
var Division = require("./modules/division");
var division = new Division();
var exponentiation = require("./modules/exponentiation");

switch(response){
    case 'A':
        console.log(addition(getNum1(), getNum2()));
        break;
    case 'S':
        console.log(subtraction.subtraction(getNum1(), getNum2()));
        break;
    case 'M':
        console.log(multiplication.result(getNum1(), getNum2()));
        break;
    case 'D':
        console.log(division.result(getNum1(), getNum2()));
        break;
    case 'E':
        console.log(exponentiation.exponentiation(getNum1(), getNum2()));
        break;
    default:
        console.log("Not a valid input!");
        break;
}



