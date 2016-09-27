function largestPrime(num){
    
    var currLargest = 0;
    
    for(var i = 1; i < num / 2; i++){
        if(currLargest * i == num){
            return currLargest;
        }
        
        if(num % i == 0) {
            currLargest = i;
        }
    }
    
}

console.log(largestPrime(13195));
