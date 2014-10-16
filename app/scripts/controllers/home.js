angular.module('peteBeachHouse')
	.controller('homeCtrl', function($scope, $interval, levelMainInfo, levelSecondInfo, description, quotes) {
		
		// Insert Level Summary Data
		$scope.levelMainSums = levelMainInfo;
		$scope.levelSecondSums = levelSecondInfo;

		// Insert beach house description
		$scope.bhDescription = description;

		// Insert beach house quotes (move to directive eventually)
		var intervalSet, quoteNum = 0;
		$scope.bhQuotes = quotes;

		function changeQuote() {
			if(quoteNum === $scope.bhQuotes.length) {
				quoteNum = 0;
			}
			$scope.bhQuotesSel = $scope.bhQuotes[quoteNum];
			quoteNum++;
		}

		$scope.bhQuotes.$loaded().then(function(quotes) {
			changeQuote();
			intervalSet = $interval(changeQuote, 8000)
		})

	});