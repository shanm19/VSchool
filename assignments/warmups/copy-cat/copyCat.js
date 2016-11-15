var _ = require('lodash');

var Shan = {
    name: "Shan",
    age: 26,
    favColor: "blue",
    height: "68",
    weight: "170"
};

function copyCat(user) {
    return _.cloneDeep(user);
}

console.log(copyCat(Shan));

//JSON.parse(JSON.stringify(user));