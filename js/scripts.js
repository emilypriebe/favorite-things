$(document).ready(function() {
$("#blanks").submit(function(event) {
  var foodInput = $("input#food").val();
  var restuarantInput = $("input#restaurant").val();
  var animalInput = $("input#animal").val();
  var countryInput = $("input#country").val();
  var movieInput = $("input#movie").val();
  var tvshowInput = $("input#tvshow").val();

  $(".food").text(foodInput);
  $(".restuarant").text(restaurantInput);
  $(".animal").text(animalInput);
  $(".country").text(countryInput);
  $(".movie").text(movieInput);
  $(".tvshow").text(tvshowInput);

  $("#list").show();

  event.preventDefault();
  });
});
