function mutation(str1, str2) {

    var wordObj1 = {};
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    for (var i = 0; i < str1.length; i++) { //convert first string to object
        if (!wordObj1.hasOwnProperty(str1[i])) { //place each unique letter in new object
            wordObj1[str1[i]] = true; 
        }
    }

    for (var i = 0; i < str2.length; i++) {
        if (!wordObj1.hasOwnProperty(str2[i])) return false; //if 1st word doesn't have a letter from 2nd word, game over
    }

    return true; //default to found

}

//function mutations(arr) {
//    for (var i = 0; i < arr[1].length; i++) {
//        if (arr[0].toLowerCase().indexOf(arr[1][i].toLowerCase()) < 0) {
//            return false;
//        }
//    }
//    return true;
//}

console.log(mutation("hello", "Hello"));
console.log(mutation("hello", "hey"));
console.log(mutation("Alien", "line"));