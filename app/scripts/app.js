/*jshint unused: vars */
define(['angular', 'controllers/main', 'controllers/search', 'services/day', 'controllers/today', 'services/today', 'controllers/calendar', 'controllers/list', 'directives/navigation', 'controllers/navigation', 'controllers/listmenu', 'services/topic', 'services/storageservice']/*deps*/, function(angular, MainCtrl, SearchCtrl, DayFactory, TodayCtrl, TodayFactory, CalendarCtrl, ListCtrl, NavigationDirective, NavigationCtrl, ListmenuCtrl, TopicFactory, StorageserviceFactory)/*invoke*/ {
  'use strict';

  return angular.module('wdiitApp', ['wdiitApp.controllers.MainCtrl',
    'wdiitApp.controllers.SearchCtrl',
    'wdiitApp.services.Day',
    'wdiitApp.controllers.TodayCtrl',
    'wdiitApp.services.Today',
    'wdiitApp.controllers.CalendarCtrl',
    'wdiitApp.controllers.ListCtrl',
    'wdiitApp.directives.Navigation',
    'wdiitApp.controllers.NavigationCtrl',
    'wdiitApp.controllers.ListMenuCtrl',
    'wdiitApp.services.Topic',
    'wdiitApp.services.Storageservice',
    /*angJSDeps*/
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
    .config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .when('/list', {
          templateUrl: 'views/list.html',
          controller: 'ListCtrl',
          resolve: {
            topics: function(multiTopicLoader) {
              return multiTopicLoader();
            }
          }
        })
        .when('/list/:month/:day', {
          templateUrl: 'views/list.html',
          controller: 'ListCtrl',
          resolve: {
            topics: function(multiTopicLoader) {
              return multiTopicLoader();
            }
          }
        })
        .when('/calendar', {
          templateUrl: 'views/calendar.html',
          controller: 'CalendarCtrl'
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
