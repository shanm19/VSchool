function oddFib(num, a = 1, b = 1, sum = 0) {
    if (a > num) return sum; //base case, return sum if 'a' exceeds given number
    return (a % 2) ? oddFib(num, b, a + b, sum + a) : oddFib(num, b, a + b, sum); // odd == 1 (truthy); increase fib numbers; only increase sum if odd is truthy
}

console.log(oddFib(100000));