angular.module('peteBeachHouse')
	.controller('mainCtrl', function($scope, authService) {
	$scope.logOut = function () {
        authService.logOut();
    }
    $scope.checkAuth = function() {
    	if(authService.checkAuth()) {
    		console.log('user logged in...')
    	} else {
    		console.log('user not logged in...')
    	}
    }
});