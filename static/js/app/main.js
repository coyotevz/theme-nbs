// Main script file
require([
  'jquery',
  'underscore',
], function($, _) {
  "use strict";

  var version = $().jquery;
  console.log('jQuery version:', version);

  var resize = function() {
    var topbar_h = $('.top-bar').outerHeight();
    var window_h = $(window).height();
    $('.scroll-wrapper').css('max-height', window_h - topbar_h);
  };

  var scrolled = function(evt) {
    if ($(this).scrollTop() > 0) {
      $('.top-bar').addClass('fixed');
    } else {
      $('.top-bar').removeClass('fixed');
    }
  };

  $(window).on('resize', _.debounce(resize, 150));
  $(window).on('focus', resize);

  $(document).ready(function() {
    $('.scroll-wrapper').on('scroll', scrolled);
    resize();
  });
});
