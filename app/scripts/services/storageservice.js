define(['angular', 'angularLocalStorage'], function(angular) {
  'use strict';

  angular.module('wdiitApp.services.Storageservice', ['angularLocalStorage'])
    .factory('StorageService', ['storage', function(storage) {
      function getTopicId_(date) {
        return 'topic:' + date;
      }

      return {
        getTopic: function(date) {
          return storage.get(getTopicId_(date));
        },

        saveTopic: function(date, topic) {
          return storage.set(getTopicId_(date), topic);
        }
      };
    }]);
});
