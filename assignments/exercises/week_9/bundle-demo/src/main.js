import '$'
from jquery;

let add = (x, y) => x + y;
let name = () => "Shan";

console.log(add(1, 2));
console.log(name());

// var Person = function(name, email){
//     this.name = name;
//     this.email = email;
// }

// var shan = {
//     name: "Shan",
//     email: "shanm19@gmail.com"
// }

class Person {
    constructor(name, health) {
        this.name = name;
        this.health = health;
    }
    greeting() {
        console.log(`Hello, ${this.name}. Your health is ${this.health}.`)
    }
}

class Enemy extends Person {
    constructor(name, health, weakness, attack) {
        super(name, health);
        this.weakness = weakness;
        this.attack = attack;
    }
    attackFunction(person) {
        console.log(`${person.name} was attacked by ${this.name} by ${this.attack} amount`);
        person.health -= person.attack;
    }
}

class Scrub extends Person {
    constructor(name, health, money) {
        super(name, health);
        this.money = money;
    }
    spendMoney(amount) {
        console.log(`${this.name} spent ${amount}.`);
    }
}

let nate = new Enemy("Nate", 100, "hookers and blow", 9001);
let anthony = new Scrub("Anthony", 5, 5);

nate.attackFunction(anthony);
anthony.spendMoney(200);