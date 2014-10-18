'use strict';

var app = angular.module('peteBeachHouse');

app.controller('MapCtrl', function ($scope, MapData) {

  	var prevMarker = {};

  	$scope.map = {
	    center: {
	        latitude: 38.251835,
	        longitude: -122.966244
	    },
    	zoom: 15,
    	control: {},
	};
	$scope.options = {
		scrollwheel: false,
		zoomControlOptions: {
  			style:google.maps.ZoomControlStyle.SMALL,
		},
		streetViewControl: false,
	};

	$scope.beachHouseMarkers = MapData.getMapData();

	var onMarkerClicked = function (marker) {
		if(prevMarker) {prevMarker.showWindow = false}
		prevMarker = marker;
	    marker.showWindow = true;
	    $scope.$apply();
	}; 

	var setUpMarkers = function() {
		_.each($scope.beachHouseMarkers, function (loc) {
		    loc.closeClick = function () {
		        loc.showWindow = false;
		        console.log('working')
		        $scope.$apply();
		    };
		    loc.onClicked = function () {
		        onMarkerClicked(loc);
		    };
		});
	}

	setUpMarkers();

	$scope.$on('refreshMap', function(event, place) {
		$scope.beachHouseMarkers = [];
		$scope.beachHouseMarkers = MapData.getMapData();

		setUpMarkers();

		if(place.show) {
			$scope.map.control.refresh({latitude: place.latitude,
	        	longitude: place.longitude});
		} else {
			$scope.map.control.refresh({latitude: 38.251835,
	        longitude: -122.966244});
		}

  	});

});