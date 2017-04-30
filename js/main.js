var projectList =
    [
        {
            "id": "soccer",
            "title": "Soccer Coaching",
            "description": "Franklin High School's soccer team is doing great this year thanks to your help! Your assistance coaching is for sure getting them into the championships!"
        },
        {
            "id": "vegan",
            "title": "Vegan Bakery",
            "description": "This Vegan Bakery requires a bit more funding to purchase a new oven!"
        }
    ]
var searches = []
function query(str) {
    return function (obj) {
        return obj.title.includes(str) || obj.description.includes(str);
    }
}
$(document).ready(function () {

    $("#search").keyup(function () {
        $(".card").css("display", "none");
        if ($(this).val() == "")
            $(".card").css("display", "inline-block")
        else {
            searches = projectList.filter(query($(this).val()));
            for (var item in searches) {
                $("#" + searches[item].id).css("display", "inline-block")
            }
            console.log(searches);
        }

    })
    // $(".button-collapse").sideNav();

    // $(".button-collapse").sideNav({
    //     draggable: true
    // });

    $('.parallax').parallax();

    $('.chips').material_chip();

    // $('.chips-autocomplete').material_chip({
    //     autocompleteOptions: {
    //         data: {
    //             'Sports': null,
    //             'Fashion': null,
    //             'Hospitality': null,
    //             'Arts': null,
    //             'Food': null,
    //             'Non-Profit': null,
    //             'Corporate': null
    //         },
    //         limit: Infinity,
    //         minLength: 1
    //     }
    // });
});

