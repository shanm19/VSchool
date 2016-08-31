function noTeenSum(a, b, c){
    console.log(fixTeen(a) + fixTeen(b) + fixTeen(c));
}

function fixTeen(n){  
    return (n == 13 || n == 14 || (n >= 17 && n <= 19)) ? 0 : n;
}

noTeenSum(1, 2, 3);
noTeenSum(2, 13, 1);
noTeenSum(2, 1, 14);
noTeenSum(2, 15, 14);