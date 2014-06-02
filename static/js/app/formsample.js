// Forms sample code
define([
  'jquery',
  'selectize',
], function($) {
  "use strict";

  var REGEX_EMAIL = '([a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@' +
    '(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)';

  return {
    init: function() {
      $('#inputSelect').selectize();
      $('#inputMultiple').selectize();

      $('#input-tags').selectize({
        delimiter: ',',
        persist: false,
        create: function(input) {
          return {
            value: input,
            text: input,
          }
        }
      });

      $('#select-to').selectize({
        persist: false,
        maxItems: null,
        valueField: 'email',
        labelField: 'name',
        searchField: ['name', 'email'],
        options: [
          {email: 'brian@thirdroute.com', name: 'Brian Reavis'},
          {email: 'nikola@tesla.com', name: 'Nikola Tesla'},
          {email: 'someone@gmail.com'},
        ],
        render: {
          item: function(item, escape) {
            return '<div>' + 
              (item.name ? '<span class="name">' + escape(item.name) + '</span>' : '') +
              (item.email ? '<span class="email">' + escape(item.email) + '</span>' : '') +
              '</div>';
          },
          option: function(item, escape) {
            var label = item.name || item.email;
            var caption = item.name ? item.email: null;
            return '<div>' +
              '<span class="label">' + escape(label) + '</span>' +
              (caption ? '<span class="caption">' + escape(caption) + '</span>' : '') +
              '</div>';
          }
        },
        create: function(input) {
          if ((new RegExp('^' + REGEX_EMAIL + '$', 'i')).test(input)) {
            return {email: input};
          }
          var match = input.match(new RegExp('^([^<]*)\<' + REGEX_EMAIL + '\>$', 'i'));
          if (match) {
            return {
              email: match[2],
              name: $.trim(match[1]),
            };
          }
          alert('Invalid email address.');
          return false;
        },
      });

      $('#select-beast').selectize({
        create: true,
        sortField: 'text',
      });

      $('#select-gear').selectize({
        sortField: 'text',
      });

      $('#select-state').selectize({
        maxItems: 3,
      });

      $('#select-country').selectize();

      $('#select-repo').selectize({
        valueField: 'url',
        labelField: 'name',
        searchField: 'name',
        create: false,
        render: {
          option: function(item, escape) {
            return '<div>' +
              '<span class="title">' +
                '<span class="name"><i class="icon ' + (item.fork ? 'fork' : 'source') + '"></i>' +
                '<span class="by">' + escape(item.username) + '</span>' +
              '</span>' +
              '<span class="description">' + escape(item.description) + '</span>' +
              '<ul class="meta">' +
                (item.language ? '<li class="language">' + escape(item.language) + '</li>' : '') +
                '<li class="watcher"><span>' + escape(item.watchers) + '</span> watcher</li>' +
                '<li class="forks"><span>' + escape(item.forks) + '</span> forks</li>' +
              '</ul>' +
            '</div>';
          },
        },
        score: function(search) {
          var score = this.getScoreFunction(search);
          return function(item) {
            return score(item) * (1 + Math.min(item.watchers / 100, 1));
          };
        },
        load: function(query, callback) {
          if (!query.length) return callback();
          $.ajax({
            url: 'https://api.github.com/legacy/repos/search/' + encodeURIComponent(query),
            type: 'GET',
            error: function() {
              callback();
            },
            success: function(res) {
              callback(res.repositories.slice(0, 10));
            }
          });
        },
      });

      $('#input-tags2').selectize({
        plugins: ['restore_on_backspace'],
        delimiter: ',',
        persist: false,
        create: function(input) {
          return {
            value: input,
            text: input,
          };
        }
      });

      $('#input-tags3').selectize({
        plugins: ['remove_button'],
        delimiter: ',',
        persist: false,
        create: function(input) {
          return {
            value: input,
            text: input
          };
        }
      });

      //$('#input-draggable').selectize({
      //  plugins: ['drag_drop'],
      //  delimiter: ',',
      //  persist: false,
      //  create: function(input) {
      //    return {
      //      value: input,
      //      text: input
      //    };
      //  }
      //});

    // end init
    },
  };
});
