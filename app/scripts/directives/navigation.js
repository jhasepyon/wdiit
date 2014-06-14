define(['angular'], function(angular) {
  'use strict';

  angular.module('wdiitApp.directives.Navigation', [])
    .directive('navigation', function() {
      return {
        templateUrl: 'views/navigation.html',
        restrict: 'E',
        replace: true
      };
    });
});
