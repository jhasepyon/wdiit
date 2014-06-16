define(['angular'], function (angular) {
  'use strict';

  angular.module('wdiitApp.controllers.ListCtrl', [])
    .controller('ListCtrl', ['$scope', 'topics', function ($scope, topics) {
      $scope.topics = topics;
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    }]);
});
