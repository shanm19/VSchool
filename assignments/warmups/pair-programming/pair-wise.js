function pairwise(arr, arg){
   var total = 0;
   var pairArr = arr.slice();
   for(var i = 0; i < pairArr.length; i++){
       for(var j = 1; j < pairArr.length; j++){
           if(pairArr[i] + pairArr[j] === arg){
               total += pairArr.indexOf(arr[i])  + pairArr.indexOf(arr[j]);
               pairArr[i] = pairArr[j] = NaN;
           } 
       }
   }
   return total;
}

console.log(pairwise([7, 9, 11, 13, 15], 20));