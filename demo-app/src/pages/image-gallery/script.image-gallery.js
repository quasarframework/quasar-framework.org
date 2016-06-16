'use strict';

var html = require('raw!./view.image-gallery.html');

module.exports = function(done) {
  quasar.current.layout.vm.$data.title = 'Image Gallery';

  done({
    template: html,
    data: {
      gallery: [
        'assets/mountains.jpg',
        'assets/parallax1.jpg',
        'assets/parallax2.jpg',
        'assets/parallax1.jpg',
        'assets/parallax2.jpg',
        'assets/mountains.jpg'
      ],
      slider: [
        'assets/mountains.jpg',
        'assets/parallax1.jpg',
        'assets/parallax2.jpg',
        'assets/parallax1.jpg',
        'assets/parallax2.jpg',
        'assets/mountains.jpg',
        'assets/mountains.jpg',
        'assets/parallax1.jpg',
        'assets/parallax2.jpg',
        'assets/parallax1.jpg',
        'assets/parallax2.jpg',
        'assets/mountains.jpg',
        'assets/parallax1.jpg',
        'assets/parallax2.jpg',
        'assets/parallax1.jpg',
        'assets/parallax2.jpg',
        'assets/mountains.jpg',
        'assets/parallax1.jpg',
        'assets/parallax2.jpg',
        'assets/parallax1.jpg',
        'assets/parallax2.jpg',
      ]
    }
  });
};
