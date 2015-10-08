$(document).ready(function() {
$("blanks").submit(function(event) {
  var food = $("input#food").val();
  var restuarant = $("input#restaurant").val();
  var animal = $("input#animal").val();
  var country = $("input#country").val();
  var movie = $("input#movie").val();
  var tvshow = $("input#tvshow").val();

  $(".food").text(food);
  $(".restuarant").text(restaurant);
  $(".animal").text(animal);
  $(".country").text(country);
  $(".movie").text(movie);
  $(".tvshow").text(tvshow);

  $("#favorite-things").show();

  event.preventDefault();
  });
});
