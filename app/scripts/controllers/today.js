define(['angular'], function(angular) {
  'use strict';

  angular.module('wdiitApp.controllers.TodayCtrl', [])
    .controller('TodayCtrl', function($scope, Today) {
      $scope.today = Today;
    });
});
