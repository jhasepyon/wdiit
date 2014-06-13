define(['angular'], function(angular) {
    'use strict';

    angular.module('wdiitApp.controllers.TodayCtrl', [])
        .controller('TodayCtrl', function($scope, Today, Day) {
            var day = Day.get();
            var today = Today;
            today.title = day.title;
            today.dekigotos = day.dekigotos;
            today.tanjoubis = day.tanjoubis;
            today.kinenbis = day.kinenbis;

            $scope.title = today.title;
            $scope.dekigotos = today.dekigotos;
            $scope.tanjoubis = today.tanjoubis;
            $scope.kinenbis = today.kinenbis;
        });
});
