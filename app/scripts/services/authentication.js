'use strict';

angular.module('peteBeachHouse')
  .service('authService', function authService($firebase, $state, environmentService) {

    var firebaseEndpoint = environmentService.getEnv().firebase;
    var authRef = new Firebase(firebaseEndpoint);
      
    this.logIn = function(user, cb) {
		authRef.authWithPassword({
			email    : user.email,
			password : user.password
		}, function(err, authData) {
			var response = {};
			if (err) {		
				switch (err.code) {
					case "INVALID_USER":
					response.issue = 'email';
			        response.message = err.message;
			        break;
			        case "INVALID_PASSWORD":
			        response.issue = 'password';
			        response.message = err.message;
			        break;
			    }
			} else if (authData) {
			    response.issue = 'none'
			}
			cb(response);
		});
    }
      
    this.createUser = function(user, cb){
		authRef.createUser({
			email: user.email,
			password: user.password
		}, function(error) {
			if (error === null) {
				authRef.authWithPassword({
						email    : user.email,
						password : user.password
					}, function(err, authData) {
				  if (authData) {
				  	authData.name = user.name;
				  	authData.enable = true;
				  	authData.timestamp = new Date().toISOString();
				    authRef.child('users').child(authData.uid.replace('simplelogin:', '')).set(authData);
				    cb(authData);
				  } else {
				  }
				});
			} else {
				return false;
			}
		});
	};

	this.logOut = function() {
		authRef.unauth();
		$state.go('home');
	};

	this.checkAuth = function() {
		var check = authRef.getAuth();
		if(!check || check === null) {
			return false;
		}
		return check;
	};
  });