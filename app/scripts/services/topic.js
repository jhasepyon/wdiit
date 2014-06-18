define(['angular', 'angularLocalStorage', 'jquery', 'jquery-xml2json'], function(angular) {
  'use strict';

  var services = angular.module('wdiitApp.services.Topic', ['angularLocalStorage']);

  services.factory('Topic', ['$http', '$q', 'storage', function($http, $q, storage) {
    var baseUrl = 'wikipedia_daytopic/api.cgi/';

    function getStorageId_(day) {
      return 'topic:' + day;
    }

    function load_(day, success, error) {
      $http.get(baseUrl + day)
        .success(function(data) {
          var json = jQuery.xml2json(data).feed;
          var topic = transformJson_(json);
          storage.set(getStorageId_(day), topic);
          success(topic);
        })
        .error(function() {
          error();
        });
    }

    function transformJson_(json) {
      return {
        title: json.title,
        wikipedia: json.wikipedia,
        events: json.dekigoto.item,
        persons: json.tanjyoubi.item,
        anniversaries: json['kinenbi_detail'].item
      };
    }

    function loadDate_(date) {
      var delay = $q.defer();
      $http.get(baseUrl + date)
        .success(function(resp) {
          if (jQuery.xml2json) {
            var json = jQuery.xml2json(resp).feed;
            var topic = transformJson_(json);
            delay.resolve(topic);
          } else {
            delay.reject('xml2jsonが読み込まれていません');
          }
        })
        .error(function() {
          delay.reject('トピックの取得に失敗しました。');
        });
      return delay.promise;
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
      },

      getByDates: function(option, success, error) {
        var promises = [];
        for (var i = 1; i <= 7; i++) {
          promises.push(loadDate_('1/' + i));
        }

        return $q.all(promises).then(success, error);
      }
    };
  }]);

  services.factory('MultiTopicLoader', ['Topic', '$q',
    function(Topic, $q) {
      return function() {
        var delay = $q.defer();
        Topic.getByDates({}, function(topics) {
          delay.resolve(topics);
        }, function() {
          delay.reject('トピックの取得に失敗しました');
        });
        return delay.promise;
      };
    }]);

  services.factory('TopicLoader', ['Topic', '$route', '$q',
    function(Topic, $route, $q) {
      return function() {
        var delay = $q.defer();
        var params = $route.current.params;
        var month = params.month;
        var day = params.day;
        var date = month && day ? month + '/' + day : '1/1';
        Topic.get({day: date}, function(topic) {
          delay.resolve(topic);
        }, function() {
          delay.reject('トピックの取得に失敗しました');
        });
        return delay.promise;
      };
    }]);
});
