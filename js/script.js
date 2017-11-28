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

  $("#contactus-nav-item").click(function() {
    $('html,body').animate({
      scrollTop: $("#contactus").offset().top},
      'slow');
  });


  $('nav a').click(function() {
    document.querySelectorAll('nav a').forEach(function(e) {
      e.classList.remove('active');
    })
    this.classList.add('active');
  })


// ---------- Arrows click effects below ----------

  $('.fa-angle-up').click(function() {
    var previousSection = $(this).closest('section').prev();
    $('html,body').animate({
      scrollTop: $(previousSection).offset().top},
    'slow');
  })

  $('.fa-angle-down').click(function() {
    var nextSection = $(this).closest('section').next();
    $('html,body').animate({
      scrollTop: $(nextSection).offset().top},
    'slow');
  })

// ---------- Gallery modal effects below ----------

  function closeModalOutside() {
    $('.modal').css('display', 'none');
    $('body').off('click');
  }

  $(".gallery-image").click(function(e) {
    e.stopPropagation();
    $('.modal').css('display', 'block');
    $('body').click(closeModalOutside);
    $('.modal-image-display').html($(this).html());
  });

  $('.close').click(function() {
    $('.modal').css('display', 'none');
  })


})
