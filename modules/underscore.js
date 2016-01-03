/**
 * Created by sailfish2 on 1/2/2016.
 */
var underscore = angular.module('underscore', []);
underscore.factory('_', ['$window', function($window) {
    return $window._; // assumes underscore has already been loaded on the page
}]);