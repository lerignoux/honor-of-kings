(function () {

  'use strict';

  angular.module('HonorApp', [])
  .config(function($httpProvider) {
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
  })
  .controller('HonorController', ['$scope', '$log',
    function($scope, $log) {


      $scope.heroes = [
        {
          'name': 'ake', 'types': [],
          'skills': [
            {
              'id': 'death_kiss', 'name': 'Death Kiss', 'description': 'Passive: '
            },
            {
              'id': 'arc_light', 'name': 'Arc Light', 'description': ''
            },
            {
              'id': 'flower_wink', 'name': 'Flower Wink', 'description': ''
            },
            {
              'id': 'fantasy_dance', 'name': 'Fantasy Dance', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'anqila', 'types': [],
          'skills': [
            {
              'id': 'fire_magic', 'name': 'Fire Magic', 'description': 'Passive: '
            },
            {
              'id': 'fireball', 'name': 'Fireball', 'description': ''
            },
            {
              'id': 'chaos_spark', 'name': 'Chaos Spark', 'description': ''
            },
            {
              'id': 'blazing_radiance', 'name': 'Blazing Radiance', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'bailishouyue', 'types': [],
          'skills': [
            {
              'id': 'aim', 'name': 'Aim', 'description': 'Passive: '
            },
            {
              'id': 'quiet_eye', 'name': 'Quiet eye', 'description': ''
            },
            {
              'id': 'gale_rest', 'name': 'Gale Rest', 'description': ''
            },
            {
              'id': 'escape', 'name': 'Escape', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'bailixuance', 'types': [],
          'skills': [
            {
              'id': 'fanatical_order', 'name': 'Fanatical Order', 'description': 'Passive: '
            },
            {
              'id': 'god_hook', 'name': 'God Hook', 'description': ''
            },
            {
              'id': 'nightmare_lock', 'name': 'Nightmare Lock', 'description': ''
            },
            {
              'id': 'shans_wink', 'name': 'Shan\'s wink', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'baiqi', 'types': ['tank', 'soldier'],
          'skills': [
            {
              'id': 'dream_eater', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'creamland_linger', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'dreamland_crying', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'dreamland_vortex', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'bianque', 'types': [],
          'skills': [
            {
              'id': 'dream_eater', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'creamland_linger', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'dreamland_crying', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'dreamland_vortex', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'buzhihuowu', 'types': [],
          'skills': [
            {
              'id': 'dream_eater', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'creamland_linger', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'dreamland_crying', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'dreamland_vortex', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'caiwenji', 'types': [],
          'skills': [
            {
              'id': 'dream_eater', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'creamland_linger', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'dreamland_crying', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'dreamland_vortex', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'caocao', 'types': [],
          'skills': [
            {
              'id': 'dream_eater', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'creamland_linger', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'dreamland_crying', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'dreamland_vortex', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'chengjisihan', 'types': [],
          'skills': [
            {
              'id': 'dream_eater', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'creamland_linger', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'dreamland_crying', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'dreamland_vortex', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'chengyaojin', 'types': [],
          'skills': [
            {
              'id': 'dream_eater', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'creamland_linger', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'dreamland_crying', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'dreamland_vortex', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'daji', 'types': ['mage'],
          'skills': [
            {
              'id': 'dream_eater', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'creamland_linger', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'dreamland_crying', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'dreamland_vortex', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'damo', 'types': [],
          'skills': [
            {
              'id': 'dream_eater', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'creamland_linger', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'dreamland_crying', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'dreamland_vortex', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'daqiao', 'types': [],
          'skills': [
            {
              'id': 'dream_eater', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'creamland_linger', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'dreamland_crying', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'dreamland_vortex', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'dianwei', 'types': [],
          'skills': [
            {
              'id': 'dream_eater', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'creamland_linger', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'dreamland_crying', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'dreamland_vortex', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'diaochan', 'types': [],
          'skills': [
            {
              'id': 'dream_eater', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'creamland_linger', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'dreamland_crying', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'dreamland_vortex', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'direnjie', 'types': [],
          'skills': [
            {
              'id': 'dream_eater', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'creamland_linger', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'dreamland_crying', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'dreamland_vortex', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'donghuangtaiyi', 'types': [],
          'skills': [
            {
              'id': 'dream_eater', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'creamland_linger', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'dreamland_crying', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'dreamland_vortex', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'ganjiangmoxie', 'types': [],
          'skills': [
            {
              'id': 'dream_eater', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'creamland_linger', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'dreamland_crying', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'dreamland_vortex', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'gaojianchi', 'types': [],
          'skills': [
            {
              'id': 'dream_eater', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'creamland_linger', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'dreamland_crying', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'dreamland_vortex', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'gongbenwuzang', 'types': [],
          'skills': [
            {
              'id': 'dream_eater', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'creamland_linger', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'dreamland_crying', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'dreamland_vortex', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'gongsunche', 'types': [],
          'skills': [
            {
              'id': 'dream_eater', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'creamland_linger', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'dreamland_crying', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'dreamland_vortex', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'guanyu', 'types': [],
          'skills': [
            {
              'id': 'dream_eater', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'creamland_linger', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'dreamland_crying', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'dreamland_vortex', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'guiguzi', 'types': [],
          'skills': [
            {
              'id': 'dream_eater', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'creamland_linger', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'dreamland_crying', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'dreamland_vortex', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'hanxin', 'types': [],
          'skills': [
            {
              'id': 'dream_eater', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'creamland_linger', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'dreamland_crying', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'dreamland_vortex', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'houyi', 'types': [],
          'skills': [
            {
              'id': 'dream_eater', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'creamland_linger', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'dreamland_crying', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'dreamland_vortex', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'huamulan', 'types': [],
          'skills': [
            {
              'id': 'dream_eater', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'creamland_linger', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'dreamland_crying', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'dreamland_vortex', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'huangzhong', 'types': [],
          'skills': [
            {
              'id': 'dream_eater', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'creamland_linger', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'dreamland_crying', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'dreamland_vortex', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'jiangziya', 'types': [],
          'skills': [
            {
              'id': 'dream_eater', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'creamland_linger', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'dreamland_crying', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'dreamland_vortex', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'juyoujing', 'types': [],
          'skills': [
            {
              'id': 'dream_eater', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'creamland_linger', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'dreamland_crying', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'dreamland_vortex', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'kai', 'types': [],
          'skills': [
            {
              'id': 'dream_eater', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'creamland_linger', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'dreamland_crying', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'dreamland_vortex', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'lanlingwang', 'types': [],
          'skills': [
            {
              'id': 'dream_eater', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'creamland_linger', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'dreamland_crying', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'dreamland_vortex', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'laofuzi', 'types': [],
          'skills': [
            {
              'id': 'dream_eater', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'creamland_linger', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'dreamland_crying', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'dreamland_vortex', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'lianpo', 'types': [],
          'skills': [
            {
              'id': 'dream_eater', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'creamland_linger', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'dreamland_crying', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'dreamland_vortex', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'libai', 'types': [],
          'skills': [
            {
              'id': 'dream_eater', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'creamland_linger', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'dreamland_crying', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'dreamland_vortex', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'liubang', 'types': [],
          'skills': [
            {
              'id': 'dream_eater', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'creamland_linger', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'dreamland_crying', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'dreamland_vortex', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'liubei', 'types': [],
          'skills': [
            {
              'id': 'dream_eater', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'creamland_linger', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'dreamland_crying', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'dreamland_vortex', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'liuchan', 'types': [],
          'skills': [
            {
              'id': 'dream_eater', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'creamland_linger', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'dreamland_crying', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'dreamland_vortex', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'liyuanfang', 'types': [],
          'skills': [
            {
              'id': 'dream_eater', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'creamland_linger', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'dreamland_crying', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'dreamland_vortex', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'lubanqihao', 'types': [],
          'skills': [
            {
              'id': 'dream_eater', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'creamland_linger', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'dreamland_crying', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'dreamland_vortex', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'luna', 'types': [],
          'skills': [
            {
              'id': 'dream_eater', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'creamland_linger', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'dreamland_crying', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'dreamland_vortex', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'lvbu', 'types': [],
          'skills': [
            {
              'id': 'dream_eater', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'creamland_linger', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'dreamland_crying', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'dreamland_vortex', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'makeboluo', 'types': [],
          'skills': [
            {
              'id': 'dream_eater', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'creamland_linger', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'dreamland_crying', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'dreamland_vortex', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'mengji', 'types': ['tank', 'soldier'],
          'skills': [
            {
              'id': 'dream_eater', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'dreamland_linger', 'name': 'Linger in dreamland', 'description': ''
            },
            {
              'id': 'dreamland_crying', 'name': 'Dreamland crying', 'description': ''
            },
            {
              'id': 'dreamland_vortex', 'name': 'Dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'mingshiyin', 'types': [],
          'skills': [
            {
              'id': 'dream_eater', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'creamland_linger', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'dreamland_crying', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'dreamland_vortex', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'miyue', 'types': [],
          'skills': [
            {
              'id': 'dream_eater', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'creamland_linger', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'dreamland_crying', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'dreamland_vortex', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'mozi', 'types': [],
          'skills': [
            {
              'id': 'dream_eater', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'creamland_linger', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'dreamland_crying', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'dreamland_vortex', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'nakelulu', 'types': [],
          'skills': [
            {
              'id': 'dream_eater', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'creamland_linger', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'dreamland_crying', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'dreamland_vortex', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'nezha', 'types': [],
          'skills': [
            {
              'id': '0', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': '1', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': '2', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': '3', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'niumo', 'types': [],
          'skills': [
            {
              'id': '0', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': '1', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': '2', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': '3', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'nvwa', 'types': [],
          'skills': [
            {
              'id': '0', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': '1', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': '2', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': '3', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'sulie', 'types': [],
          'skills': [
            {
              'id': '0', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': '1', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': '2', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': '3', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'sunbin', 'types': [],
          'skills': [
            {
              'id': '0', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': '1', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': '2', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': '3', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'sunshangxiang', 'types': [],
          'skills': [
            {
              'id': '0', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': '1', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': '2', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': '3', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'sunwukong', 'types': [],
          'skills': [
            {
              'id': '0', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': '1', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': '2', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': '3', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'taiyizhenren', 'types': [],
          'skills': [
            {
              'id': '0', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': '1', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': '2', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': '3', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'wangzhaojun', 'types': [],
          'skills': [
            {
              'id': '0', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': '1', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': '2', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': '3', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'wuzetian', 'types': [],
          'skills': [
            {
              'id': '0', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': '1', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': '2', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': '3', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'xiahoudun', 'types': [],
          'skills': [
            {
              'id': '0', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': '1', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': '2', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': '3', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'xiangyu', 'types': [],
          'skills': [
            {
              'id': '0', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': '1', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': '2', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': '3', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'xiaoqiao', 'types': [],
          'skills': [
            {
              'id': '0', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': '1', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': '2', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': '3', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'yadianna', 'types': [],
          'skills': [
            {
              'id': '0', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': '1', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': '2', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': '3', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'yangjian', 'types': [],
          'skills': [
            {
              'id': '0', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': '1', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': '2', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': '3', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'yase', 'types': [],
          'skills': [
            {
              'id': '0', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': '1', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': '2', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': '3', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'yingzheng', 'types': [],
          'skills': [
            {
              'id': '0', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': '1', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': '2', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': '3', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'yuji', 'types': [],
          'skills': [
            {
              'id': '0', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': '1', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': '2', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': '3', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'zhangfei', 'types': [],
          'skills': [
            {
              'id': '0', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': '1', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': '2', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': '3', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'zhangliang', 'types': [],
          'skills': [
            {
              'id': '0', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': '1', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': '2', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': '3', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'zhaoyun', 'types': [],
          'skills': [
            {
              'id': '0', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': '1', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': '2', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': '3', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'zhenji', 'types': [],
          'skills': [
            {
              'id': '0', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': '1', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': '2', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': '3', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'zhongkui', 'types': [],
          'skills': [
            {
              'id': '0', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': '1', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': '2', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': '3', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'zhongwuyan', 'types': [],
          'skills': [
            {
              'id': '0', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': '1', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': '2', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': '3', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'zhouyu', 'types': [],
          'skills': [
            {
              'id': '0', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': '1', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': '2', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': '3', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'zhuangzhou', 'types': [],
          'skills': [
            {
              'id': '0', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': '1', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': '2', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': '3', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'zhugeliang', 'types': [],
          'skills': [
            {
              'id': '0', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': '1', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': '2', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': '3', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
      ]

      $scope.types = ['soldier', 'tank', 'mage', 'assassin', 'ADC', 'support']

      $scope.items = []

      $scope.selectHero = function(hero) {
        $scope.selection = hero;
      };

      $scope.getHeroImage = function(hero) {
        return "images/heroes/" + hero.name + ".jpg";
      };

      $scope.getSkillImage = function(skill) {
        return "images/skills/" + skill.id + ".png";
      };

    }
  ]);

}());
