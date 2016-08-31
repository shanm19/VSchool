$( document ).ready(function(){
    
    var counter = 0;
    
    $('#basic-addon1').click(function(){
        
        if($('#add').val().length != 0){
            $('.list').append('<div class="row"><div class="col-sm-1"><i id="remove' + ++counter + '" class="fa fa-minus"></i></div><div class="col-sm-11 item_added"><h3>' + $('#add').val() + '</h3></div></div>');

            $('#add').val('');
        }
        
    });
    
    $('.list').on("click", "i.fa-minus", function(){
        $(this).closest('.row').remove();
    });
    
    
    
});