function Enemy(){
    
    var type = typeSelector();
    var hitPoints = hitPointsSelector(type);
    var defense = hitPoints * 3;
    
    Object.defineProperty(this, "type", { 
        get: function() { 
            return "Creature: " + type;       
        },        
        set: function(newName) {            
            type = newName;        
        },               
        configurable: false     
    });
    
    Object.defineProperty(this, "hitPoints", { 
        get: function() { 
            return "Hit Points: " + hitPoints;       
        },        
        set: function(newName) {            
            hitPoints = newName;        
        },               
        configurable: false     
    });
    
    Object.defineProperty(this, "defense", { 
        get: function() { 
            return "Defense: " + defense;       
        },        
        set: function(newName) {            
            defense = newName;        
        },               
        configurable: false     
    });
      
}

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

var hitPointsSelector = function(type){
    if(type === "Ancient Dragon"){
        return 80 + Math.floor(Math.random() * 20);
    }else if(type === "Prowler"){
        return 50 + Math.floor(Math.random() * 19);
    }else{
        return 20 + Math.floor(Math.random() * 19);
    }
}

var creatureArr = []

var generator = function(genNum){
    for(var i = 0; i < genNum; i++){
        var tempCreature = new Enemy();
        creatureArr.push(tempCreature);
        console.log(i + 1);
        console.log(creatureArr[i].type);
        console.log(creatureArr[i].hitPoints);
        console.log(creatureArr[i].defense);
        console.log("");
    }
}

generator(100);