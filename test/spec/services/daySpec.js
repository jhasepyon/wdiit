/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Service: day', function () {

    // load the service's module
    beforeEach(module('wdiitApp.services.Day'));

    // instantiate service
    var day;
    beforeEach(inject(function (_day_) {
      day = _day_;
    }));

  });
});
