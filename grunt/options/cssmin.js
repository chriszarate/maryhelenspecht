/* grunt-contrib-cssmin */

module.exports = {
  dist: {
    files: {
      'public/build/app.min.css': [
        'public/build/app.css'
      ]
    }
  }
};
