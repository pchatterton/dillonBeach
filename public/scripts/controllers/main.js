angular.module('peteBeachHouse')
	.controller('mainCtrl', function($scope, authService) {
    $scope.logOut = function () {
        authService.logOut();
        checkAuth();
    }
    var checkAuth = function() {
    	if(authService.checkAuth()) {
    		$scope.loggedIn = true;
    	} else {
    		$scope.loggedIn = false;
    	}
    }

    checkAuth();

    $scope.$on('updateLoggedIn', function(event) {
        console.log('check Auth now!')
        checkAuth();
    });



});