var goomba_killed = 0;
var bomb_killed = 0;
var cheep_killed = 0;

var goomba_subtotal = 0;
var bomb_subtotal = 0;
var cheep_subtotal = 0;

var total_baddies = 0;
var total_cost = 0;


function addGoomba(){
    ++goomba_killed;
    ++total_baddies;
    
    goomba_subtotal += 5;
    total_cost += 5;
    
    document.getElementById("goomba_caught").innerHTML = "Total caught: " + goomba_killed;
    document.getElementById("goomba_subcost").innerHTML = "Total subcost: " + goomba_subtotal;
    
    document.getElementById("caught_display").innerHTML = total_baddies + " baddies";
    document.getElementById("cost_display").innerHTML = total_cost + " coins";
}

function addBomb(){
    ++bomb_killed;
    ++total_baddies;
    
    bomb_subtotal += 7;
    total_cost += 7;
    
    document.getElementById("bomb_caught").innerHTML = "Total caught: " + bomb_killed;
    document.getElementById("bomb_subcost").innerHTML = "Total subcost: " + bomb_subtotal;
    
    document.getElementById("caught_display").innerHTML = total_baddies + " baddies";
    document.getElementById("cost_display").innerHTML = total_cost + " coins";
}

function addCheep(){
    ++cheep_killed;
    ++total_baddies;
    
    cheep_subtotal += 11;
    total_cost += 11;
    
    document.getElementById("cheep_caught").innerHTML = "Total caught: " + cheep_killed;
    document.getElementById("cheep_subcost").innerHTML = "Total subcost: " + cheep_subtotal;
    
    document.getElementById("caught_display").innerHTML = total_baddies + " baddies";
    document.getElementById("cost_display").innerHTML = total_cost + " coins";
}