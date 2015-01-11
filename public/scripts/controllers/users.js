angular.module('peteBeachHouse')
	.controller('usersCtrl', function($scope, authService) {
	$scope.createUser = function () {
        authService.createUser($scope.newUser, function(userData){
        	console.log('userData: ' + userData)
		});
    };
});