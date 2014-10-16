'use strict';

var app = angular.module('peteBeachHouse');

app.factory('Slider', function () {

  var sliderService = {};

  var photoData = [
        {src: 'http://res.cloudinary.com/petersen-beach-house/image/upload/v1412315787/bh_16_ianqyc.jpg', loc: 'Front of beach house', desc: 'Image 01'}
    ];

      sliderService.photoData = function() {
          return photoData;
      }

  return sliderService;

});