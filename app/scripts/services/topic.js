define(['angular', 'angularLocalStorage', 'jquery', 'xml2json'], function(angular) {
  'use strict';

  angular.module('wdiitApp.services.Topic', ['angularLocalStorage'])
    .factory('Topic', function($http, storage) {
      var baseUrl = 'wikipedia_daytopic/api.cgi/';

      function getStorageId_(day) {
        return 'topic:' + day;
      }

      function load_(day, success, error) {
        $http.get(baseUrl + day)
          .success(function(data) {
            var json = jQuery.xml2json(data)['feed'];
            var topic = {
              title: json['title'],
              wikipedia: json['wikipedia'],
              events: [], // 出来事
              persons: [], // 誕生日
              anniversaries: [] // 記念日
            };
            var i, l;

            var dekigoto = json['dekigoto'];
            for (i = 0, l = dekigoto['item'].length; i < l; i++) {
              topic.events.push(dekigoto['item'][i]);
            }

            var tanjyoubi = json['tanjyoubi'];
            for (i = 0, l = tanjyoubi['item'].length; i < l; i++) {
              topic.persons.push(tanjyoubi['item'][i]);
            }

            var kinenbi = json['kinenbi'];
            var kinenbi_detail = json['kinenbi_detail'];
            for (i = 0, l = kinenbi['item'].length; i < l; i++) {
              topic.anniversaries.push({
                title: kinenbi['item'][i],
                detail: kinenbi_detail['item'][i]
              });
            }

            storage.set(getStorageId_(day), topic);
            success(topic);
          })
          .error(function() {
            error();
          });
      }

      return {
        get: function(option, success, error) {
          var day = option.day;
          var topic = storage.get(getStorageId_(day));
          if (topic) {
            success(topic);
          } else {
            load_(day, success, error);
          }
        }
      };
    });
});
