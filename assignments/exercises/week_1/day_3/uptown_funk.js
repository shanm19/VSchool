var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

console.log("");

/*print out the lyrics in order from the array*/
function print_lyrics(arr){
    var whole_song = "";
    for(var i = 0; i < arr.length; i++){
        whole_song += arr[i];
        whole_song += " ";
    }
    console.log(whole_song);
}

print_lyrics(lyrics);

console.log("");

/*prints out all the lyrics in reverse*/
function print_lyrics_backwards(arr){
    var whole_song = "";
    for(var i = arr.length - 1; i >= 0; i--){
        whole_song += arr[i];
        whole_song += " ";
    }
    console.log(whole_song);
}

print_lyrics_backwards(lyrics);

console.log("");

/*skips every other word*/
function print_every_other(arr){
    var whole_song = "";
    for(var i = 0; i < arr.length; i++){
        if(i % 2 === 0) continue;
        whole_song += arr[i];
        whole_song += " ";
    }
    console.log(whole_song);
}

print_every_other(lyrics);

console.log("");

/*takes every two words and flips them*/
function reverse_every_two(arr){
    var whole_song = "";
    for(var i = 0; i < arr.length; i++){
        if(i % 2 === 0) continue;
        whole_song += arr[i];
        whole_song += " ";
        whole_song += arr[i - 1];
        whole_song += " ";
    }
    console.log(whole_song);
}

reverse_every_two(lyrics);

console.log("");