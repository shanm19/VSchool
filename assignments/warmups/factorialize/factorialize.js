function factorialize(num) {
    return (num === 1) ? num : num *= factorialize(num - 1);
}

console.log(factorialize(5));