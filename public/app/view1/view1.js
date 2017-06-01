'use strict';

angular
    .module('pokerhanderfassung.view1', ['ngRoute', 'pokerhanderfassung.services'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: '/app/view1/view1.html',
            controller: 'View1Controller'
        });
    }])
    .controller('View1Controller', [
        "$scope", "$location", "handinfo",
        function ($scope, $location, handinfo) {
            $scope.handinfo = handinfo;
            $scope.updateBigBlind = function () {
                handinfo.bigblind = handinfo.smallblind
                    ? 2 * handinfo.smallblind
                    : null;
            };
            $scope.submit = function () {
                let i;
                for (i = 0; i < handinfo.playercount; i += 1) {
                    handinfo.players.push({
                        name: "Player_" + (i + 1),
                        stack: 100 * parseInt(handinfo.bigblind, 10),
                        index: i + 1
                    });
                }
                $location.path("/view2");
            };
        }]);
