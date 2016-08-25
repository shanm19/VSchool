function each_letter(){
    var readlineSync = require('readline-sync');

    // Wait for user's response.
    var userName = readlineSync.question('Enter a word: ');
    for(var i = 0; i < userName.length; i++){
        console.log(userName[i]);
    }
}
console.log("");
each_letter();
console.log("");

function find_letter(){
    var readlineSync = require('readline-sync');
    
    var phrase = readlineSync.question('Enter a phrase: ');
    var letter = readlineSync.question('Enter a letter to search for: ');
    
    for(var i = 0; i < phrase.length; i++){
        if(phrase[i] == letter){
            console.log("Letter was found at index: " + i);
            break;
        }
        else if(i == phrase.length - 1) console.log("Letter not found!");
    }
}

find_letter();
console.log("");

function find_number(){
    var readlineSync = require('readline-sync');
    var i = 0;
    var found = false;
    do{
        var num = readlineSync.question('Enter a number: ');
        if(num == 42){
            console.log("42 was found!");
            found = true;
            break;
        }
        i++;
    }while(num != 42 && i <= 10);
    if(!found) console.log("42 was never entered.");
}

find_number();
console.log("");

function smallest_number(){
    var arr = [];
    var readlineSync = require('readline-sync');
    
    for(var i = 0; i <= 10; i++){
        var temp = readlineSync.question("Enter a number: ");
        arr.push(temp);
    }
    var min = Math.min.apply(null, arr);
    console.log(min + " is the lowest of the numbers entered");
}

smallest_number();
console.log("");