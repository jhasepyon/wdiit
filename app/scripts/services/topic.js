define(['angular', 'jquery', 'jquery-xml2json'], function(angular, jQuery) {
  'use strict';

  var services = angular.module('wdiitApp.services.Topic', []);

  services.factory('Topic', ['$http', '$q', 'StorageService', function($http, $q, StorageService) {
    var baseUrl = 'wikipedia_daytopic/api.cgi/';

    /**
     * 指定された日付のトピックを取得する。
     * ローカルストレージを優先的に検索する。
     * @param {!Object} option
     * @return {!Object} promise
     * @private
     */
    function get_(option) {
      var date = option.date;

      var delay = $q.defer();
      var topic = StorageService.getTopic(date);
      if (topic) {
        delay.resolve(topic);
      } else {
        $http.get(baseUrl + date)
          .success(function(resp) {
            topic = transformResponse_(resp);
            StorageService.saveTopic(date, topic);
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
      return {
        title: json.title,
        wikipedia: json.wikipedia,
        events: json.dekigoto.item,
        persons: json.tanjyoubi.item,
        anniversaries: json['kinenbi_detail'].item
      };
    }

    return {
      get: function(option, success, error) {
        return get_(option).then(success, error);
      },

      getByDates: function(option, success, error) {
        var promises = [];
        angular.forEach(option.dates, function(date) {
          promises.push(get_({date: date}));
        });
        return $q.all(promises).then(success, error);
      }
    };
  }]);

  services.factory('multiTopicLoader', ['Topic', '$q',
    function(Topic, $q) {
      return function() {
        var dates = [];
        for (var i = 1; i <= 7; i++) {
          dates.push('1/' + i);
        }

        var delay = $q.defer();
        Topic.getByDates({dates: dates},
          function(topics) {
            delay.resolve(topics);
          },
          function() {
            delay.reject('トピックの取得に失敗しました');
          });
        return delay.promise;
      };
    }]);

  services.factory('topicLoader', ['Topic', '$route', '$q',
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
