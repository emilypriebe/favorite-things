$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var foodInput = $("input#food").val();
    var restaurantInput = $("input#restaurant").val();
    var animalInput= $("input#animal").val();
    var countryInput = $("input#country").val();
    var movieInput = $("input#movie").val();
    var tvshowInput = $("input#tvshow").val();

    $(".food").text(foodInput);
    $(".restaurant").text(restaurantInput);
    $(".animal").text(animalInput);
    $(".country").text(countryInput);
    $(".movie").text(movieInput);
    $(".tvshow").text(tvshowInput);

    $("#list").show();

    event.preventDefault();
  });
});
