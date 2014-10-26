'use strict';

var app = angular.module('peteBeachHouse');

app.factory('Slider', function () {

  var sliderService = {};

  var photoData = [
        {
        	id: 1,
        	src: 'http://res.cloudinary.com/petersen-beach-house/image/upload/v1414204056/beachHouse/beachHouse_1.jpg',
        	loc: '',
        	desc: ''
        },
        {
        	id: 2,
        	src: 'http://res.cloudinary.com/petersen-beach-house/image/upload/v1414204056/beachHouse/beachHouse_2.jpg',
        	loc: '',
        	desc: ''
        },
        {
        	id: 3,
        	src: 'http://res.cloudinary.com/petersen-beach-house/image/upload/v1414204056/beachHouse/beachHouse_3.jpg',
        	loc: '',
        	desc: ''
        },
        {
        	id: 4,
        	src: 'http://res.cloudinary.com/petersen-beach-house/image/upload/v1414204056/beachHouse/beachHouse_4.jpg',
        	loc: '',
        	desc: ''
        },
        {
        	id: 5,
        	src: 'http://res.cloudinary.com/petersen-beach-house/image/upload/v1414204056/beachHouse/beachHouse_5.jpg',
        	loc: '',
        	desc: ''
        },
        {
        	id: 6,
        	src: 'http://res.cloudinary.com/petersen-beach-house/image/upload/v1414204056/beachHouse/beachHouse_6.jpg',
        	loc: '',
        	desc: ''
        },
        {
        	id: 7,
        	src: 'http://res.cloudinary.com/petersen-beach-house/image/upload/v1414204056/beachHouse/beachHouse_7.jpg',
        	loc: '',
        	desc: ''
        },
        {
        	id: 8,
        	src: 'http://res.cloudinary.com/petersen-beach-house/image/upload/v1414204056/beachHouse/beachHouse_8.jpg',
        	loc: '',
        	desc: ''
        },
        {
        	id: 9,
        	src: 'http://res.cloudinary.com/petersen-beach-house/image/upload/v1414204056/beachHouse/beachHouse_9.jpg',
        	loc: '',
        	desc: ''
        },
        {
        	id: 10,
        	src: 'http://res.cloudinary.com/petersen-beach-house/image/upload/v1414204056/beachHouse/beachHouse_10.jpg',
        	loc: '',
        	desc: ''
        },
        {
        	id: 11,
        	src: 'http://res.cloudinary.com/petersen-beach-house/image/upload/v1414204056/beachHouse/beachHouse_11.jpg',
        	loc: '',
        	desc: ''
        },
        {
        	id: 12,
        	src: 'http://res.cloudinary.com/petersen-beach-house/image/upload/v1414204056/beachHouse/beachHouse_12.jpg',
        	loc: '',
        	desc: ''
        },
        {
        	id: 13,
        	src: 'http://res.cloudinary.com/petersen-beach-house/image/upload/v1414204056/beachHouse/beachHouse_13.jpg',
        	loc: '',
        	desc: ''
        },
        {
        	id: 14,
        	src: 'http://res.cloudinary.com/petersen-beach-house/image/upload/v1414204056/beachHouse/beachHouse_14.jpg',
        	loc: '',
        	desc: ''
        },
        {
        	id: 15,
        	src: 'http://res.cloudinary.com/petersen-beach-house/image/upload/v1414204056/beachHouse/beachHouse_15.jpg',
        	loc: '',
        	desc: ''
        },
        {
        	id: 16,
        	src: 'http://res.cloudinary.com/petersen-beach-house/image/upload/v1414204056/beachHouse/beachHouse_16.jpg',
        	loc: '',
        	desc: ''
        },
        {
        	id: 17,
        	src: 'http://res.cloudinary.com/petersen-beach-house/image/upload/v1414204056/beachHouse/beachHouse_17.jpg',
        	loc: '',
        	desc: ''
        },
        // {
        // 	id: 18,
        // 	src: 'http://res.cloudinary.com/petersen-beach-house/image/upload/v1414204056/beachHouse/beachHouse_18.jpg',
        // 	loc: '',
        // 	desc: ''
        // },
        {
        	id: 19,
        	src: 'http://res.cloudinary.com/petersen-beach-house/image/upload/v1414204056/beachHouse/beachHouse_19.jpg',
        	loc: '',
        	desc: ''
        },
        {
        	id: 20,
        	src: 'http://res.cloudinary.com/petersen-beach-house/image/upload/v1414204056/beachHouse/beachHouse_20.jpg',
        	loc: '',
        	desc: ''
        },
        {
        	id: 21,
        	src: 'http://res.cloudinary.com/petersen-beach-house/image/upload/v1414204056/beachHouse/beachHouse_21.jpg',
        	loc: '',
        	desc: ''
        },
        {
        	id: 22,
        	src: 'http://res.cloudinary.com/petersen-beach-house/image/upload/v1414204056/beachHouse/beachHouse_22.jpg',
        	loc: '',
        	desc: ''
        },
        {
        	id: 23,
        	src: 'http://res.cloudinary.com/petersen-beach-house/image/upload/v1414204056/beachHouse/beachHouse_23.jpg',
        	loc: '',
        	desc: ''
        },
        {
        	id: 24,
        	src: 'http://res.cloudinary.com/petersen-beach-house/image/upload/v1414204056/beachHouse/beachHouse_24.jpg',
        	loc: '',
        	desc: ''
        },
    ];


      sliderService.photoData = function() {
          return photoData;
      }

  return sliderService;

});