angular.module('peteBeachHouse')
	.controller('dbRates', function($scope, $timeout, ratesGround, ratesBoth) {
	
		var runTimeout;

		$scope.ratesGround = ratesGround;
		$scope.ratesBoth = ratesBoth;
		$scope.levelSummaryChange = false;
		$scope.ratesGround.$loaded().then(function() {
			$scope.ratesGround = ratesGround;
		});

		$scope.ratesBoth.$loaded().then(function() {
			$scope.ratesBoth = ratesBoth;
		});

		$scope.showChanges = function() {
			console.log('show changes')
			if($scope.levelSummaryChange = true){
				$timeout.cancel(runTimeout);
			}
			$scope.levelSummaryChange = true;
			runTimeout = $timeout(function() {
				$scope.levelSummaryChange = false;
			}, 1500);
		};

		$scope.addNewRate = function() {
			console.log($scope.newRates)
			$scope.ratesGround.$add($scope.newRates)
		};

});