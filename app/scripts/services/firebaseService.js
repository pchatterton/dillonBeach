var app = angular.module('peteBeachHouse');

app.factory('firebaseService', function ($firebase, environmentService) {
	var firebaseEndpoint = environmentService.getEnv().firebase;

	return {
		// GET OVERVIEW
		getImages: function() {
			return $firebase(new Firebase(firebaseEndpoint + 'overview/images')).$asArray();	
		},
		getLevelMainInfo: function() {
			return $firebase(new Firebase(firebaseEndpoint + 'overview/levelInfo/main')).$asArray();
		},
		getLevelSecondInfo: function() {
			return $firebase(new Firebase(firebaseEndpoint + 'overview/levelInfo/second')).$asArray();
		},
		getDescription: function() {
			return $firebase(new Firebase(firebaseEndpoint + 'overview/description')).$asObject();
		},
		getQuotes: function() {
			return $firebase(new Firebase(firebaseEndpoint + 'overview/quotes')).$asArray();
		},

		// GET RATEs
		getRatesGround: function() {
			return $firebase(new Firebase(firebaseEndpoint + 'overview/rates/ground')).$asObject();	
		},
		getRatesBoth: function() {
			return $firebase(new Firebase(firebaseEndpoint + 'overview/rates/both')).$asObject();	
		},
		getRatesInfo: function() {
			return $firebase(new Firebase(firebaseEndpoint + 'overview/rates')).$asArray();
		},

		// GET HOUSE DETAILS
		getHouseDetails: function() {
			return $firebase(new Firebase(firebaseEndpoint + 'houseDetails')).$asArray();
		},
		updateDetailLists: function(detailID) {
			return $firebase(new Firebase(firebaseEndpoint + 'houseDetails/' + detailID + '/details')).$asArray();	
		}
	}
})