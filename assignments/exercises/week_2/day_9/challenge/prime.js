// challenge:  Write a function that will take a prime number and verify it is a prime number.  note:  a prime number is a number that can only be divided by 1 and itself

function prime(primeNum){  
    for(var i = 2; i < primeNum; i++){
        if(primeNum % i === 0) return false;
    }  
    return true;  
}

for(var i = 1; i <= 10; i++){
    if(prime(i)) {
        console.log(i + ": True");
    } else{
        console.log(i + ": False")
    }
}