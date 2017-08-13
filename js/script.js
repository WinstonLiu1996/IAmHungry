/**
 * Created by jianjunliu on 2017-08-12.
 */

var APIURL = 'https://imhungry-app.herokuapp.com';

//******************* Part1 REST GET: *******************
var findUser = function (user, query) {
    return !query || new RegExp(query, "i").test(user) ? query : false;
};

$('#search-btn').click(function () {

    console.log("click");

    $('#restaurant-container').html('');

    var query = $('#search').val();

    $.get(APIURL + '/restaurant', function (response) {

        for (i = 0; i < response.length; i++) {

            if (findUser(response[i].name, query)) {

                var restaurantDiv = $('<div>').addClass('restaurant');

                var restaurantName = $('<a>');
                restaurantName.text(response[i].name);
                restaurantName.attr('href', response[i].image);
                restaurantName.attr('id', response[i].name);

                restaurantName.appendTo(restaurantDiv);
                $('<h3>').text(response[i].type).appendTo(restaurantDiv);
                $('<h3>').text(response[i].address).appendTo(restaurantDiv);

                $(restaurantDiv).appendTo($('#restaurant-container'));
            }
        }
    });

});


//******************* Part2 REST POST: *******************
$('#add_form').submit(function (e) {

    e.preventDefault();

    var newRestaurant = {
        name: $('#add_name').val(),
        type: $('#add_type').val(),
        address: $('#add_address').val(),
        image: $('#add_img').val()
    };

    $.ajax({
        type: 'POST',
        url: APIURL + '/restaurant',
        data: JSON.stringify(newRestaurant),
        contentType: 'application/json',
        success: function(data) {

            //jquery reset form: $(form).trigger('reset')
            $('#add_form').trigger('reset');

            alert('成功添加您的餐馆!')
        }
    });

});