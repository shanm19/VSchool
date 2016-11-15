function caesar(str, num) {

    var newStr = "";

    for (var i = 0; i < str.length; i++) {

        var char = str.charCodeAt(i);

        if (char >= 97 && char <= 122) {
            newStr += String.fromCharCode((char - 97 - num + 26) % 26 + 97);
        } else if (char >= 65 && char <= 90) {
            newStr += String.fromCharCode((char - 65 - num + 26) % 26 + 65);
        } else {
            newStr += String.fromCharCode(char);
        }

    }

    return newStr;

}

console.log(caesar("ABYZ.", 2));