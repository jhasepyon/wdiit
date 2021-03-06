define(['angular'], function(angular) {
  'use strict';

  angular.module('wdiitApp.controllers.ListMenuCtrl', [])
    .controller('ListMenuCtrl', ['$scope', 'Day', 'Today',
      function($scope, Day, Today) {
        var active = 0;
        $scope.topics = $scope.$parent.topics;
        Today.topic = $scope.topics[active];

        $scope.changeToday = function(index) {
          active = index;
          Today.topic = $scope.topics[index];
        };

        $scope.isActive = function(index) {
          return active === index;
        };
      }]);
});
