'use strict';

// Declare app level module which depends on views, and components
angular.module('pokerhanderfassung', [
    'ngRoute',
    'pokerhanderfassung.view1',
    'pokerhanderfassung.view2'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/view1'});
}]);
