function parsePokemon(){
    
    var url = "http://mean.codingcamp.us:6543/pokemon.json";
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            gen_info(xhttp.responseText);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
    
}

function gen_info(response){
    var add = "";
    var data = JSON.parse(response);
    
    for(var i = 0; i < data.objects[0].pokemon.length; i++){
        add = add + "<p>" + data.objects[0].pokemon[i].name + "</p>";
    }
    document.getElementById("insert").innerHTML = add;
    
}

var button = document.getElementById("button");
button.addEventListener("click", parsePokemon);
