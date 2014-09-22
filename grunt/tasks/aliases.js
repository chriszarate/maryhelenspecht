/* Grunt task aliases */

module.exports = function (grunt) {

  grunt.registerTask(
    'default',
    [
      'jshint',
      'concat',
      'cssmin',
      'browserify',
      'uglify'
    ]
  );

  grunt.registerTask(
    'dev',
    [
      'default',
      'connect',
      'watch'
    ]
  );

};
