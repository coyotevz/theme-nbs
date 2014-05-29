define([
  'jquery',
], function($) {
  "use strict";

  // RADIO CLASS DEFINITION
  // ======================

  var Radio = function(input, group) {
    this.group = group;
    this.input = $(input);
    this.radio = this.input.parents('.radio, .radio-inline').first();
    this.init();
  };

  Radio.prototype.init = function() {
    var label = this.radio.is('label') ? this.radio : this.radio.find('label');
    var mark = $('<div class="control-radio-checkmark">');
    this.control = $('<div class="control-radio">');

    this.input.toggleClass('radio-element', true);
    this.control.append(mark);
    this.input.after(this.control);
    this.input.on('change', $.proxy(this, 'onChange'));

    if (label) {
      label.on('mouseenter mouseleave', $.proxy(this, 'onHover'));
      label.on('mousedown mouseup', $.proxy(this, 'onMouseEvent'));
    }

    this.control.on('mouseenter mouseleave', $.proxy(this, 'onHover'));
    this.control.on('mousedown mouseup', $.proxy(this, 'onMouseEvent'));
    this.onChange(); // Check initial state

    this.radio.data('nbs.radio', this); // Attach object to radio element
  };

  Radio.prototype.clear = function() {
    this.control.removeClass('control-radio-checked');
  };

  Radio.prototype.onChange = function() {
    if (this.input.prop('checked')) {
      this.group.clearChecked();
      this.control.addClass('control-radio-checked');
      this.group.checked = this;
    }
  };

  Radio.prototype.onHover = function(evt) {
    this.control.toggleClass('hover', evt.type == "mouseenter");
    if (evt.type == "mouseleave") this.control.removeClass('active');
  };

  Radio.prototype.onMouseEvent = function(evt) {
    this.control.toggleClass('active', evt.type == "mousedown");
  };

  // RADIO GROUP CLASS DEFINITION
  // ============================

  var RadioGroup = function(element) {
    var form, name, inputs, _this;
    this.checked = null;

    form = $(element).parents('form');
    name = $(element).find('input[type=radio]').prop('name');
    inputs = form.find('input[type=radio][name=' + name + ']');
    _this = this;
    inputs.each(function(idx, input) {
      var i = new Radio(input, _this);
    });
  };

  RadioGroup.prototype.clearChecked = function() {
    if (this.checked) this.checked.clear();
  };

  // PLUGIN DECLARATION
  // ==================

  $.fn.nbsRadio = function(options) {
    return this.each(function() {
      var $this = $(this);
      var data = $this.data('nbs.radio');

      if (!data) new RadioGroup(this);
    });
  };

  // Activate plugin on default elements
  $(document).find('.radio, .radio-inline').nbsRadio();

});
