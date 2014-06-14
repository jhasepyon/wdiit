define(['angular'], function (angular) {
  'use strict';

  angular.module('wdiitApp.controllers.ListMenuCtrl', [])
    .controller('ListMenuCtrl', function ($scope, Day) {
      var days = Day.query();
      $scope.days = days;
    });
});
