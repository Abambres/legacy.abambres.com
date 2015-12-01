"use strict";

$(".close-button").click(function () {
  $(this).parent().fadeToggle('slow');
});

$("body>header").click(function () {
  $('html, body').animate({scrollTop: 0}, 'slow');
});

$(".site-nav-toggle").click(function () {
  $('html, body').animate({scrollTop: 0}, 'slow');
  $('.site-nav').slideToggle('slow');
  $(this).find("i").toggleClass("fa-navicon fa-close");
});
