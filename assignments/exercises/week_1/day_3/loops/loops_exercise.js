console.log("");

function each_letter(){
    var prompt = require('prompt');

      prompt.start();

      prompt.get(['word'], function (err, result) {
        if (err) { return onErr(err); }
        for(var i = 0; i < result.word.length; i++) console.log(result.word[i]);
      });
    

      function onErr(err) {
        console.log(err);
        return 1;
      }
}

//each_letter();

console.log("");

function find_letter(){
    var prompt = require('prompt');

      prompt.start();

      prompt.get(['search', 'char'], function (err, result) {
        if (err) { return onErr(err); }
        console.log('Command-line input received:');
        console.log('  String searched: ' + result.search);
        console.log('  Character input: ' + result.char);
        for(var i = 0; i < result.search.length; i++){
            if(result.search[i] == result.char) console.log("Character found at index: " + i);
        }
      });
    

      function onErr(err) {
        console.log(err);
        return 1;
      }
}

//find_letter();

//console.log("");

var num = 0;
var i = 0;

function find_number(){
    
        var prompt = require('prompt');
          prompt.start();
          prompt.get(['number'], function (err, result) {
            if (err) { return onErr(err); }
              if(result.number == 42) {
                  console.log("42 was found");
                  num = 42;
                  i++;
              }
              else {
                  console.log("42 was not found");
                  num = result.number;
                  i++;
              }
          });
          function onErr(err) {
            console.log(err);
            return 1;
          }
    
}

//find_number();


//console.log("");
Array.min = function( array ){
    return Math.min.apply( Math, array );
}; 

function smallest_number(){
    var prompt = require('prompt');
    prompt.start();
    
    prompt.get(['num1', 'num2', 'num3', 'num4', 'num5', 'num6', 'num7', 'num8', 'num9', 'num10'], function (err, result){
        if(err) { return onErr(err); }
        var arr = [];
        arr.push(result.num1);
        arr.push(result.num2);
        arr.push(result.num3);
        arr.push(result.num4);
        arr.push(result.num5);
        arr.push(result.num6);
        arr.push(result.num7);
        arr.push(result.num8);
        arr.push(result.num9);
        arr.push(result.num10);
        var min = Math.min.apply(null, arr);
        console.log(min + " is the lowest of the numbers entered");
        
    });
    
    function onErr(err) {
        console.log(err);
        return 1;
    }
}
//smallest_number();