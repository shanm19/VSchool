var monkey = function(num_one, num_two){
    if(num_one > num_two) console.log(num_two + " is the lower number");
    else if(num_one < num_two) console.log(num_one + " is the lower number");
    else console.log("Both numbers are equal!");
}

monkey(1,2);
monkey(2,1);
monkey(1,1);

var monkeyTrouble = function(smile_a, smile_b){
    if((smile_a === true && smile_b === true) || smile_a === false && smile_b === false){
        console.log("We are in trouble!");
        return true;
    }
    else{
        console.log("We are fine!");
        return false;
    }
}

monkeyTrouble(true, true);
monkeyTrouble(false, false);
monkeyTrouble(true, false);
monkeyTrouble(false, true);

var greeting = function(){
    var time = new Date();
    var hours = time.getHours();
    if(hours < 12) console.log("Good morning!");
    else if(hours >= 12 && hours < 18) console.log("Good afternoon!");
    else console.log("Good night!");
}

greeting();