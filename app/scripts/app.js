/*jshint unused: vars */
define(['angular', 'controllers/main', 'controllers/search', 'services/day']/*deps*/, function (angular, MainCtrl, SearchCtrl, DayFactory)/*invoke*/ {
  'use strict';

  return angular.module('wdiitApp', ['wdiitApp.controllers.MainCtrl',
'wdiitApp.controllers.SearchCtrl',
'wdiitApp.services.Day',
/*angJSDeps*/
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .when('/search', {
          templateUrl: 'views/search.html',
          controller: 'SearchCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
});
