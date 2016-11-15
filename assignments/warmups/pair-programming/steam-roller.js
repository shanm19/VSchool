var _ = require('lodash');

function steamRoll(arr) {
    return _.flattenDeep(arr);
}

console.log(steamRoll([1, 2, [3, [4]], 5]));