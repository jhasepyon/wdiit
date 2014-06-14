define(['angular'], function (angular) {
  'use strict';

  angular.module('wdiitApp.controllers.CalendarCtrl', [])
    .controller('CalendarCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
