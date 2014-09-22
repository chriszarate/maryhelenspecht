/* Load package.json */

module.exports = function(grunt) {

  // Read package.json.
  var pkg = grunt.file.readJSON('package.json');

  // Compile banner.
  pkg.banner =
    '/*!\n' +
    ' * ' + pkg.name + '\n' +
    ' * ' + pkg.author.name + '\n' +
    ' * ' + pkg.author.url + '\n' +
    ' * License: ' + pkg.license + '\n' +
    ' */\n\n';

  return pkg;

};
