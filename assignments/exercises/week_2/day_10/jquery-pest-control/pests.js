$( document ).ready(function() {
    
    var goomba_killed = 0;
    var bomb_killed = 0;
    var cheep_killed = 0;

    var goomba_subtotal = 0;
    var bomb_subtotal = 0;
    var cheep_subtotal = 0;

    var total_baddies = 0;
    var total_cost = 0;

    //var audio = $("#coin")[0];
    var audio = $(".coin")[0];
    
    //goomba buttons
    $('#plus_goomba').click(function() {
        ++goomba_killed;
        ++total_baddies;

        goomba_subtotal += 5;
        total_cost += 5;

        $('#goomba_caught').html("Caught: " + goomba_killed);
        $('#goomba_subcost').html("Cost: " + goomba_subtotal);

        $('#caught_display').html("Total baddies: " + total_baddies);
        $('#cost_display').html("Total cost: " + total_cost);
        
        audio.play();
        
    });
    
    $('#minus_goomba').click(function() {
        --goomba_killed;
        --total_baddies;

        goomba_subtotal -= 5;
        total_cost -= 5;

        $('#goomba_caught').html("Caught: " + goomba_killed);
        $('#goomba_subcost').html("Cost: " + goomba_subtotal);

        $('#caught_display').html("Total baddies: " + total_baddies);
        $('#cost_display').html("Total cost: " + total_cost);

    });
    
    //bomb-omb buttons
    $('#plus_bomb').click(function() {
        ++bomb_killed;
        ++total_baddies;

        bomb_subtotal += 7;
        total_cost += 7;

        $('#bomb_caught').html("Caught: " + bomb_killed);
        $('#bomb_subcost').html("Cost: " + bomb_subtotal);

        $('#caught_display').html("Total baddies: " + total_baddies);
        $('#cost_display').html("Total cost: " + total_cost);
        
        audio.play();

    });
    
    $('#minus_bomb').click(function() {
        --bomb_killed;
        --total_baddies;

        bomb_subtotal -= 7;
        total_cost -= 7;

        $('#bomb_caught').html("Caught: " + bomb_killed);
        $('#bomb_subcost').html("Cost: " + bomb_subtotal);

        $('#caught_display').html("Total baddies: " + total_baddies);
        $('#cost_display').html("Total cost: " + total_cost);

    });
    
    //cheep buttons
    $('#plus_cheep').click(function() {
        ++cheep_killed;
        ++total_baddies;

        cheep_subtotal += 11;
        total_cost += 11;

        $('#cheep_caught').html("Caught: " + cheep_killed);
        $('#cheep_subcost').html("Cost: " + cheep_subtotal);

        $('#caught_display').html("Total baddies: " + total_baddies);
        $('#cost_display').html("Total cost: " + total_cost);
        
        audio.play();

    });
    
    $('#minus_cheep').click(function() {
        --cheep_killed;
        --total_baddies;

        cheep_subtotal -= 11;
        total_cost -= 11;

        $('#cheep_caught').html("Caught: " + cheep_killed);
        $('#cheep_subcost').html("Cost: " + cheep_subtotal);

        $('#caught_display').html("Total baddies: " + total_baddies);
        $('#cost_display').html("Total cost: " + total_cost);

    });
    
    $('#toggle').click(function() {
        $('body').toggleClass('activeBody');
        $('.well').toggleClass('activeWell');
        $('.pest_title').toggleClass('activeTitle');
        $('#toggle').toggleClass('activeToggle');
        $('#toggle').html($('#toggle').text() == 'Night Mode' ? 'Day Mode' : 'Night Mode');
        $('.head_section').toggleClass('activeBanner');
    })
    

});