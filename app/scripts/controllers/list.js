define(['angular'], function (angular) {
  'use strict';

  angular.module('wdiitApp.controllers.ListCtrl', [])
    .controller('ListCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
