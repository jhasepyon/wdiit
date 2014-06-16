define(['angular', 'angularLocalStorage', 'jquery', 'xml2json'], function(angular) {
  'use strict';

  var services = angular.module('wdiitApp.services.Topic', ['angularLocalStorage']);

  services.factory('Topic', function($http, storage) {
    var baseUrl = 'wikipedia_daytopic/api.cgi/';

    function getStorageId_(day) {
      return 'topic:' + day;
    }

    function load_(day, success, error) {
      $http.get(baseUrl + day)
        .success(function(data) {
          var json = jQuery.xml2json(data)['feed'];
          var topic = transformJson_(json);
          storage.set(getStorageId_(day), topic);
          success(topic);
        })
        .error(function() {
          error();
        });
    }

    function transformJson_(json) {
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
        topic.anniversaries.push(kinenbi_detail['item'][i]);
      }
      return topic;
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

  services.factory('MultiTopicLoader', ['Topic', '$q',
    function(Topic, $q) {
      return function() {
        var delay = $q.defer();
        Topic.query(function(topics) {
          delay.resolve(topics);
        }, function() {
          delay.reject('トピックの取得に失敗しました');
        });
        return delay.promise;
      }
    }]);

  services.factory('TopicLoader', ['Topic', '$route', '$q',
    function(Topic, $route, $q) {
      return function() {
        var delay = $q.defer();
        var params = $route.current.params;
        var month = params.month;
        var day = params.day;
        Topic.get({day: month + '/' + day}, function(topic) {
          delay.resolve(topic);
        }, function() {
          delay.reject('トピックの取得に失敗しました');
        });
        return delay.promise;
      }
    }]);
});
