define(['angular', 'angularLocalStorage'], function(angular) {
  'use strict';

  angular.module('wdiitApp.services.Day', ['angularLocalStorage'])
    .factory('Day', function(storage) {
      var dayFactory = {};

      dayFactory.get = function(id) {
        var tmp = {
          title: '6月19日',
          dekigotos: [
            '1333年（元弘3年/正慶2年5月7日） - 倒幕に転じた足利高氏らの攻撃により六波羅探題が陥落。',
            '1419年 - 応永の外寇。李氏朝鮮軍が対馬に上陸。'
          ],
          tanjoubis: [
            '1301年（正安3年5月12日） - 守邦親王、鎌倉幕府第9代将軍',
            '1566年 - ジェームズ1世、スコットランド・イングランド国王'
          ],
          imibis: [
            '626年（推古天皇34年5月20日） - 蘇我馬子、飛鳥時代の政治家',
            '1053年（天喜元年6月1日）- 源倫子、藤原道長の正室'
          ],
          kinenbis: [
            {
              title: '世界鎌状赤血球症デー（ 世界）',
              description: ''
            },
            {
              title: '京都府開庁記念日（ 日本）',
              description: '京都府が1985年に制定。慶応4年閏4月29日（新暦1868年6月19日）に京都府が開設されたことを記念。'
            }
          ]
        };
        tmp.id = id;
        switch (id) {
          case '1/1':
            tmp.title = '1月1日';
            break;
          case '1/2':
            tmp.title = '1月2日';
            break;
          case '1/3':
            tmp.title = '1月3日';
            break;
          case '1/4':
            tmp.title = '1月4日';
            break;
          case '1/5':
            tmp.title = '1月5日';
            break;
          case '1/6':
            tmp.title = '1月6日';
            break;
          case '1/7':
            tmp.title = '1月7日';
            break;
        }
        return tmp;
      };

      dayFactory.query = function() {
        storage.clearAll();

        var days = this.getAllDays();

        days = days.slice(0, 7);
        var newDays = [];
        for (var i = 0, l = days.length; i < l; i++) {
          var current = days[i];
          var month = current.month;
          var date = current.date;
          var id = month + '/' + date;

          var newDay = dayFactory.get(id);
          newDay.month = month;
          newDay.date = date;
          newDays.push(newDay);
        }

//        storage.set(days[0].id, days[0].label);
        return newDays;
      };

      dayFactory.getAllDays = function() {
        var year = new Date().getFullYear();
        var start = new Date(year, 0, 1);
        var end = new Date(year + 1, 0, 1);
        var endStr = end.toString();
        var day = start;

        var days = [];
        while (day.toString() !== endStr) {
          var month = day.getMonth() + 1;
          var date = day.getDate();
          days.push({
            month: month,
            date: date
          });
          day.setDate(date + 1);
        }
        return days;
      };

      return dayFactory;
    });
});
