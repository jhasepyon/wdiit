/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Service: storageService', function () {

    // load the service's module
    beforeEach(module('wdiitApp.services.Storageservice'));

    // instantiate service
    var storageService;
    beforeEach(inject(function (_storageService_) {
      storageService = _storageService_;
    }));

    it('should do something', function () {
      expect(!!storageService).toBe(true);
    });

  });
});
