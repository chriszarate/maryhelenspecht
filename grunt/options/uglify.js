/* grunt-contrib-uglify */

module.exports = {
  dist: {
    options: {
      wrap: true
    },
    files: {
      'public/build/app.min.js': [
        'public/build/app.js'
      ]
    }
  }
};
