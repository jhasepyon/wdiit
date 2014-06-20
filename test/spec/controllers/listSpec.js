/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: ListCtrl', function () {

    // load the controller's module
    beforeEach(module('wdiitApp.controllers.ListCtrl'));

    var ListCtrl,
      scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      ListCtrl = $controller('ListCtrl', {
        $scope: scope
      });
    }));

  });
});
