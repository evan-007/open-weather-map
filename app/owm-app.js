angular.module('OWMApp', ['ngRoute'])

.value('owmCities',
	['Boston', 'Bordeaux', 'Seoul'])

.config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: './home.html',
		controller: 'homeCtrl'
	}).when('/cities/:city', {
		templateUrl: './city.html',
		controller: 'cityCtrl',
		resolve: {
			city: function(owmCities, $route, $location) {
				var city = $routeParams.city;
				if(owmCities.indexOf(city) == -1) {
					return;
				}
		}
	});
})

.controller('homeCtrl', function($scope) {

})

.controller('cityCtrl', function($scope, $routeParams) {

	}
	$scope.city = $routeParams.city;
});