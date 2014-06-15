define(['angular'], function(angular) {
  'use strict';

  angular.module('wdiitApp.controllers.ListMenuCtrl', [])
    .controller('ListMenuCtrl', function($scope, Day, Today) {
      var days = Day.query();
      $scope.days = days;

      $scope.changeToday = function(id) {
        Today.day = Day.get(id);
      };

      $scope.isActive = function(id) {
        if (Today.day) {
          return Today.day.id === id;
        }
        return false;
      };
    });
});
