var names = ["Anna", "Bill", "Charlay", "Dexter", "Emily", "Frank", "George", "Hal", "Isaac", "Jill"];


setTimeout(function(){ for(var i = 0; i < names.length; i++){
    attemptCall(names[i], dontCall, call, sendText);
} }, 2000);
callJennifer();


function attemptCall(currentName, dontCallback, doCallback, textCallback){ //last three parameters are the callbacks
    
    var aCount = 0; 
    var temp = currentName.toLowerCase(); 
    
    for(var i = 0; i < temp.length; i++){
        if(temp[i] == 'a') aCount++; //adds how many times 'a' was found in the respective name
    }
    
    if(aCount > 1) {
        textCallback(currentName); //more than 1 'a'? You get a text!
    } else if(currentName.length % 2 != 0){ 
        dontCallback(currentName); //odd number of letters in your name? You don't get a call!
    } else {
        doCallback(currentName); //even number of letters with less than 1 'a' in their name DO get a call
    }
}

function call(callPerson){
    console.log("You called " + callPerson);
}
function dontCall(dontCallPerson){
    console.log("You blew off " + dontCallPerson);
}
function sendText(textedPerson){
    console.log("You sent a text to " + textedPerson);
}

function callJennifer(){
    console.log("Calling Jennifer...");
}