/**
 * Created by marcus on 01.06.17.
 */
'use strict';

angular
    .module("pokerhanderfassung.services", [])
    .factory("handinfo", function () {
        return {
            version: 1,
            playercount: 9,
            smallblind: 25,
            bigblind: 50,
            ante: 0,
            players: []
        };
    });