$(document).ready(function() {
  $('.menu-trigger').click(function(){
    $('.nav').slideToggle(350);
  });//end slideToggle

  $(window).resize(function() {
      if ( $(window).width() > 800 ) {
    $('.nav').removeAttr('style');
      }
    });//end resize
  });//end ready
