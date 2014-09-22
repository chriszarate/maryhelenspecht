/*
  Mary Helen Specht
  -----------------
  Chris Zarate, 2014
  chris.zarate.org
*/


// Load requirements.
var $ = require('jquery');

// jQuery plugins do not export anything.
require('jquery.stellar');
require('jquery.fancybox');

// Set active menu state.
$('.sections a[href="' + window.location.pathname + '"]').addClass('active');

// Run Stellar (background image parallax).
$.stellar({
  horizontalScrolling: false
});

// Run Fancybox (photo lightbox).
$('.fancybox a, .cover a').fancybox();

// Add Google map links.
var mapURLPrefix = 'https://www.google.com/maps/place/';
$('.icon-location').each(function () {
  var location = $(this);
  var locationText = location.text();
  if (locationText !== 'TBD') {
    var mapURL = mapURLPrefix + locationText.replace(/ +/g, '+');
    var mapLink = $('<a/>').attr('href', mapURL).append(location.html());
    location.html(mapLink);
  }
});
