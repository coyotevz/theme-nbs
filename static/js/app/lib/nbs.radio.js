define([
  'jquery',
], function($) {
  "use strict";

  // RADIO GROUP CLASS DEFINITION
  // ============================

  var RadioGroup = function(element) {
    console.log('element', $(element));
  };

  $.fn.nbsRadio = function(options) {
    return this.each(function() {
      var $this = $(this);
      var data = $this.data('nbs.radio');

      if (!data) $this.data('nbs.radio', new RadioGroup(this));
    });
  };

  $(document).find('.radio, .radio-inline').nbsRadio();

  $.fn.nbsRadio_ = function(options) {
    return this.each(function() {
      var $radio, $label, $input, $control, $mark;
      var onClick, onHover, onMouseEvent, onChange, initRadioGroup;

      $input = $(this).find('input[type=radio]');

      if ($input.is('.radio-element') === false) {
        initRadioGroup($input);
      }

      $radio = $(this);


      $label = $radio.is('label') ? $radio : $radio.find('label');
      $input = $radio.find('input[type="radio"]');
      $control = $('<div class="control-radio">');
      $mark = $('<div class="control-radio-checkmark">');

      initRadioGroup = function($input) {
        var $form, $group;
        $form = $input.parents('form');
        $group = $form.find('input[type=radio][name=' + $input.prop('name') + ']');
        console.log('$group:', $group);
      };

      initRadioGroup($input);

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
      };

      onChange = function(evt) {
        console.log('$input.checked', $input.attr('id'), $input.prop('checked'));
        $control.toggleClass('control-radio-checked', $input.prop('checked'));
      };

      //$input.toggleClass('radio-element', true);
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

    });
  };

});
