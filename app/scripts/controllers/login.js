angular.module('peteBeachHouse')
	.controller('loginCtrl', function($scope, $state, authService) {

	$scope.emailIssue = false;
	$scope.passwordIssue = false;

	$scope.logMeIn = function () {
        authService.logIn($scope.user, function(res) {
        	if(res.issue === 'none') {
        		$scope.$broadcast('updateLoggedIn');
				$state.go('dashboard');
        	} else {
	        	$scope.$apply(function(){
					if(err.issue === 'email') {
			    		$scope.emailIssue = true;	
			    		$scope.emailMessage = err.code;
			    	} else if(err.issue == 'password') {
			    		$scope.passwordIssue = true;
			    		$scope.passwordMessage = err.code;
			    	}
				});
        	}
    	});
    }	
});


