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
            $scope.cardPattern = "[2-9TJQKA][cshd]";
            $scope.submit = function () {
                $http
                    .post("/rest", handinfo)
                    .then(function (valObject) {
                        let content = valObject.data;
                        $scope.logfile = content;
                    })
            };
        }]);
