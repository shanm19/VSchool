// one level deep?
// 6
// 4

function fibonacci(a = 0, b = 1, c = 1) {
    while (c < 100) {
        console.log(a);
        c = a + b;
        a = b;
        b = c;
    }
}
//fibonacci();

// lodash / moment
// 'this' refers to the object being used
// map() runs a functions on each value in an array
// timers can break in a while loop
// scope refers to variable