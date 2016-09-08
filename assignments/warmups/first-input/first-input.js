function firstRepeat(str) {

    var letters = {};

    // adds key to letters if it doesn't exist, otherwise it increments
    for (var i = 0; i < str.length; i++) {
        (letters.hasOwnProperty(str[i])) ? letters[str[i]]++ : letters[str[i]] = 1;
    }

    // finds first letter in letters that is less than 1
    for (var letter in letters) {
        if (letters[letter] === 1) {
            return letter;
        }
    }

}

console.log(firstRepeat("ggggggggxkljfvlsjkfg"));