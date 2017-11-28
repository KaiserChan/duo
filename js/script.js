$(document).ready(function() {

// ---------- Navbar click effects below ----------
  $("#home-nav-item").click(function() {
    $('html,body').animate({
        scrollTop: $("#home").offset().top},
        'slow');
  });

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


// ---------- Arrows click effects below ----------



// ---------- Gallery modal effects below ----------

  function closeModalOutside() {
    $('.modal').css('display', 'none');
    $('body').off('click');
  }

  $(".gallery-image").click(function(e) {
    e.stopPropagation();
    $('.modal').css('display', 'block');
    $('body').click(closeModalOutside);
    // debugger
    $('.modal-image-display').html($(this).html());
  });

  $('.close').click(function() {
    $('.modal').css('display', 'none');
  })


})
