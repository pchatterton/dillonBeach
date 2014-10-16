angular.module('peteBeachHouse')
	.controller('dbRates', function($scope, ratesGround, ratesBoth) {
	
		$scope.ratesGround = ratesGround
		$scope.ratesBoth = ratesBoth;
		$scope.ratesGround.$loaded().then(function() {
			$scope.ratesGround = ratesGround;
		});

		$scope.ratesBoth.$loaded().then(function() {
			$scope.ratesBoth = ratesBoth;
		})



		$scope.addNewRate = function() {
			console.log($scope.newRates)
			$scope.ratesGround.$add($scope.newRates)
		};

		$scope.showChanges = function() {
			//show changes here
		}

});