var Location = function(){
    
    this.isShip;
    this.display = '~';
    
    if((Math.floor(Math.random() * 5) + 1) == 1){
        this.isShip = true;
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