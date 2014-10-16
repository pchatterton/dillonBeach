angular.module('peteBeachHouse')
	.controller('dbOverview', function($scope, $timeout, images, levelMainInfo, levelSecondInfo, description, quotes) {
	
	// Declare variables and initial content
	var runTimeout;
		// Level Summary init
	$scope.levelMainSums = levelMainInfo;
	$scope.levelSecondSums = levelSecondInfo;
	$scope.levelSummaryChange = false;
		// Beach house description init
	$scope.htmlVariable = description;
	$scope.quotes = quotes;

	// Code for Level Summary
	$scope.addLevelMainSum = function() {
		$scope.levelMainSums.$add($scope.newMainLev);
		$scope.newMainLev = '';
	};

	$scope.addLevelSecSum = function() {
		$scope.levelSecondSums.$add($scope.newSecLev);
		$scope.newSecLev = '';
	};

	$scope.showChanges = function() {
		if($scope.levelSummaryChange = true){
			$timeout.cancel(runTimeout);
		}
		$scope.levelSummaryChange = true;
		runTimeout = $timeout(function() {
			$scope.levelSummaryChange = false;
		}, 1500);
	}

	// Code for Quotes
	$scope.addQuotes = function() {
		$scope.quotes.$add($scope.newQuote);
		$scope.newQuote = '';
	};


});