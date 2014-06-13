define(['angular'], function(angular) {
  'use strict';

  angular.module('wdiitApp.services.Day', [])
    .factory('Day', function() {
      var day = {};

      day.get = function() {
        return {
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
      };

      day.query = function() {

      };

      return day;
    });
});
