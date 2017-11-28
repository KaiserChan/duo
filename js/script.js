$(document).ready(function() {

  $("#aboutus-nav-item").click(function() {
    $('html,body').animate({
        scrollTop: $("#aboutus").offset().top},
        'slow');
  });

  $("#menu-nav-item").click(function() {
    $('html,body').animate({
        scrollTop: $("#menu").offset().top},
        'slow');
  });

  $("#gallery-nav-item").click(function() {
    $('html,body').animate({
        scrollTop: $("#gallery").offset().top},
        'slow');
  });

})
