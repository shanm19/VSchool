function firstRepeat(str) {

    var letters = {};

    for (var i = 0; i < str.length; i++) {
        if (!letters.hasOwnProperty(str[i])) {
            letters[str[i]] = 1;
        } else {
            letters[str[i]]++;
        }
    }

    for (var letter in letters) {
        if (letters[letter] === 1) {
            return letter;
        }
    }

}

console.log(firstRepeat("ggggggggxkljfvlsjkfg"));