function greeting(person) {
    return "Hello, " + person + ".";
}
var yoman = "Antman";
console.log(greeting(yoman));
function greet(person) {
    return "Hello, " + person.name + " you are " + person.age + " years old";
}
console.log(greet({ name: "Shan", age: 13 }));
