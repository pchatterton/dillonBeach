var app = angular.module('peteBeachHouse', ['firebase', 'ui.router', 'duScroll', 'ui.utils', 'textAngular', 'google-maps']);

app.config(function ($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: '/app/views/home.html',
			controller: 'homeCtrl',
			resolve: {
				// images: function(firebaseService) {
				// 	return firebaseService.getImages();
				// },
				levelMainInfo: function(firebaseService) {
					return firebaseService.getLevelMainInfo();
				},
				levelSecondInfo: function(firebaseService) {
					return firebaseService.getLevelSecondInfo();
				},
				description: function(firebaseService) {
					return firebaseService.getDescription();
				},
				quotes: function(firebaseService) {
					return firebaseService.getQuotes();
				},
				ratesInfo: function(firebaseService) {
					return	firebaseService.getRatesInfo();
				}
			}
		})
		.state('ownerInfo', {
			url: '/owner-info',
			templateUrl: '/app/views/ownerInfo.html',
			controller: 'ownerInfoCtrl'
		})
		.state('bookNow', {
			url: '/book-now',
			templateUrl: '/app/views/bookNow.html',
			controller: 'bookNowCtrl'
		})
		.state('login', {
			url: '/login',
			templateUrl: '/app/views/login.html',
			controller: 'loginCtrl'
		})
		.state('dashboard', {
			url: '/dashboard',
			templateUrl: '/app/views/dashboard.html',
			controller: 'dashboardCtrl',
			resolve: {
				checkAuth: function(authService, $state) {
					return authService.checkAuth();
				}
			}
		})
		.state('dashboard.overview', {
			url: '/overview',
			templateUrl: '/app/views/dashboard/overviewEdit.html',
			controller: 'dbOverview',
			resolve: {
				images: function(firebaseService) {
					return firebaseService.getImages();
				},
				levelMainInfo: function(firebaseService) {
					return firebaseService.getLevelMainInfo();
				},
				levelSecondInfo: function(firebaseService) {
					return firebaseService.getLevelSecondInfo();
				},
				description: function(firebaseService) {
					return firebaseService.getDescription();
				},
				quotes: function(firebaseService) {
					return firebaseService.getQuotes();
				}
			}
		})
		.state('dashboard.location', {
			url: '/location',
			templateUrl: '/app/views/dashboard/locationEdit.html',
		})
		.state('dashboard.rates', {
			url: '/rates',
			templateUrl: '/app/views/dashboard/ratesEdit.html',
			controller: 'dbRates',
			resolve: {
				ratesGround: function(firebaseService) {
					return firebaseService.getRatesGround();
				},
				ratesBoth: function(firebaseService) {
					return firebaseService.getRatesBoth();
				}
			}
		})
		.state('dashboard.houseDetails', {
			url: '/houseDetails',
			templateUrl: '/app/views/dashboard/houseDetailsEdit.html',
			controller: 'dbHouseDetails',
			resolve: {
				houseDetails: function(firebaseService) {
					return firebaseService.getHouseDetails();
				}
			}
		})
		.state('dashboard.users', {
			url: '/users',
			templateUrl: '/app/views/dashboard/users.html',
			controller: 'usersCtrl',
		})
});

app.run(function($state){});

app.config(["$locationProvider", function($locationProvider) {
  $locationProvider.html5Mode(true);
}]);