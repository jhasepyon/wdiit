define(['angular'], function(angular) {
    'use strict';

    angular.module('wdiitApp.controllers.TodayCtrl', [])
        .controller('TodayCtrl', function($scope, Day) {
            var day = Day.get();
            $scope.title = day.title;
            $scope.dekigotos = day.dekigotos;
            $scope.tanjoubis = day.tanjoubis;
            $scope.kinenbis = day.kinenbis;
        });
});
