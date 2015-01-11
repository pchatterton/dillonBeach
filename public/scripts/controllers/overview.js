angular.module('peteBeachHouse')
	.controller('overviewController', function($scope) {
		$scope.showDetails = false;

		$scope.showDetails_btn = function(bol) {
			$scope.showDetails = bol;
		}
	});