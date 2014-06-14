define(['angular'], function(angular) {
  'use strict';

  angular.module('wdiitApp.controllers.NavigationCtrl', [])
    .controller('NavigationCtrl', function($scope, $location) {
      var location = $location;

      $scope.menus = [
        {
          url: '#/',
          title: 'Home'
        },
        {
          url: '#/list',
          title: 'List'
        },
        {
          url: '#/calendar',
          title: 'Calendar'
        },
        {
          url: '#/search',
          title: 'Search'
        }
      ];

      $scope.isActive = function(url) {
        return '#' + location.url() === url;
      };
    });
});
