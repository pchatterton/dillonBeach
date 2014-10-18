angular.module('peteBeachHouse')
	.controller('LocationController', function($scope, MapData) {
		$scope.nearbyAreas = MapData.getListData();

		$scope.addPlaceMap = function(place) {
			if(!(place.id === 1)) {
				if(place.show) {
					place.show = false;
					MapData.updateShow(place, false)
				} else {
					place.show = true;
					MapData.updateShow(place, true)
				}

				$scope.$broadcast('refreshMap', place);
			}
		}
	});