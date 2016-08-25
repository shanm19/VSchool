var ask = require('readline-sync');  
var input = ask.question('What phrase would you like to encrypt? ').toLowerCase();  
var shift = parseInt(ask.question('How many letters would you like to shift? '));

function caesarShift(phrase, numShift){
    
    var phraseShift = "";
    var shiftChar;
    
    for(var i = 0; i < phrase.length; i++){
        
        var temp = phrase[i].charCodeAt();
        
        if(temp >= 97 && temp <= 122 - numShift) { //checks the ascii range up to the number to be shifted
            
            shiftChar = temp + numShift; // creates the new ascii number to concatanate
            phraseShift += String.fromCharCode(shiftChar); // adds the shifted character
            
        } else if(temp >= 122 - numShift && temp <= 122){ // this will consider the characters to be wrapped
            
            shiftChar = temp - 26 + numShift; // this wraps the ascii code
            phraseShift += String.fromCharCode(shiftChar); //adds the wrapped around, shifted character
            
        } else {
            
            phraseShift += String.fromCharCode(temp); // this will push any non-alpha input as is
            
        }
    }
    console.log(phraseShift);
}

caesarShift(input, shift);