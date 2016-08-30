$( document ).ready(function(){
    
    $( "form" ).submit(function( event ) {
        
        
        
        var trashString = "";
        //break here
        if($('#trash').prop('checked')) {
            var rand = Math.floor((Math.random() * 3) + 1);
            switch(rand){
                case 1:
                    trashString = '<td title="You other players suck!" class="col-sm-4 masterTooltip">' + $('#score').val() + '</td>';
                    //alert('Bow before me, hosers.');
                    break;
                case 2:
                    trashString = '<td title="You other players suck!" class="col-sm-4 masterTooltip">' + $('#score').val() + '</td>';
                    //alert('Bow before me, hosers.');
                    break;
                case 3:
                    trashString = '<td title="WTF, these players can\'t compare." class="col-sm-4 masterTooltip">' + $('#score').val() + '</td>';
                    //alert('WTF, these players can\'t compare.');
                    break;
                default:
                    break;
                    
            }
        }else{
            trashString = '<td class="col-sm-4">' + $('#score').val() + '</td>';
        }
        
        $('.table').append('<tr class="row"><td class="col-sm-4 left">' + $('#name').val() + '</td><td class="col-sm-4">' + $('#game').val() + '</td><td class="col-sm-4">' + $('#date').val() + '</td>' + trashString + '</tr>');

        event.preventDefault();
        
        this.reset();
        
        return;
    });
    

    $('.masterTooltip').hover(function(){
        // Hover over code
        var title = $(this).attr('title');
        $(this).data('tipText', title).removeAttr('title');
        $('<p class="tooltip"></p>')
            .text(title)
            .appendTo('body')
            .fadeIn('slow');
    }, function() {
        // Hover out code
        $(this).attr('title', $(this).data('tipText'));
        $('.tooltip').remove();
    }).mousemove(function(e) {
        var mousex = e.pageX + 20; //Get X coordinates
        var mousey = e.pageY + 10; //Get Y coordinates
        $('.tooltip')
            .css({ top: mousey, left: mousex })
    });
    
    $('#pokemon').click(function(){
        var rand = Math.floor((Math.random() * 151) + 1)
        $.get("http://pokeapi.co/api/v2/pokemon/" + rand, function(data, status){
            var str = data.name;
            str = str.toLowerCase().replace(/\b[a-z]/g, function(letter){
               return letter.toUpperCase(); 
            });
            alert("A " + data.weight + " lb " + str + " appeared!");
        });
    });
    
    
});
