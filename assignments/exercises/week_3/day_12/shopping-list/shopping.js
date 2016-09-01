$( document ).ready(function(){
    //localStorage.clear();
    
    var counter = 0;
    
    for(var i in localStorage){
        $('.list').append('<div class="row"><div class="col-sm-12 item_added"><i id="' + i + '" class="fa fa-minus"></i><h3 id="strike' + counter + '">' + localStorage.getItem(i) + '</h3></div></div>');
        counter = parseInt(/\d+/.exec(i)) + 1;
        console.log(counter);
    }
    
    
    //var counter = 0;
    
    $('#basic-addon1').click(function(){
        console.log(counter);
        if($('#add').val().length != 0){
            $('.list').append('<div class="row"><div class="col-sm-12 item_added"><i id="remove' + ++counter + '" class="fa fa-minus"></i><h3 id="strike' + counter + '">' + $('#add').val() + '</h3></div></div>');
            
            localStorage.setItem('remove' + counter, $('#add').val());
            //console.log(localStorage.getItem('remove1'));
            //var val = localStorage.getItem('remove' + counter);
            $('#add').val('');
        }
        
    });
    
    $('.list').on("click", "i.fa-minus", function(){
        //var temp = $(this).attr('id');
        console.log($(this).attr('id'));
        localStorage.removeItem($(this).attr('id'));
        
        $(this).closest('.row').remove();
        
    });
    
    $('.list').on("click", "h3", function(){
        //console.log($(this).attr('id'));
        $(this).css('textDecoration', 'line-through');
        //console.log($(this).attr('class'));
    });
    
    
    
});