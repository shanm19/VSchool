function Penguins(){
    this.party = "Penguins";
    this.population = 1000000;
}

function Communists(){
    this.party = "Communists";
    this.population = 1000000;
}

function sendNuke(party, onHit, onMiss, opposition){
    
    var hitMiss = Math.floor((Math.random() * 2) + 1);
    
    if(hitMiss == 2){
        onHit(party);
        var damage = Math.floor((Math.random() * 1000000) + 1);
        (damage >= opposition.population) ? opposition.population = 0 : opposition.population -= damage;
    }else{
        onMiss(party);
    }
    
}

function onHit(party){
    if(party.party == "Communists"){
        console.log("The Commies are celebrating a successful hit on the Penguins");
    }else{
        console.log("The Penguins nuked the shiz outta those Commies");
    }
}

function onMiss(party){
    if(party.party == "Communists"){
        console.log("Commies missed the Penguins and lament a mild setback");
    }else{
        console.log("Penguins missed the Commies because they were snacking on fish");
    }
}

function progress(penguin, communist){
    console.log("Penguins: " + penguin.population);
    console.log("Communists: " + communist.population);
}


function game(){
    
    teamPenguin = new Penguins();
    teamCommunist = new Communists();
    var teamSwitch;
    var coin = Math.floor((Math.random() * 2) + 1);
    (coin == 2) ? teamSwitch = false : teamSwitch = true;
    
    while(teamPenguin.population > 0 && teamCommunist.population > 0){ 
        
        if(teamSwitch){
            sendNuke(teamPenguin, onHit, onMiss, teamCommunist);
            teamSwitch = false;
        }else{
            sendNuke(teamCommunist, onHit, onMiss, teamPenguin);
            teamSwitch = true;
        }
        
        progress(teamPenguin, teamCommunist);
        
    }
    if(teamPenguin.population <= 0){
        console.log("Team Penguin lost and the Commies still have " + teamCommunist.population + " members");
    }else{
        console.log("Team Communist bit the bullet and the Penguins still have " + teamPenguin.population + " members");
    }
    
}

game();