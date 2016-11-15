function greeting(person: string) {
    return `Hello, ${person}.`;
}

let yoman: string = "Antman";

console.log(greeting(yoman));

interface Person {
    name: string,
    age: number
}

function greet (person: Person): string{
    return `Hello, ${person.name} you are ${person.age} years old.`;
}

// class Hero implements Person {
//     contructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

console.log(greet({name: "Shan", age: 13}));