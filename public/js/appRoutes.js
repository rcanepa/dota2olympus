(function(){

    function config($routeProvider){
        $routeProvider
            .when('/', {
                controller: 'MainController',
                controllerAs: 'main',
                templateUrl: '../views/home.html'
            })
            .when('/player', {
                controller: 'MatchController',
                controllerAs: 'vm',
                templateUrl: '../views/player.html'
            })
            .when('/match', {
                controller: 'MatchController',
                controllerAs: 'vm',
                templateUrl: '../views/match.html'
            })
            .when('/about', {
                controller: 'MatchController',
                controllerAs: 'vm',
                templateUrl: '../views/about.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }

    angular.module('dotaApp')
        .config(config);
})();