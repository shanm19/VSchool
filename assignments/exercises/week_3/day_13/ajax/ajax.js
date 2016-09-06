$(document).ready(function () {

    var url = "http://mean.codingcamp.us/shan/todo";

    $("#post").click(function () {

        if ($('#titleInput').val()) {

            var object = {
                title: $('#titleInput').val(), // this one is the only thing that is actually required
                description: $('#descriptionInput').val(),
                price: $('#priceInput').val(),
                imgUrl: $('#urlInput').val(),
                completed: false

            };

            //adds the new object to the API
            $.post(url, object,
                function (data, status) {
                    alert("Data: " + data + "\nStatus: " + status);
                });
            //clean out the input fields
            $('#titleInput').val('');
            $('#descriptionInput').val('');
            $('#priceInput').val('');
            $('imgUrl').val('');

        } else {
            //require at least a title before posting
            alert("You at least need a title!");
        }


    });

    //retrieves the data from the API
    $("#get").click(function () {
        $.get(url, function (response) {
            print(response);
        });
    });

    function print(data) {
        //if there is an img attached to the object it will attach it in a separate column
        for (var i = 0; i < data.length; i++) {
            if (data[i].imgUrl) {
                //&emsp; tab
                $('.getAdd').append('<hr><div class="row"><div class="col-xs-8 newItem"><input id="item" type="checkbox" value="">&emsp;<label>' + data[i].title + '</label></div><div class="col-xs-4"><img class="img-responsive" src="' + data[i].imgUrl + '"></div></div>');
            } else {
                $('.getAdd').append('<hr><div class="row"><div class="col-xs-12 newItem"><input id="item" type="checkbox" value="">&emsp;<label>' + data[i].title + '</label></div></div>');
            }

        }
    }

    //this will strike out and remove it on the checkbox click
    $('.getAdd').on("click", "input", function () {
        if ($(this).is(':checked')) {
            $(this).next().css('textDecoration', 'line-through');
        } else {
            $(this).next().css('textDecoration', 'none');
        }
    });

});