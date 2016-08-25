var element = document.getElementById('square');

element.addEventListener("click", blue);
element.addEventListener("mouseover", red);
element.addEventListener("mouseup", yellow);
element.addEventListener("dblclick", green);

window.addEventListener("scroll", orange);

window.addEventListener("keydown", function (e) {
    
    switch(e.keyCode){
        case 66:
            blue();
            break;
        case 82:
            red();
            break;
        case 89:
            yellow();
            break;
        case 71:
            green();
            break;
        case 79:
            orange();
            break;
        default:
            break;
    }

});


function blue(){ element.style.backgroundColor = "blue"; }
function red(){ element.style.backgroundColor = "red"; }
function yellow(){ element.style.backgroundColor = "yellow"; }
function green(){ element.style.backgroundColor = "green"; }
function orange(){ element.style.backgroundColor = "orange"; }