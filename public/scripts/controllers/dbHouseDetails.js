angular.module('peteBeachHouse')
	.controller('dbHouseDetails', function($scope, $firebase, houseDetails, firebaseService) {

		$scope.houseDetails = houseDetails;

		$scope.detailsArr = [];

		$scope.addNewDetails = function() {
			$scope.houseDetails.$add({title: $scope.newHouseDetails.title}).then(function(ref) {
				var tempRef = new Firebase(ref + '/details');
				var sync = $firebase(tempRef).$asArray();
				for(var i=0; i<$scope.detailsArr.length; i++) {
					sync.$add($scope.detailsArr[i])
				}
				$scope.newHouseDetails = '';
				$scope.detailsArr = [];
			});
		};

		$scope.addDetail = function() {
			$scope.detailsArr.push({name: $scope.miniDetail})
			$scope.miniDetail = '';
		}

		$scope.addToExistDetail = function(det, val) {
			var updateDetailArr = firebaseService.updateDetailLists(det.$id);
			updateDetailArr.$add({name: val});
		}



	});