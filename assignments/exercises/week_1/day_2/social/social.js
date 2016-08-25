var person = { 
    
    //this is where I have my three levels of nested data
    friends: [
        {
            name: "Luke",
            age: 26,
            number: "111-1111",
            messages: [
                "Hello",
                "You there?"
            ]
        },
        {
            name: "Zach",
            age: 26,
            number: "222-2222",
            messages: []
        },
        {
            name: "Eric",
            age: 27,
            number: "333-3333",
            messages: []
        },
        {
            name: "Shawn",
            age: 27,
            number: "444-4444",
            messages: [
                "Changed my number",
                "I'll call you tomorrow"
            ]
        },
        {
            name: "Tucker",
            age: 25,
            number: "555-5555",
            messages: [
                "I moved to Washington, come visit",
                "I'm afraid of tall people"
            ]
        }
        
    ],
    
    interests: [
        {
            sports: []
        },
        {
            instruments: [
                "trombone",
                "trumpet",
                "piano",
                "guitar"
            ]
        },
        {
            hobbies: [
                "running",
                "ceramics",
                "reading"
            ]
        }
    ],
    
    tv_shows_watched: [
        {
            comedy: [
                "The Office",
                "Parks and Recreation",
                "New Girl"
            ]
        },
        {
            drama: [
                "Breaking Bad",
                "Better Call Saul",
                "The Walking Dead"
            ]
        }
    ],
    
    //method pulls comedies watched and displays them as a string
    display_tv_shows_watched:function(){
        var shows_concatanated = "";
        for(var i = 0; i < this.tv_shows_watched[0].comedy.length; i++){
            shows_concatanated += this.tv_shows_watched[0].comedy[i];
            if(i != this.tv_shows_watched[0].comedy.length - 1) shows_concatanated += ", ";
        }
        console.log(shows_concatanated);
    }
    
}

person.display_tv_shows_watched();