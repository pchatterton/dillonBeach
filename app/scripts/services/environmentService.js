'use strict';

angular.module('peteBeachHouse')
	.service('environmentService', function($window) {	
		return {
			getEnv: function() {
				return $window.env;
			}
		}
})