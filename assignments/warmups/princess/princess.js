function Player(name){
    this.name = name;
    this.totalCoins = 0;
    this.status = "Powered Up";
    this.star = false;   
    this.gameActive = true;   
}

Player.prototype.setName = function(namePicked){
    this.namePicked = namePicked;
}

Player.prototype.gotHit = function(){
    switch(this.status){
        case "Powered Up":
            this.status = "Big";
            break;
        case "Big":
            this.status = "Small";
            break;
        case "Small":
            this.status = "Dead";
            this.gameActive = false;
            console.log("You Died!");
        default:
            break;
    }
}

Player.prototype.gotPowerup = function(){
    switch(this.status){
        case "Powered Up":
            break;
        case "Big":
            this.status = "Powered Up";
            break;
        case "Small":
            this.status = "Big";
        default:
            break;
    }
}

Player.prototype.addCoin = function(){
    this.totalCoins += 1;
}

Player.prototype.print = function(){
    console.log("Name: " + this.name + "\nCoins: " + this.totalCoins + "\nStatus: " + this.status + "\nStar: " + this.star);
}

function randomRange(){
    return Math.floor(Math.random() * 3);
}

function play(){
    
    var player = new Player("Mario");
    
    for(var i = 0; i < 10; i++){
        
        if(!player.gameActive) break;
        
        var rand = randomRange();
        
        console.log();
        
        switch(rand){
            case 0:
                console.log("Got Hit!");
                player.gotHit();
                break;
            case 1:
                console.log("Powered Up!");
                player.gotPowerup();
                break;
            case 2:
                console.log("Coin!");
                player.addCoin();
                break;
            default:
                break;
        }
        
        player.print();
    }
    
}

play();