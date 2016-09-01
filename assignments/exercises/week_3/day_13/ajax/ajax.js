$(document).ready(function () {

    var url = "http://mean.codingcamp.us/shan/todo";

    $("#post").click(function () {

        if($('#titleInput').val()){
            var object = {
                title: $('#titleInput').val(), // this one is the only thing that is actually required
                description: $('#descriptionInput').val(),
                price: $('#priceInput').val(), // Must be a number of some kind (integer or float)
                imgUrl: $('#urlInput').val(),
                completed: false // must be a boolean (true or false). If nothing provided, defaults

            };

            $.post(url, object,
                   function (data, status) {
                alert("Data: " + data + "\nStatus: " + status);
            });
        }else{
            alert("You at least need a title!");
        }
        
        
    });

    $("#get").click(function () {
        $.get(url, function (response) {
            //alert(response[0].title);
            print(response);
        });
    });

    function print(data) {

        for (var i = 0; i < data.length; i++) {
            if (data[i].imgUrl) {
                //&emsp; tab
                $('.getAdd').append('<hr><div class="row"><div class="col-xs-8 newItem"><input id="item" type="checkbox" value="">&emsp;<label>' + data[i].title + '</label></div><div class="col-xs-4"><img class="img-responsive" src="' + data[i].imgUrl + '"></div></div>');
            } else {
                $('.getAdd').append('<hr><div class="row"><div class="col-xs-12 newItem"><input id="item" type="checkbox" value="">&emsp;<label>' + data[i].title + '</label></div></div>');
            }

        }
    }
    
    $('.getAdd').on("click", "input", function(){
        if($(this).is(':checked')){
            $(this).next().css('textDecoration', 'line-through');
        }else{
            $(this).next().css('textDecoration', 'none');
        }
    });

});