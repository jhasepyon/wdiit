/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Service: today', function () {

    // load the service's module
    beforeEach(module('wdiitApp.services.Today'));

    // instantiate service
    var today;
    beforeEach(inject(function (_today_) {
      today = _today_;
    }));

    it('should do something', function () {
      expect(!!today).toBe(true);
    });

  });
});
