angular.module('MatchService', []).factory('Match', ['$http', function($http) {
    return {
        // call to get all nerds
        get : function() {
            return $http.get('/api/matches');
        }
    }       
}]);