var uuid = require('uuid');

var bounties = [
    
    {
        firstname: "Mario",
        lastname: "Mario",
        living: true,
        amount: "$45",
        type: "Jedi",
        id: uuid.v4()
    },
    {
        firstname: "Kirby",
        lastname: "MouthBreather",
        living: true,
        amount: "$175",
        type: "Sith",
        id: uuid.v4()
    },
    {
        firstname: "Pikachu",
        lastname: "The 'Mon",
        living: true,
        amount: "$750",
        type: "Jedi",
        id: uuid.v4()
    }
    
];

module.exports = bounties;