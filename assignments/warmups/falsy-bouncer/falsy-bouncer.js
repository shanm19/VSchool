function bouncer(arr) {
    return arr.filter(function (value) {
        if (value) return value;
    });
}

var arr = [1, 0, true, false, NaN, "carrot", "", 50, undefined];

console.log(bouncer(arr));