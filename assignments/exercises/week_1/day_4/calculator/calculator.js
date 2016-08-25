function add(){
    var num1 = Number(document.getElementById("add1").value);
    var num2 = Number(document.getElementById("add2").value);
    document.getElementById("output1").innerHTML = num1 + num2;
}
function subtract(){
    var num1 = Number(document.getElementById("subtract1").value);
    var num2 = Number(document.getElementById("subtract2").value);
    document.getElementById("output2").innerHTML = num1 - num2;
}
function multiply(){
    var num1 = Number(document.getElementById("multiply1").value);
    var num2 = Number(document.getElementById("multiply2").value);
    document.getElementById("output3").innerHTML = num1 * num2;
}