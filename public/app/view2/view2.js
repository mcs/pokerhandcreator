'use strict';

angular
    .module('pokerhanderfassung.view2', ['ngRoute', 'pokerhanderfassung.services'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view2', {
            templateUrl: '/app/view2/view2.html',
            controller: 'View2Controller'
        });
    }])
    .controller('View2Controller', [
        "$scope", "$http", "$location", "handinfo",
        function ($scope, $http, $location, handinfo) {
            $scope.handinfo = handinfo;
            $scope.submit = function () {
//                $location.path("/view3");
                $http
                    .post("/rest", handinfo)
                    .then(function (valObject) {
                        let content = valObject.data;
                        $scope.logfile = content;
                    })
            };

        }]);
