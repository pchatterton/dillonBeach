angular.module('peteBeachHouse')
	.controller('HouseDetailsController', function($scope, firebaseService) {

		$scope.houseDetails = firebaseService.getHouseDetails();

	});