var uuid = require('uuid');

var todos = [
    
    {
        "name": "Walk the Dog",
        "description": "Dog needs some walkin'",
        "imageUrl": "",
        "completed": false,
        "_id": uuid.v4()
    },
    {
        "name": "Walk the Cat",
        "description": "Cat needs some walkin'",
        "imageUrl": "",
        "completed": false,
        "_id": uuid.v4()
    },
    {
        "name": "Walk the Cow",
        "description": "Cow needs some walkin'",
        "imageUrl": "",
        "completed": false,
        "_id": uuid.v4()
    },
    
];

module.exports = todos;