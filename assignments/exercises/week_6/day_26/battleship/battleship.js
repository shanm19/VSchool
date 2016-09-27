var Location = require("./modules/location");
var readline = require("readline-sync");

//10x10 array
var grid = new Array(10);
for (var i = 0; i < grid.length; i++) {
    grid[i] = new Array(10);
}

//generates a full board of location objects
function generate(){
    var ships = 0;
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            grid[i][j] = new Location();
            if(grid[i][j].isShip) ships++;
        }
    }
    return ships;
}

//if there are fewer than 3 ships, the board regenerates
do{
    ships = generate();
    console.log(ships + " ships to find!");
}while(ships <= 3);

//prints out the current board
var print = function () {
    for (var i = 0; i < 10; i++) {
        var string = "";
        for (var j = 0; j < 10; j++) {
            string += grid[i][j].display + ' ';
        }
        console.log(string);
    }
}

//number of current hit ships
var hitCount = 0;

//checks that the user input is within range of the board
var isValid = function(num){
    return (num < 0 || x >= 10) ? false : true;
}

while (hitCount < 3) {
    print(grid);
    var x = 0;
    var y = 0;
    
    do{
        x = parseInt(readline.question("Enter the X coordinate: "));
        if(!isValid(x)) console.log("Invalid input!");
    }while(!isValid(x));

    do{
        y = parseInt(readline.question("Enter the Y coordinate: "));
        if(!isValid(y)) console.log("Invalid input!");
    }while(!isValid(y));

    //if the user tries something twice
    if(grid[x][y].display != '~'){
        console.log("You already tried that!");
    }else{
        grid[x][y].hitDisplay(); //changes the display character for a hit or miss
    }

    //keeps track of the amount of ships hit
    if (grid[x][y].isShip) {
        hitCount++;
    }

    //win checker
    if (hitCount == 3) {
        print(grid);
        console.log("YOU WON!!");
        break;
    }
}