function Enemy(){
    
    this.type = typeSelector();
    this.hitPoints = hitPointsSelector(this.type);
    this.defense = this.hitPoints * 3;
    
}

//function to randomly and equally assign an enemy type
var typeSelector = function(){
    var randNum = Math.floor((Math.random() * 9) + 1);

    if(randNum >= 1 && randNum <= 3){
        return "Ancient Dragon";
    }else if(randNum > 3 && randNum <= 6){
        return "Prowler";
    }else{
        return "Mighty Grunt";
    }

}

//function to randomly assign hit points based on individual type
var hitPointsSelector = function(type){
    if(type === "Ancient Dragon"){
        return 80 + Math.floor(Math.random() * 20);
    }else if(type === "Prowler"){
        return 50 + Math.floor(Math.random() * 19);
    }else{
        return 20 + Math.floor(Math.random() * 19);
    }
}

var addElem = document.getElementById("add-monster");

addElem.addEventListener("click", hundred);

var appendElem = document.getElementById("append-monster");
var creatureNum = 0;
var creatureArr = [];

//only creates one new enemy at a time, pushes it to an object array
function generator(){
    var tempCreature = new Enemy();
    creatureNum++;
    
    //append the entire column to #append-monster
    appendElem.innerHTML += 
        '<hr><div class="row text-center">' + 
            '<div class="col-sm-3 table-content">' +
                '<h4>' + creatureNum + '</h4>' +
            '</div>' + 
            '<div class="col-sm-3 table-content">' + 
                '<h4>' + tempCreature.type + '</h4>' + 
            '</div>' +
            '<div class="col-sm-3 table-content">' +
                '<h4>' + tempCreature.hitPoints + '</h4>' +
            '</div>' +
            '<div class="col-sm-3 table-content">' +
                '<h4>' + tempCreature.defense + '</h4>' +
            '</div>' + 
        '</div>';
    creatureArr.push(tempCreature);
}

//helper function to write out 100 different monsters
function hundred(){
    for(var i = 0; i < 100; i++){
        generator();
    }
}
