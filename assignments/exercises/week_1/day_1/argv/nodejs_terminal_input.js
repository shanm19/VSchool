//base multiplier
var result = 1;

/* var starts at 2 because [0] == "node" in the terminal
and [1] == the file being opened
[2+] == everything else added to the terminal 
process.argv is the array of bash inputs */

function multiplier(){
    for (var i = 2; i < process.argv.length; i++){

        //outputs the inputs just to verify they were accepted
        console.log(process.argv[i]);
        
        result *= process.argv[i];

    }
    
    if(process.argv.length === 2) result = 0;
    
    console.log("All the numbers multiplied");
    console.log(result);
}

multiplier();