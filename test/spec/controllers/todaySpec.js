/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: TodayCtrl', function () {

    // load the controller's module
    beforeEach(module('wdiitApp.controllers.TodayCtrl'));

    var TodayCtrl,
      scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      TodayCtrl = $controller('TodayCtrl', {
        $scope: scope
      });
    }));
  });
});
