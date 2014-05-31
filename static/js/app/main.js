// Main script file
require([
  'jquery',
  'underscore',
  'bootstrap.transition',
  'bootstrap.tab',
  'lib/nbs.checkbox',
  'lib/nbs.radio',
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

  var setActive = function() {
    $('.main-nav .menu li').removeClass('active');
    var path = window.location.pathname;
    $('.main-nav .menu a[href="' + path + '"]').parent().addClass('active');
  };

  $(document).ready(function() {
    $('.scroll-wrapper').on('scroll', scrolled);
    setActive();
    resize();
  });
});
