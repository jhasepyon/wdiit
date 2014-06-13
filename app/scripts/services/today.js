define(['angular'], function(angular) {
  'use strict';

  angular.module('wdiitApp.services.Today', [])
    .factory('Today', function() {
      return {
        title: '',
        dekigotos: [],
        tanjoubis: [],
        kinenbis: []
      };
    });
});
