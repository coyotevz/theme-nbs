/* jshint strict:true */

var requirejs = {

  baseUrl: "/static/js/app",

  paths: {
    'jquery':                 'vendor/jquery-1.10.2',
    'underscore':             'vendor/lodash-2.4.1',

    // Bootstap files
    'bootstrap.affix':        'vendor/bootstrap/affix',
    'bootstrap.alert':        'vendor/bootstrap/alert',
    'bootstrap.button':       'vendor/bootstrap/button',
    'bootstrap.carousel':     'vendor/bootstrap/carousel',
    'bootstrap.collapse':     'vendor/bootstrap/collapse',
    'bootstrap.dropdown':     'vendor/bootstrap/dropdown',
    'bootstrap.modal':        'vendor/bootstrap/modal',
    'bootstrap.popover':      'vendor/bootstrap/popover',
    'bootstrap.scrollspy':    'vendor/bootstrap/scrollspy',
    'bootstrap.tab':          'vendor/bootstrap/tab',
    'bootstrap.tooltip':      'vendor/bootstrap/tooltip',
    'bootstrap.transition':   'vendor/bootstrap/transition',

    // Flot
    'jquery.flot':            'vendor/flot/jquery.flot-0.8.3',
    'jquery.flot.canvas':     'vendor/flot/jquery.flot.canvas',
    'jquery.flot.categories': 'vendor/flot/jquery.flot.categories',
    'jquery.flot.crosshair':  'vendor/flot/jquery.flot.crosshair',
    'jquery.flot.errorbars':  'vendor/flot/jquery.flot.errorbars',
    'jquery.flot.fillbetween':'vendor/flot/jquery.flot.fillbetween',
    'jquery.flot.image':      'vendor/flot/jquery.flot.image',
    'jquery.flot.navigate':   'vendor/flot/jquery.flot.navigate',
    'jquery.flot.pie':        'vendor/flot/jquery.flot.pie',
    'jquery.flot.resize':     'vendor/flot/jquery.flot.resize',
    'jquery.flot.selection':  'vendor/flot/jquery.flot.selection',
    'jquery.flot.stack':      'vendor/flot/jquery.flot.stack',
    'jquery.flot.symbol':     'vendor/flot/jquery.flot.symbol',
    'jquery.flot.threshold':  'vendor/flot/jquery.flot.threshold',
    'jquery.flot.time':       'vendor/flot/jquery.flot.time',
    'jquery.colorherlpers':   'vendor/flot/jquery.colorherlpers',
    'excanvas':               'vendor/flot/excanvas',

    // Select 2
    'jquery.select2':         'vendor/select2',
    'jquery.select2.locale':  'vendor/select2_locale_es',

  },

  shim: {
    'jquery': {
      exports: '$',
    },

    'underscore': {
      exports: '_',
    },

    // bootstrap dependecy matrix
    'bootstrap.affix':      { deps: ['jquery'] },
    'bootstrap.alert':      { deps: ['jquery'] },
    'bootstrap.button':     { deps: ['jquery'] },
    'bootstrap.carousel':   { deps: ['jquery'] },
    'bootstrap.collapse':   { deps: ['jquery', 'bootstrap.transitions'] },
    'bootstrap.dropdown':   { deps: ['jquery'] },
    'bootstrap.modal':      { deps: ['jquery'] },
    'bootstrap.popover':    { deps: ['jquery', 'bootstrap.tooltip'] },
    'bootstrap.scrollspy':  { deps: ['jquery'] },
    'bootstrap.tab':        { deps: ['jquery'] },
    'bootstrap.tooltip':    { deps: ['jquery'] },
    'bootstrap.transition': { deps: ['jquery'] },

    'jquery.flot': {
      exports: '$.plot',
      deps: ['jquery'],
    },

    'jquery.flot.canvas':      { deps: ['jquery.flot'] },
    'jquery.flot.categories':  { deps: ['jquery.flot'] },
    'jquery.flot.crosshair':   { deps: ['jquery.flot'] },
    'jquery.flot.errorbars':   { deps: ['jquery.flot'] },
    'jquery.flot.fillbetween': { deps: ['jquery.flot'] },
    'jquery.flot.image':       { deps: ['jquery.flot'] },
    'jquery.flot.navigate':    { deps: ['jquery.flot'] },
    'jquery.flot.pie':         { deps: ['jquery.flot'] },
    'jquery.flot.resize':      { deps: ['jquery.flot'] },
    'jquery.flot.selection':   { deps: ['jquery.flot'] },
    'jquery.flot.stack':       { deps: ['jquery.flot'] },
    'jquery.flot.symbol':      { deps: ['jquery.flot'] },
    'jquery.flot.threshold':   { deps: ['jquery.flot'] },
    'jquery.flot.time':        { deps: ['jquery.flot'] },
    'jquery.colorhelpers':     { deps: ['jquery'] },

    'jquery.select2': {
      exports: '$.select2',
      deps: ['jquery'],
    },
    'jquery.select2.locale':    { deps: ['jquery.select2'] },
  },

  urlArgs: 'ver=' + (new Date()).getTime()
};
