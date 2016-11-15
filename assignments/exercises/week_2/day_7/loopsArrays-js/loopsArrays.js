var arr = [];

function createEvenArray(highestNum){
    for(var i = 2; i <= highestNum; i++){
        if(i % 2 === 0) arr.push(i);
    }
    return arr;
}

console.log(createEvenArray(10));

function addOdds(evensOnlyArray){
    var total_length = evensOnlyArray.length;
    evensOnlyArray.push(1);
    for(var i = 0; i < total_length; i++){
        evensOnlyArray.push(evensOnlyArray[i] + 1);
    }
    return arr;
}

console.log(addOdds(arr));

function sortNums(numberArray){
    return numberArray.sort(function(a, b){return a-b});
}

console.log(sortNums(arr));