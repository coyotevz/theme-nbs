define([
  'jquery',
], function($) {
  "use strict";

  //TODO: Rudimentary implementation, optimize...

  $.fn.nbsCheckbox = function(options) {
    return this.each(function() {
      var $checkbox, $label, $input, $control, $mark;
      var onClick, onHover, onMouseEvent, onChange;

      $checkbox = $(this);
      $label = $checkbox.is('label') ? $checkbox : $checkbox.find('label');
      $input = $checkbox.find('input[type="checkbox"]');
      $control = $('<div class="control-checkbox">');
      $mark = $('<div class="control-checkbox-checkmark">');

      onClick = function(evt) {
        evt.preventDefault();
        $input.trigger('click', evt);
      };

      onMouseEvent = function(evt) {
        evt.preventDefault();
        $control.toggleClass('active', evt.type == "mousedown");
      };

      onHover = function(evt) {
        evt.preventDefault();
        $control.toggleClass('hover', evt.type == "mouseenter");
        if (evt.type == "mouseleave") $control.removeClass('active');
      };

      onChange = function() {
        $control.toggleClass('control-checkbox-checked', $input.prop('checked'));
      };

      $input.toggleClass('checkbox-element', true);
      $control.append($mark);
      $input.after($control);
      $input.on('change', onChange);

      if ($label) {
        $label.on('mouseenter mouseleave', onHover);
        $label.on('mousedown mouseup', onMouseEvent);
      }

      $control.on('click', onClick);
      $control.on('mouseenter mouseleave', onHover);
      $control.on('mousedown mouseup', onMouseEvent);
      onChange();

      // TODO: Update checkbox state on form reset

    });
  };

  $(document).find('.checkbox, .checkbox-inline').nbsCheckbox();

});
