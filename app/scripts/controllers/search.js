define(['angular'], function (angular) {
  'use strict';

  angular.module('wdiitApp.controllers.SearchCtrl', [])
    .controller('SearchCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
