$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").slideToggle();
    $("#walrus-hidden").slideToggle();
  });
});

// $(document).ready(function() {
//   $("#unique").click(function() {
//     $("#walrus-showing").fadeOut();
//     $("#walrus-hidden").fadeIn();
//   });
// });
