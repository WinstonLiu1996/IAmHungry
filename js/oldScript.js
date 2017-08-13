/**
 * Created by jianjunliu on 2017-08-05.
 */


//assignment2 code

var restaurantArray = [
    {
        name: "Titos",
        type: "Ethnic",
        address: "122 Walter Hardwick Ave 305 Vancouver",
        website: "http://www.titosrestaurant.ca/"
    },
    {
        name: "Hank's Dairy Bar",
        type: "Fast food",
        address: "3308 Ash St Vancouver",
        website: "http://www.hanksdairybar.com/"
    },
    {
        name: "D'Wine Restaurant",
        type: "Fast casual",
        address: "2485 Broadway W 414 Vancouver",
        website: "https://www.facebook.com/dwinecollection/"
    },
    {
        name: "Basil Doc's Pizza Florida",
        type: "Casual dining",
        address: "275 28th Ave E Vancouver",
        website: "http://www.hanksdairybar.com/"
    },
    {
        name: "Samuel's Memorable",
        type: "Fine dining",
        address: "106 588 45th Ave W Vancouver",
        website: "http://www.hanksdairybar.com/"
    },
    {
        name: "Louie's Chophouse",
        type: "Barbecue",
        address: "563 Union St. Vancouver",
        website: "http://www.hanksdairybar.com/"
    }
];

$('#showall-btn').click(function () {

    console.log("click");

    $('#restaurant-container').html('');

    for (var i = 0; i < restaurantArray.length; i++) {

        var restaurantDiv = $('<div>').addClass('restaurant');

        var restaurantName = $('<a>');
        restaurantName.text(restaurantArray[i].name);
        restaurantName.attr('href', restaurantArray[i].website);
        //Todo Notice1: Website url写法1 Can only use <a> to insert; use h2 will not work
        restaurantName.attr('id', restaurantArray[i].name);

        restaurantName.appendTo(restaurantDiv);
        $('<h3>').text(restaurantArray[i].type).appendTo(restaurantDiv);
        $('<h3>').text(restaurantArray[i].address).appendTo(restaurantDiv);

        $(restaurantDiv).appendTo($('#restaurant-container'));
    }
});


/* *Todo Notice2: Website url写法2 Dynamically insert website; $('.restaurant') is newly created in DOM; cannot
 * .on on it. Can only .on on $('.restaurant-container')
 *
 */
$('#restaurant-container').on('click', '.restaurant', function () {

    //Todo Notice3: ConsoleLog on DOM directly

    console.log($(this)); //console log this object with class type: restaurant

    console.log($(this).find('h3')); //find nearest 'h3' within this object

})



