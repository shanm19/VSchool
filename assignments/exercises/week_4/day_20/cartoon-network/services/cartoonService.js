var app = angular.module("MainApp");

app.service("CartoonService", function(){
    
    var _this = this;
    
    //default data
    this.cartoonList = [
        {
           title: "Powerpuff Girls", 
            imgUrl: "https://upload.wikimedia.org/wikipedia/en/9/95/Powerpuff_girls_characters.jpg",
            description: "3 kick-a girls take on the world"
        },
        {
            title: "Dexter's Laboratory",
            imgUrl: "http://vignette2.wikia.nocookie.net/dexterslab/images/5/5b/Dexter-dexters-laboratory-13130752-445-620.jpg/revision/latest?cb=20120417000328",
            description: "Boy genius conducts experiments in his secret lab"
        },
        {
            title: "Johnny Bravo",
            imgUrl: "http://www.patrickbrinksma.nl/wp-content/uploads/2012/02/Johnny-Bravo-psd57582.png",
            description: "Stud takin' on trivial problems around him"
        }
    ];
    
    //cartoon constructor
    this.Cartoon = function(t, i, d){
        this.title = t;
        this.imgUrl = i;
        this.description = d;
    }
    
    //cartoon setter
    this.setCartoon = function(t, i, d){
        _this.cartoon = new _this.Cartoon(t, i, d);
    }
    
    //cartoon getter
    this.getCartoon = function(){
        return _this.cartoon;
    }
    
    //add cartoon to list
    this.addCartoon = function(cartoon){
        _this.cartoonList.push(cartoon);
    }
    
});