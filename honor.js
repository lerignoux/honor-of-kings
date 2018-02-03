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
          'name': 'ake', 'types': [], 'ready':0,
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
          'name': 'anqila', 'types': [], 'ready':0,
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
          'name': 'bailishouyue', 'types': ['archer'], 'ready':0,
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
          'name': 'bailixuance', 'types': ['assassin'], 'ready':0,
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
          'name': 'baiqi', 'types': ['tank', 'soldier'], 'ready':0,
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
          'name': 'bianque', 'types': [], 'ready':0,
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
          'name': 'buzhihuowu', 'types': ['mage'], 'ready':0,
          'skills': [
            {
              'id': 'bear', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'circling_flame', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'fan_slap', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'certain_death', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'caiwenji', 'types': ['support'], 'ready':0,
          'skills': [
            {
              'id': 'singing_travel', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'ungulited_reasoning', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'hu_whistle', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'forget_concerns', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'caocao', 'types': [], 'ready':0,
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
          'name': 'chengjisihan', 'types': ['archer'], 'ready':0,
          'skills': [
            {
              'id': 'hunt', 'name': 'Hut', 'description': 'Passive: '
            },
            {
              'id': 'eagle_eye', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'trap', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'violent_hunt', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'chengyaojin', 'types': [], 'ready':0,
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
          'name': 'daji', 'types': ['mage'], 'ready':4,
          'skills': [
            {
              'id': 'dishearted', 'name': 'Dis-hearted', 'description': 'Passive: '
            },
            {
              'id': 'soul_attack', 'name': 'Soul attack', 'description': ''
            },
            {
              'id': 'idol_charm', 'name': 'Idol charm', 'description': ''
            },
            {
              'id': 'queen_adoration', 'name': 'Queen adoration', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'damo', 'types': [], 'ready':0,
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
          'name': 'daqiao', 'types': ['support'], 'ready':0,
          'skills': [
            {
              'id': 'unending_flow', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'jump_flow', 'name': 'jumping carp flow', 'description': ''
            },
            {
              'id': 'ocean_karma', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'decision_bridge', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
            {
              'id': 'whirlpool_portal', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'dianwei', 'types': [], 'ready':0,
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
          'name': 'diaochan', 'types': ['mage'], 'ready':0,
          'skills': [
            {
              'id': 'flower_print', 'name': 'Dialect: flower print', 'description': 'Passive: '
            },
            {
              'id': 'red_rain', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'sorrow', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'dreamland_vortex', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'direnjie', 'types': [], 'ready':0,
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
              'id': 'magnificent', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'donghuangtaiyi', 'types': ['tank'], 'ready':0,
          'skills': [
            {
              'id': 'freezing_bite', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'daily_sacrifice', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'bright_dragon', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'fall_agreement', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'ganjiangmoxie', 'types': ['mage'], 'ready':0,
          'skills': [
            {
              'id': 'united_flight', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'master_protection', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'male_female_closing', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'male_female_far', 'name': 'dreamland vortex', 'description': ''
            },
            {
              'id': 'strike', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'gaojianchi', 'types': [], 'ready':0,
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
          'name': 'gongbenwuzang', 'types': [], 'ready':0,
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
          'name': 'gongsunche', 'types': [], 'ready':0,
          'skills': [
            {
              'id': 'night_whisper', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'cens_moon', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'frost_dance', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'lonely_duck_cloud', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'guanyu', 'types': [], 'ready':0,
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
          'name': 'guiguzi', 'types': ['support'], 'ready':0,
          'skills': [
            {
              'id': 'warp_soldiers', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'secret_god_prophet', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'life_detection', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'prophet_mist', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'hanxin', 'types': [], 'ready':0,
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
          'name': 'houyi', 'types': [], 'ready':0,
          'skills': [
            {
              'id': 'archer_discipline', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'multi_arrow', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'sunset_twilight', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'sun_arrow', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'huamulan', 'types': ['warrior'], 'ready':0,
          'skills': [
            {
              'id': 'great_wall_patrol', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'decapitate', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'whirlwind_dance', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'blosssom_edge', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'huangzhong', 'types': ['archer'], 'ready':0,
          'skills': [
            {
              'id': 'artillery_spirit', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'hidden_pursuit', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'alert_landmine', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'heavy_battery', 'name': 'heavy artillery battery', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'jiangziya', 'types': [], 'ready':0,
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
          'name': 'juyoujing', 'types': ['assassin'], 'ready':0,
          'skills': [
            {
              'id': 'moon_sword', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'yan_return', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'reserve', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'slender_snow', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'kai', 'types': ['warrior'], 'ready':0,
          'skills': [
            {
              'id': 'asura_spirit', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'blade_cycle', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'blade_storm', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'ethernal_magic_body', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'lanlingwang', 'types': [], 'ready':0,
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
          'name': 'laofuzi', 'types': [], 'ready':0,
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
          'name': 'lianpo', 'types': [], 'ready':0,
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
          'name': 'libai', 'types': [], 'ready':0,
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
          'name': 'liubang', 'types': [], 'ready':0,
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
          'name': 'liubei', 'types': ['warrior'], 'ready':0,
          'skills': [
            {
              'id': 'bullet_strengthening', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'double_shoot', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'take_the_lead', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'virtuous_people', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'liuchan', 'types': [], 'ready':0,
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
          'name': 'liyuanfang', 'types': ['archer'], 'ready':0,
          'skills': [
            {
              'id': 'spying', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'spy_photography', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'evade', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'close_blade_wind', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'lubanqihao', 'types': [], 'ready':0,
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
          'name': 'luna', 'types': ['warrior'], 'ready':1,
          'skills': [
            {
              'id': 'moonlight dance', 'name': 'Moonlight dance', 'description': 'Passive: '
            },
            {
              'id': 'halfmoon_cut', 'name': 'Halfmoon cut', 'description': ''
            },
            {
              'id': 'warming_spot', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'new_moon_assault', 'name': 'New moon assault', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'lvbu', 'types': [], 'ready':0,
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
          'name': 'makeboluo', 'types': [], 'ready':0,
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
          'name': 'mengji', 'types': ['tank', 'soldier'], 'ready':0,
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
          'name': 'mingshiyin', 'types': [], 'ready':0,
          'skills': [
            {
              'id': 'great_profit', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'divine_diagram', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'divination_master', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'safe_divination', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'miyue', 'types': ['mage'], 'ready':1,
          'skills': [
            {
              'id': 'ethernal_blood', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'pain_attack', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'illusionary_servant', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'moon_shadow', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'mozi', 'types': [], 'ready':0,
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
          'name': 'nakelulu', 'types': ['assassin'], 'ready':0,
          'skills': [
            {
              'id': 'flowing_blade_technique', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'eagle_attack', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'wind_blade', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'eagle_assault', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'nezha', 'types': ['warrior'], 'ready':0,
          'skills': [
            {
              'id': 'furnace_fire', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'three_point_blaze', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'confusion_binding', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'yingyang_fall', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'niumo', 'types': ['tank'], 'ready':0,
          'skills': [
            {
              'id': 'powerful_protector', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'roar_hachet', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'tyrannize', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'landslide_split', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'nvwa', 'types': [], 'ready':0,
          'skills': [
            {
              'id': 'glorious_guide', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'radiate_order', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'create_order', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'move_order', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
            {
              'id': 'destroy_order', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'sulie', 'types': ['tank'], 'ready':0,
          'skills': [
            {
              'id': 'unyielding_wall', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'destroy_the_beacon', 'name': 'Destroy the fire beacon', 'description': ''
            },
            {
              'id': 'invincible', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'ardent_army', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'sunbin', 'types': [], 'ready':0,
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
          'name': 'sunshangxiang', 'types': [], 'ready':0,
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
          'name': 'sunwukong', 'types': ['warrior'], 'ready':0,
          'skills': [
            {
              'id': 'god_power', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'magical_body_protection', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'charge', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'goldband_wish', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'taiyizhenren', 'types': ['support'], 'ready':0,
          'skills': [
            {
              'id': 'gold_glitering', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'accident', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'third_hand', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'methamorphosis', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'wangzhaojun', 'types': ['mage'], 'ready':0,
          'skills': [
            {
              'id': 'frozen_heart', 'name': 'Frozen heart', 'description': 'Passive: '
            },
            {
              'id': 'withering_cristals', 'name': 'Withering cristals', 'description': ''
            },
            {
              'id': 'frost_coffin', 'name': 'Frost coffin', 'description': ''
            },
            {
              'id': 'winter_coming', 'name': 'Winter is coming', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'wuzetian', 'types': [], 'ready':0,
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
          'name': 'xiahoudun', 'types': [], 'ready':0,
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
          'name': 'xiangyu', 'types': [], 'ready':0,
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
          'name': 'xiaoqiao', 'types': [], 'ready':0,
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
          'name': 'yadianna', 'types': ['warrior'], 'ready':0,
          'skills': [
            {
              'id': 'god_awakening', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'divine_march', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'link_spear', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'holy_shield', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'yangjian', 'types': ['warrior'], 'ready':0,
          'skills': [
            {
              'id': 'wisdom_erosion', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'yinyang_reverse', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'fake_annihilation', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'origin_eye', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'yase', 'types': ['warrior'], 'ready':0,
          'skills': [
            {
              'id': 'holy_light_guard', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'oath_shield', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'rotation_hit', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'holy_sword_judgment', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'yingzheng', 'types': [], 'ready':0,
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
          'name': 'yuji', 'types': ['archer'], 'ready':0,
          'skills': [
            {
              'id': 'tree_god_blessing', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'rise', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'gale', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'front_wave_dance', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'zhangfei', 'types': ['tank'], 'ready':0,
          'skills': [
            {
              'id': 'dark_potential', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'spot_restriction', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'guard_mechanism', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'unyielding_mad_beast', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'zhangliang', 'types': ['mage'], 'ready':0,
          'skills': [
            {
              'id': 'incarnation', 'name': 'Word of incarnation', 'description': 'Passive: '
            },
            {
              'id': 'barrier', 'name': 'Word of barrier', 'description': ''
            },
            {
              'id': 'erosion', 'name': 'Word of erosion', 'description': ''
            },
            {
              'id': 'manipulation', 'name': 'Word of manipulation', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'zhaoyun', 'types': [], 'ready':0,
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
          'name': 'zhenji', 'types': [], 'ready':0,
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
          'name': 'zhongkui', 'types': ['mage'], 'ready':0,
          'skills': [
            {
              'id': 'punish_ceremony', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'void_cleaner', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'destruction_lock', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'reincarnation_swallow', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'zhongwuyan', 'types': ['tank'], 'ready':1,
          'skills': [
            {
              'id': 'jin_smelting', 'name': 'Jin\'s dynasty smelting', 'description': 'Passive: '
            },
            {
              'id': 'hurricane_dash', 'name': 'Hurricane dash', 'description': ''
            },
            {
              'id': 'intimidation_hit', 'name': 'Intimidation hit', 'description': ''
            },
            {
              'id': 'hurricane_hammer', 'name': 'Hurricane hammer', 'description': 'Ultimate: '
            },
          ]
        },
        {
          'name': 'zhouyu', 'types': [], 'ready':0,
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
          'name': 'zhuangzhou', 'types': [], 'ready':0,
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
          'name': 'zhugeliang', 'types': ['mage'], 'ready':0,
          'skills': [
            {
              'id': 'stratagem_time', 'name': 'Dream eater', 'description': 'Passive: '
            },
            {
              'id': 'east_wind_attack', 'name': 'linger in dreamland', 'description': ''
            },
            {
              'id': 'time_travel', 'name': 'dreamland crying', 'description': ''
            },
            {
              'id': 'fatal_bullet', 'name': 'dreamland vortex', 'description': 'Ultimate: '
            },
          ]
        },
      ];

      $scope.types = ['soldier', 'tank', 'mage', 'assassin', 'archer', 'support'];
      $scope.filter = undefined;

      $scope.items = [];

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
