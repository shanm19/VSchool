function findUniques() {

    var newArr = []; //array to return
    var obj = {}; //object to hold keys with their running total

    //function to check the object for the array's value in the object
    var pushKey = function (arr) {
        for (var i = 0; i < arr.length; i++) {
            if (obj.hasOwnProperty(arr[i])) {
                obj[arr[i]]++;
            } else {
                obj[arr[i]] = 1;
            }
        }
    }

    //runs pushKey on any number of arguments
    for (var i = 0; i < arguments.length; i++) {
        pushKey(arguments[i]);
    }

    //only pushes unique keys onto the newArr
    for (var key in obj) {
        if (obj[key] == 1) newArr.push(key);
    }

    return newArr;
}

console.log(findUniques([1, 2, 5], [1, 2, 8, 9, 10], [19, 89, 'penguin', true, true, false]));