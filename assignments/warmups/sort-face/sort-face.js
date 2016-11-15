var _ = require('lodash');

function loSort(arr, sortAscending) {
    return (sortAscending) ? _.sortBy(arr, 'lastName') : _sortBy(arr, 'lastName').reverse();
}

function loSortAgain(arr, sortAscending) {
    return (sortAscending) ? _.orderBy(arr, ['lastName', 'firstName', 'age'], ['asc', 'asc', 'asc']) :
        _.orderBy(arr, ['lastName', 'firstName', 'age'], ['desc', 'desc', 'desc']);
}

var people = [{
    firstName: "Billy",
    lastName: "Madison",
    age: 32
}, {
    firstName: "Tommy",
    lastName: "Pickles",
    age: 32
}, {
    firstName: "Ray",
    lastName: "Charles",
    age: 32
}, {
    firstName: "Lady",
    lastName: "Gaga",
    age: 32
}, {
    firstName: "Elizabeth",
    lastName: "Taylor",
    age: 32
}, {
    firstName: "Led",
    lastName: "Zeplin",
    age: 32
}, {
    firstName: "Micael",
    lastName: "Johnson",
    age: 32
}, {
    firstName: "Keri",
    lastName: "Strug",
    age: 32
}, {
    firstName: "Chucky",
    lastName: "Finster",
    age: 32
}, {
    firstName: "Angelica",
    lastName: "Pickles",
    age: 32
}, ];

console.log(loSort(people, true));
console.log(loSort(people, false));

console.log(loSortAgain(people, true));
console.log(loSortAgain(people, false));