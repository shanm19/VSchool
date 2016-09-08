function camel(str){
    str = str.replace(/\W+(.)/g, function(match, p1){
        return p1.toUpperCase();
    });
    return str.replace(/(^\w)/, function(match, p1){
        return p1.toLowerCase();
    });
}

console.log(camel('Hey you-*guys'));