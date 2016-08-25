var sum = function(){ 
    console.log("Find sum function");
    
    var readlineSync = require('readline-sync');

    var num1 = readlineSync.question('Enter first number: ');
    var num2 = readlineSync.question('Enter second number: ');
    return Number(num1) + Number(num2); 
}

//console.log("The sum is: " + sum());

function findMin(){
    console.log("Find min number function");
    
    var readlineSync = require('readline-sync');

    var num1 = readlineSync.question('Enter first number: ');
    var num2 = readlineSync.question('Enter second number: ');
    var num3 = readlineSync.question('Enter third number: ');
    return Math.min(num1, num2, num3);
}

//console.log("The smallest number is: " + findMin());

var evenOdd = function(){ 
    console.log("Find even/odd function");

    var readlineSync = require('readline-sync');

    var num = readlineSync.question('Enter number: ');
    if(Number(num) % 2 === 0) return "even";
    else return "odd";
}

//console.log("The number entered is " + evenOdd());

function string_manipulation(){ 
    console.log("String manipulation function");

    var readlineSync = require('readline-sync');

    var phrase = readlineSync.question('Enter a phrase: ');
    if(phrase.length <= 20) return phrase + phrase;
    else return phrase.substring(0, (phrase.length / 2));
}

//console.log("The result is: " + string_manipulation());

function fibonacci_helper(num){
    var total;
    var a = 0, b = 1, f = 1;
    
    for(var i = num; i >= 0; i--) {
        f = a + b;
        a = b;
        b = f;
    }
    return total;
}

var fibonacci = function(){
    console.log("Fibonacci function");

    var readlineSync = require('readline-sync');

    var num = readlineSync.question('Enter a number: ');
    console.log("The first " + num + " numbers are: " + fibonacci_helper(Number(num)));
    
}

fibonacci();