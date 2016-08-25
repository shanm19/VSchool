var firstNameElem = document.getElementById("firstName");
var lastNameElem = document.getElementById("lastName");
var ageElem = document.getElementById("age");

var maleElem = document.getElementById("male");
var femaleElem = document.getElementById("female");
var otherElem = document.getElementById("other");

var destinationElem = document.getElementById("destination");
var finalDestination = destinationElem.options[destinationElem.selectedIndex].value;



var vegetarianElem = document.getElementById("vegetarian");
var kosherElem = document.getElementById("kosher");
var lactoseElem = document.getElementById("lactose");

function validateForm(){
    if(firstNameElem.value == null || firstNameElem.value == ""){
        alert("First name must be filled out");
        return false;
    } else if(lastNameElem.value == null || lastNameElem.value == ""){
        alert("Last name must be filled out");
        return false;
    } else if(ageElem.value == null || ageElem.value == ""){
        alert("Age must be filled out");
        return false;
        
    } else if(!maleElem.checked && !femaleElem.checked && !otherElem.checked){
        alert("Gender must be filled out");
        return false;

    } else return true;
}

function handleLogin(){
    if(!validateForm()) { alert("Finish the form!"); }
    else {
        var restrictions = "";
        var genderElem;

        if(maleElem.checked) genderElem = maleElem.value;
        else if(femaleElem.checked) genderElem = femaleElem.value;
        else if(otherElem.check) genderElem = otherElem.value;

        if(vegetarianElem.checked) restrictions += "Vegetarian ";
        if(kosherElem.checked) restrictions += "Kosher ";
        if(lactoseElem.checked) restrictions += "Lactose ";


        alert("First Name: " + firstNameElem.value + 
             "\nLast Name: " + lastNameElem.value +
             "\nAge: " + ageElem.value +
             "\nGender: " + genderElem +
             "\nLocation: " + finalDestination +
             "\nDietary Restrictions: " + restrictions);
    }
    
}