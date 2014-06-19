define(['angular'], function(angular) {
  'use strict';

  angular.module('wdiitApp.controllers.TodayCtrl', [])
    .controller('TodayCtrl', function($scope, Today) {
      $scope.today = Today;

      $scope.show = function(index, totalSize, showSize) {
        var hoge = index % (totalSize / showSize);
        return parseInt(hoge, 10) === 1;
      };
    });
});
