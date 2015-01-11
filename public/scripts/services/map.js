'use strict';

var app = angular.module('peteBeachHouse');

app.factory('MapData', function () {

  var mapService = {};
  var curMapData = {}

  var allMapData = [
    {
          id: 1,
          latitude: 38.251835,
          longitude: -122.966244,
          name: 'Petersen Beach House',
          descShort: 'Located in Dillon Beach, CA with access to private beach',
          distance: '11 Tahiti Way',
          show: true,
        },
        {
          id: 2,
          latitude: 38.251778,
          longitude: -122.968138,
          name: 'Private Beach',
          descShort: 'A few minute walk from the beach house property',
          distance: '3 minutes',
          show: false
        },
        {
          id: 3,
          latitude: 38.461011,
          longitude: -122.392679,
          name: 'Napa Valley',
          descShort: 'Explore the Napa, Sonoma, and Russian River Wine Valleys',
          distance: '45 minutes',
          show: false
        },
        {
          id: 4,
          latitude: 38.333190,
          longitude: -123.049159,
          name: 'Bodega Bay',
          descShort: 'Take a drive along State Route 1 to visit shops and restaurants in this small beach town.',
          distance: '20 minutes',
          show: false
        },
        {
          id: 5,
          latitude: 38.541450,
          longitude: -123.008590,
          name: 'Armstrong Redwoods',
          descShort: 'Grove of remarkable old trees that grow to a diameter of 12-16 feet, and stand from 200-250 feet tall.',
          distance: '60 minutes',
          show: false
        },
        {
          id: 6,
          latitude: 37.773034,
          longitude: -122.423695,
          name: 'San Francisco',
          descShort: 'Visit the beautiful city and famous sites including Alcatraz and the Golden Gate Bridge.',
          distance: '80 minutes',
          show: false
        },
  ];

      mapService.getMapData = function() {
        curMapData = _.where(allMapData, {show: true})
        return curMapData;
      }

      mapService.getListData = function() {
        return allMapData;
      }

      mapService.updateShow = function(place, bol) {

        for(var i=0; i<allMapData.length; i++) {
          if(place.id === allMapData[i].id) {
            place.show = bol;
          }
        }
      }

  return mapService;

});