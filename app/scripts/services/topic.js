define(['angular', 'angularLocalStorage', 'jquery', 'jquery-xml2json'], function(angular) {
  'use strict';

  var services = angular.module('wdiitApp.services.Topic', ['angularLocalStorage']);

  services.factory('Topic', ['$http', '$q', 'storage', function($http, $q, storage) {
    var baseUrl = 'wikipedia_daytopic/api.cgi/';

    function getStorageId_(day) {
      return 'topic:' + day;
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

    /**
     * 指定された日付のトピックを取得する。
     * ローカルストレージを優先的に検索する。
     * @param {string} date
     * @return {!Object} promise
     * @private
     */
    function loadTopic_(date) {
      var delay = $q.defer();

      var topic = getFromStorage_(date);
      if (topic) {
        delay.resolve(topic);
      } else {
        $http.get(baseUrl + date)
          .success(function(resp) {
            topic = transformResponse_(resp);
            save_(date, topic);
            delay.resolve(topic);
          })
          .error(function() {
            delay.reject('トピックの取得に失敗しました。');
          });
      }
      return delay.promise;
    }

    function transformResponse_(resp) {
      var json = jQuery.xml2json(resp).feed;
      return transformJson_(json);
    }

    function getFromStorage_(date) {
      return storage.get(getStorageId_(date));
    }

    function save_(date, topic) {
      return storage.set(getStorageId_(date), topic);
    }

    return {
      get: function(option, success, error) {
        return loadTopic_(option.date).then(success, error);
      },

      getByDates: function(option, success, error) {
        var promises = [];
        for (var i = 1; i <= 7; i++) {
          promises.push(loadTopic_('1/' + i));
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
        Topic.get({date: date}, function(topic) {
          delay.resolve(topic);
        }, function() {
          delay.reject('トピックの取得に失敗しました');
        });
        return delay.promise;
      };
    }]);
});
