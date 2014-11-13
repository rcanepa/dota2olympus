(function(){

    function MainController($location){
        this.tagline = 'Hi from the MainController';
        this.isActive = function (viewLocation) {
             var active = (viewLocation === $location.path());
             return active;
        };
    }

    angular.module('dotaApp')
        .controller('MainController', MainController);

})();