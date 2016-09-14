function formatMoney(num){
    
    num *= .01;
    
    return num.toLocaleString("en-US", {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    });
    
}

console.log(formatMoney(123456789));