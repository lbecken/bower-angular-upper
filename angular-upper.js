(function() {
    'use strict';

    angular.module('angularUpper', []);

    angular
        .module('angularUpper')
        .filter('upper', upperFilter);

    /**
     * Transform string to uppercase
     * @returns {Function}
     */
    function upperFilter() {
        return function(input) {
            return input.uppercase();
        }
    }
})();