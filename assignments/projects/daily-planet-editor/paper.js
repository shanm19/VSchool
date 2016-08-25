/*
This code contains only syntax and code style problems. The logic of the code works,
so DO NOT change the functionality of anything in here. For example, the `while` loop
at the end has syntax problems, not logic problems. It shouldn't be an infinite loop,
but the way to fix that is not to change the structure of the while loop. 

In short, you shouldn't need to add your own statements anywhere,
just fix the existing ones.
*/


// Written by Kent, Clark

var enemies = ["Lex","Batman","Darkseid","Braniac","General Zod","Doomsday"];

//checks for kryptonite, if it's there then superman always wins
function whoWins(isThereKryptonite, enemyName) {
    
    if (!isThereKryptonite) {
        return "Superman beats " + enemyName + ", of course.";
    } else {
        return "Depends on how quick Superman can get rid of the Kryptonite. " + enemyName + " could possibly win this one.";
    }
    
}

//every other villain has kryptonite with the %
for(var i = 0; i < enemies.length; i++) {
    
    var isThereKryptonite = false;
    isThereKryptonite = i % 2;
    console.log(whoWins(isThereKryptonite, enemies[i]));
}

//randomly assigns a lois attraction 1-10;
function loisAttraction () {
    
    // 1 is not at all attracted, 10 is "super" attracted...
    var attraction = Math.floor((Math.random() * 10) + 1);
    console.log("Lois thinks Superman is a " + attraction);
    
}

loisAttraction();

var clarkKent = true;

//this loop will random assign clarkKent to become superman and then stop the loop
while (isClarkKent){
    
    console.log("I'm just a nerdy columnist");
    var boothChange = Math.random();
    
    if (boothChange >= 0.5) {
        isClarkKent = false;
        console.log("Now I'm Superman!");
    }
    
}