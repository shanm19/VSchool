var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];  
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var forception = [];

for(var i = 0; i < people.length; i++){
    forception.push(people[i] + ":");
    for(var j = 0; j < alphabet.length; j++){
        forception.push(alphabet[j]);
    }
}
//console.log(forception);
console.log(forception.join(" "));
