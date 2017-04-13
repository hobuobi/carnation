$(document).ready(function () {
    $(".button-collapse").sideNav();

    $(".button-collapse").sideNav({
        draggable: true
    });
  	$('.modal').modal();

    $('.parallax').parallax();

    $('.chips-autocomplete').material_chip({
        autocompleteOptions: {
            data: {
                'Sports': null,
                'Fashion': null,
                'Hospitality': null
            },
            limit: Infinity,
            minLength: 1
        }
    });
});

