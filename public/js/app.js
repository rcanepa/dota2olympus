//angular.module('D2Olympus', ['ngRoute', 'appRoutes', 'MainCtrl', 'MatchCtrl', 'MatchService']);
angular.module('dotaApp', ['ngRoute', 'MainController', 'MatchController'])
	.config(function ($routeProvider){
		$routeProvider
			.when('/',
				{
					controller: 'MainController',
					templateUrl: '../views/home.html'
				})
			.when('/player',
				{
					controller: 'MatchController',
					templateUrl: '../views/player.html'
				})
			.when('/match',
				{
					controller: 'MatchController',
					templateUrl: '../views/match.html'
				})
			.when('/about',
				{
					controller: 'MatchController',
					templateUrl: '../views/about.html'
				})
			.otherwise({ redirectTo: '/' });
	});