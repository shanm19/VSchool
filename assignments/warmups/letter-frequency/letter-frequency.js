var list = ['a', 'b', 'c', 'shan', 'laylee', 'heather'];

function frequency(arr, obj = {}, high = 0, highs = {}, highArr = []) {

    arr = arr.join("");

    for (letter of arr) {
        if (!obj.hasOwnProperty(letter)) {
            obj[letter] = 1;
        } else {
            obj[letter]++;
        }
    }

    for (key in obj)
        if (high < obj[key]) high = obj[key];

    for (key in obj)
        if (obj[key] === high) highArr.push(key);

    return highArr;
}

console.log(frequency(list));