"use strict"

// Scoped Variables
// var, let, const

// var todayIsMonday = true;

// let text = "Text is equal to TEXT";

// if (todayIsMonday) {
//     let text = "This is a new variable";
//     console.log("text ", text);
// }

// console.log("text ", text);

// for (let i = 0; i < 10; i++) {
//     let i = "This is a new var";
//     console.log("i ", i);
// }

// const myName = "Shan";
// const pi = 3.1415;

// const person = {
//     name: "Shan",
//     age: 26,
//     favColor: "blue"
// };

// person.age = 33;

// console.log("person ", person);


// Arrow Functions
// Arrow functions take the "this" context of its parent
// also returns something

// var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// var doubleNums = nums.map(num => num * 2);
// console.log("doubleNums ", doubleNums);

// var filteredNums = nums.map(num => num % 2 === 0);
// console.log("filteredNums ", filteredNums);

// // Template Strings

// console.log(`Hello, my name is ${person.name} and I am ${person.age} years old.`);
// `http://www.myapi.com/${person.name}`;

// class Person {
//     constructor(name, age, favColor) {
//         this.name = name;
//         this.age = age;
//         this.favColor = favColor;
//     }
//     speak() {
//         console.log(`Hi, my name is ${this.name}, and I am ${this.age} years old.`);
//     }
//     incrementAge() {
//         this.age++;
//     }
// }

// var shan = new Person("Shan", 26, "red");
// shan.incrementAge();
// shan.speak();

// class Adult extends Person {
//     constructor(name, age, favColor, occupation) {
//         super(name, age, favColor);
//         this.occupation = occupation;
//     }
//     speak() {
//         console.log(`Hi, my name is ${this.name}, and I am ${this.age} years old. I am a ${this.occupation}.`);
//     }
// }

// var shan = new Adult("Shan", 26, "blue", "web developer");
// shan.incrementAge();
// shan.speak();


// set 
// var myClass = new Set();
// console.log("mySet ", myClass);
// myClass.add("Shan");
// myClass.add("Heather");
// myClass.add("Laylee");
// myClass.delete("Laylee");
// console.log("myClass ", myClass);
// console.log("myClass size ", myClass.size);
// console.log("myClass has ", myClass.has("Laylee"));


// myClass.add({
//     name: "Shan",
//     developer: true
// });
// myClass.add({
//     name: "Heather",
//     developer: true
// });
// myClass.add({
//     name: "Laylee",
//     developer: false
// });
// myClass.delete("Laylee");
// console.log("myClass ", myClass);
// console.log("myClass size ", myClass.size);

// for (let student of myClass) {
//     console.log(`This is a student: ${student.name}`);
// }

// map
// var countries = new Map();
// countries.set("France", "Paris");
// countries.set("USA", "Washington DC");
// countries.set("Germany", "Berlin");
// console.log("Germany ", countries.get("Germany"));
// console.log("France ", countries.get("France"));
// console.log("USA ", countries.get("USA"));
// countries.delete("Germany");
// console.log("countries ", countries);


// var people = [{
//     name: 'Shan',
//     developer: true
// }, {
//     name: 'Shan',
//     developer: false
// }, {
//     name: 'Heather',
//     developer: false
// }, {
//     name: 'Laylee',
//     developer: false
// }];

// var shan = people.find(item => item.name === "Shan");
// console.log("shan ", shan);


// Exports / Imports

// export default function add(x, y){
//     return x + y;
// }

// import add from "./otherfile";
// console.log(add(1, 2));

// var shan = {
//     name: 'Shan',
//     developer: true,
//     favColor: 'blue',
//     favNum: 19
// };

// var {
//     name,
//     favColor,
//     favNum
// } = shan;

// console.log("name ", name);
// console.log("favColor ", favColor);
// console.log("favNum ", favNum);


