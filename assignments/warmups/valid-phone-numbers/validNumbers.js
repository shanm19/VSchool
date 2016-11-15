function validate(str) {
    return (str.match(/(1?\s?\(?[0-9]{3}\)?\s?\-?)?[0-9]{3}\s?\-?[0-9]{4}/m)) ? true : false;
}

console.log(validate("555-555-5555"));
console.log(validate("(555)555-5555"));
console.log(validate("(555) 555-5555"));
console.log(validate("555 555 5555"));
console.log(validate("5555555555"));
console.log(validate("5555555"));
console.log(validate("555-5555"));
console.log(validate("1 555 555 5555"));
console.log(validate("800-692-7753"));
console.log(validate("8oo-six427676;laskdjf"));