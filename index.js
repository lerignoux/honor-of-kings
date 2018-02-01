



(function () {

  'use strict';

  angular.module('FeedbackApp', ['ngMaterial'])
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('deep-orange')
      .accentPalette('cyan')
      .dark();
    $mdThemingProvider.theme("error-toast");
  })
  .config(function($httpProvider) {
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
  })
  .controller('FeedbackController', ['$scope', '$log', '$http', '$filter', '$location', '$mdToast', '$mdDialog',
    function($scope, $log, $http, $filter, $location, $mdToast, $mdDialog) {


      $scope.heroes = [
        {
          'name': 'mengji',
          'types': ['tank', 'soldier'],
          'skills': [
            {
              'id': 'dream_eater',
              'name': 'Dream eater',
              'description': '梦奇不断吞噬周围的噩梦，导致长胖；从最瘦到最胖总共会增加100点质量，耗时20秒；长胖会增加普通攻击和梦境萦绕、梦境漩涡攻击范围，并且最多可以增加150点物理攻击、200点物理和法术防御、92自然回血值；同时最多减少200点移动速度；梦奇使用技能会消耗质量，导致减肥；梦奇的第三次普通攻击将变更为横扫，横扫会造成更大范围的伤害合理调整自身体积，在赶路和与敌人周旋时适当缩小体积提高移速，但要确保靠近敌人后拥有足够大的体积进行战斗。'
            },
            {
              'id': 'creamland_linger',
              'name': 'linger in dreamland',
              'description': ''
            },
            {
              'id': 'dreamland_crying',
              'name': 'dreamland crying',
              'description': ''
            },
            {
              'id': 'dreamland_vortex',
              'name': 'dreamland vortex',
              'description': 'Ultimate: '
            },
          ]
        }
      ]

      $scope.types = ['soldier', 'tank', 'mage', 'assassin', 'ADC', 'support']

      $scope.items = []

      $scope.getHeroImage = function(hero) {
        return "images/heroes/" + hero.name + ".jpg";
      };


    }
  ]);

}());
