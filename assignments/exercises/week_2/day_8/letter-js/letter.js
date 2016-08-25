var phrase = 'slimy smelly solution';

var letterObj = new Object();

function letterFrequency(){
    
    var lower = phrase.toLowerCase(); //just in case
    
    for(var i = 0; i < phrase.length; i++){
        if(!(phrase[i] in letterObj)){ //if the key doesn't exist in the object
            letterObj[phrase[i]] = 1; //add it as a prototype and set the count to 1
        }else{
            letterObj[phrase[i]] += 1; //if the key already exists, add 1
        }   
    }
    console.log(letterObj);
}

letterFrequency();

var string = "";

for(var key in letterObj){ //all keys in letterObj can now be accessed as the variable 'key', then loops through
    string += key; //adds the keys, in order, to the string
}

console.log(string);

for(var i = phrase.length - 1; i > 0; i--){ //starts at phrase length (max # of letters), counts down to 1 (lowest #)
    for(var key in letterObj){
        if(letterObj[key] == i) console.log('"' + key + '": ' + letterObj[key]); //prints the key-value pair
    }
}