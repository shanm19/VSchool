
var click = function(){
    var div = document.createElement("div");
    div.className = "yellow";
    document.getElementById('addSquare').appendChild(div);
    console.log("something");
}

document.getElementById('myBtn').addEventListener('click', click);

