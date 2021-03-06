/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: NavigationCtrl', function () {

    // load the controller's module
    beforeEach(module('wdiitApp.controllers.NavigationCtrl'));

    var NavigationCtrl,
      scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      NavigationCtrl = $controller('NavigationCtrl', {
        $scope: scope
      });
    }));

  });
});
