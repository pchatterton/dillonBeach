angular.module('peteBeachHouse')
	.controller('dashboardCtrl', function($scope, checkAuth, $state, firebaseService) {
	
	
	function getUserInfo(userid) {
		$scope.user = firebaseService.getUserInfo(userid);
	}

	if(!checkAuth) {
		$state.go('login');
	} else {
		getUserInfo(checkAuth.uid)
		$state.go('dashboard.overview');
	}



});