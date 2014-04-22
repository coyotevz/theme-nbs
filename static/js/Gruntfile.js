module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /* define tasks */
    jshint: {
      files: ['Gruntfile.js', 'app/**/*.js', '!app/vendor/**/*.js'],
      options: {
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      }
    },
  });

  grunt.loadNpmTask('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint']);
};
