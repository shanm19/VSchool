function evenFibonacci(){
    var a = 1;
    var b = 2;
    var c = 0;
    var evenSum = 0;
    var notExceed = 4000000;
    
    while(a < notExceed){
        
        if(a % 2 == 0) evenSum += a;
        
        c = a + b;
        a = b;
        b = c;
    }
    console.log(evenSum);
}

evenFibonacci();