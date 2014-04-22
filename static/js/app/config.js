/* jshint strict:true */

var requirejs = {

  baseUrl: "/static/js/app",

  paths: {
    'jquery':                 'vendor/jquery-1.10.2',
    'underscore':             'vendor/lodash-2.4.1',
    'domReady':               'vendor/domReady',

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
  },

  shim: {
    'underscore': {
      exports: '_'
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
  },

  urlArgs: 'ver=' + (new Date()).getTime()
};
