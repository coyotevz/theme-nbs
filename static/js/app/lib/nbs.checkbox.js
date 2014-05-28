define([
  'jquery',
], function($) {
  "use strict";

  $.fn.nbsCheckbox = function(options) {
    return this.each(function() {
      var $checkbox, $label, $control, $mark, onClick, onHover;

      $checkbox = $(this);
      $label = $checkbox.find('label');
      $control = $checkbox.find('.control-checkbox');
      $mark = $control.find('.control-checkmark');

      onClick = function(evt) {
        evt.preventDefault();
        console.log('click:', evt);
      };

      onHover = function(evt) {
        evt.preventDefault();
        if (evt.type == "mouseenter") {
          console.log('hover on:', evt);
        } else {
          console.log('hover off:', evt);
        }
      };

      if ($label) {
        $label.on('click', onClick);
        $label.on('mouseenter mouseleave', onHover);
      } else {
        $control.on('click', onClick);
        $control.on('mouseenter mouseleave', onHover);
      };

    });
  };

  $(document).find('.checkbox').each(function(i, c) {
    $(c).nbsCheckbox();
  });

});
