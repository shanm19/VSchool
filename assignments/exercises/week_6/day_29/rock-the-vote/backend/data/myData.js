var uuid = require('uuid');

var data = [
    {
        id: uuid.v4(),
        issue: "Dark Money",
        description: "Politicians are corrupted and bought by money hidden by SuperPACs",
        upvotes: 3050,
        downvotes: 2340,
        comments: [
            "Politics are bad!",
            "Dark money should be illegal!"
        ]
    },
    {
        id: uuid.v4(),
        issue: "Bitcoin",
        description: "Digital currency that isn't regulated and is used for dark purposes",
        upvotes: 2330,
        downvotes: 520,
        comments: [
            "Bitcoin will never be regulated!",
            "It fuels the Dark Web!",
            "Anarchist money is bad-a!"
        ]
    },
    {
        id: uuid.v4(),
        issue: "Flouride in Drinking Water",
        description: "A chemical added to drinking water to allegedly improve dental health",
        upvotes: 57,
        downvotes: 107,
        comments: [
            "It's widely disputed...",
            "Flouride is a chemical, like broken glass!",
            "I'm confused about everything, and my wife filed for divorce.  Beer me karma."
        ]
    },
];

module.exports = data;