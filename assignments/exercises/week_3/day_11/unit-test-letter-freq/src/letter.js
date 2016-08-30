var phrase = 'slimy smelly solution';

var letterObj = new Object();

function letterFrequency(string){
    
    var lower = string.toLowerCase(); //just in case
    
    for(var i = 0; i < string.length; i++){
        if(!(string[i] in letterObj)){ //if the key doesn't exist in the object
            letterObj[string[i]] = 1; //add it as a prototype and set the count to 1
        }else{
            letterObj[string[i]] += 1; //if the key already exists, add 1
        }   
    }
    return letterObj;
}

letterFrequency();

var string = "";

function stringifyObj(letterObj){
    var string = "";
    for(var key in letterObj){ //all keys in letterObj can now be accessed as the variable 'key', then loops through
        string += key; //adds the keys, in order, to the string
    }
    return string;
}


console.log(string);

function highToLow(letterObj){
    var answer = "";
    for(var i = phrase.length - 1; i > 0; i--){ //starts at phrase length (max # of letters), counts down to 1 (lowest #)
        for(var key in letterObj){
            if(letterObj[key] == i) answer = answer + '"' + key + '": ' + letterObj[key]/2 + "\n"; //prints the key-value pair
        }
    }
    return answer;
}

