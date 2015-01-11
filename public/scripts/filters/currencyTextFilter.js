var app = angular.module('peteBeachHouse');

app.filter('currencyTextFilter', function() {

	return function(input) {
		if(!isNaN(input)) {
			var num = Number(input);
			return "$" + num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
		}
		return input;
	};

})