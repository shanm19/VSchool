//return all unique nums in 2nd arr, that are not in 1st

function uniqueNums(arr1, arr2) {
    var newArr = [];

    arr2.forEach(function (num) {
        if (arr1.indexOf(num) < 0) {
            newArr.push(num);
        }
    });

    return newArr;

}

var arr1 = [1, 2, 3, 4];
var arr2 = [1, 2, 3, 4, 5];

console.log(uniqueNums(arr1, arr2));