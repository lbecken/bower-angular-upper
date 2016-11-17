(function() {
    'use strict';

    angular.module('angularUpper', []);

    angular
        .module('angularUpper')
        .filter('upper', upperFilter);

    function upperFilter() {
        return function(input) {
            return input.uppercase();
        }
    }
})();