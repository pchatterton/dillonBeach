angular.module('peteBeachHouse')
	.controller('dashboardCtrl', function($scope, checkAuth, $state) {
	
	if(!checkAuth) {
		console.log('state.go')
		$state.go('login');
	} else {
		$state.go('dashboard.overview');
	}

	//OVERVIEW
	//level summary
	// $scope.levelSums = getLevelInfo;

	// $scope.addLevelSum = function() {
	// 	$scope.levelSums.$add($scope.newLevSum)
	// }

});