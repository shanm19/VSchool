var animals = ['cat', 'dog', 'fish'];

function lengthify(arr) {
    var lengths = arr.map(function (currVal) {
        return currVal.length;
    });
    return lengths;
}

console.log(lengthify(animals));