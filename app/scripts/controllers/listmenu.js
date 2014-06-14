define(['angular'], function (angular) {
  'use strict';

  angular.module('wdiitApp.controllers.ListMenuCtrl', [])
    .controller('ListMenuCtrl', function ($scope) {
      $scope.days = [
        '1月1日',
        '1月2日',
        '1月3日'
      ];
    });
});
