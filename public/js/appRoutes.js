angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // nerds page that will use the NerdController
        .when('/matches', {
            templateUrl: 'views/match.html',
            controller: 'MatchController'
        });

    $locationProvider.html5Mode(true);

}]);