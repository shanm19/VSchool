function isPalindrome(str){
    
    //string = string with all erroneous characters removed and put to lowercase
    str = str.replace(/\W+/g, '').toLowerCase();
    
    //return true if the string == string split into array by character, reversed, and joined back together into a string without spaces
    return str === str.split('').reverse().join('');
    
}

console.log(isPalindrome("Taco-cat"));