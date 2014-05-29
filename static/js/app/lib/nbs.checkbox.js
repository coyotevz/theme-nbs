define([
  'jquery',
], function($) {
  "use strict";

  // CHECKBOX CLASS DEFINITION
  // =========================

  var Checkbox = function(checkbox) {
    this.checkbox = checkbox;
    this.init();
  };

  Checkbox.prototype.init = function() {
    var label = this.checkbox.is('label') ? this.checkbox : this.checkbox.find('label');
    var mark = $('<div class="control-checkbox-checkmark">');
    this.control = $('<div class="control-checkbox">');
    this.input = this.checkbox.find('input[type=checkbox]');

    this.input.toggleClass('checkbox-element', true);
    this.control.append(mark);
    this.input.after(this.control);
    this.input.on('change', $.proxy(this, 'onChange'));

    if (label) {
      label.on('mouseenter mouseleave', $.proxy(this, 'onHover'));
      label.on('mousedown mouseup', $.proxy(this, 'onMouseEvent'));
    }

    this.control.on('click', $.proxy(this, 'onClick'));
    this.control.on('mouseenter mouseleave', $.proxy(this, 'onHover'));
    this.control.on('mousedown mouseup', $.proxy(this, 'onMouseEvent'));
    this.onChange(); // Check initial state
  };

  Checkbox.prototype.onClick = function(evt) {
    evt.preventDefault();
    this.input.trigger('click', evt);
  };

  Checkbox.prototype.onChange = function() {
    this.control.toggleClass('checked', this.input.prop('checked'));
  };

  Checkbox.prototype.onHover = function(evt) {
    this.control.toggleClass('hover', evt.type == "mouseenter");
    if (evt.type == "mouseleave") this.control.removeClass('active');
  };

  Checkbox.onMouseEvent = function(evt) {
    this.control.toggleClass('active', evt.type == "mousedown");
  };

  // PLUGIN DECLARATION
  // ==================

  $.fn.nbsCheckbox = function(options) {
    return this.each(function() {
      var $this = $(this);
      var data = $this.data('nbs.checkbox');

      if (!data) $this.data('nbs.checkbox', new Checkbox($this));
    });
  };

  // Activate plugin on default elements
  $(document).find('.checkbox, .checkbox-inline').nbsCheckbox();

});
