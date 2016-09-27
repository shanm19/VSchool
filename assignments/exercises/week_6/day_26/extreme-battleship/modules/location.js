var Location = function(){
    
    this.isShip;
    this.display = '~';
    this.lengthOfShip = 0;
    this.hits = 0;
    
    if((Math.floor(Math.random() * 5) + 1) == 1){
        this.isShip = true;
        this.lengthOfShip = Math.floor(Math.random() * 5) + 1;
        this.shipDirection = Math.floor(Math.random() * 3);
    }else{
        this.isShip = false;
    }
    
    this.hitDisplay = function(){
        if(this.isShip){
            this.display = 'X';
        }else{
            this.display = 'M';
        }
    }
    
}

module.exports = Location;