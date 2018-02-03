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
              'id': 'moonlight_dance', 'name': 'Moonlight dance', 'description': 'Passive: One her first attackagainst a target, Luna will teleport towards it\'s position. On her third attack she will deal extra damages and mark the target.'
            },
            {
              'id': 'halfmoon_cut', 'name': 'Halfmoon cut', 'cooldown': 5, 'mana': 50, 'description': 'Luna will make a shockwave in the designated direction dealing 350/430/510/590/670/750（+51% Magic) magic damages and marking hit enemies.'
            },
            {
              'id': 'warming_spot', 'name': 'Earth thrust', 'cooldown': 8, 'mana': 50, 'description': 'Luna strike the earth and pull nearby enemies, dealing 120/135/150/165/180/195（+31% Magic）magic damages stunning them 0.5s and marking them. She will also gain a shield blocking 400/480/560/640/720/800（+80% Magic）damages slowing her for 2s of 50 of her movement speed.'
            },
            {
              'id': 'new_moon_assault', 'name': 'New moon assault', 'cooldown': 25/20/15, 'mana': 80, 'description': 'Ultimate: Luna will charge in the designated direction dealing 500/625/750（+60% Magic) magic damages. if a marked target is hit, her new moon assault coolddown is reset.'
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
              'id': 'ethernal_blood', 'name': 'Ethernal blood', 'description': 'Passive: When triggering an ability MiYue spawn a shadow servant (up to 6) attacking nearby enemies for 40（+7% Magic）magic damages and healing Miyue of 20（+3% Magic）health. When spawning a servant MiYue gain 30 shadow force. When out of shadow force all her servants disappear.'
            },
            {
              'id': 'pain_attack', 'name': 'Shock of pain', 'cooldown': '10/9.6/9.2/8.8/8.4/8', 'description': 'MiYue release shadows in the specified direction dealing 200/220/240/260/280/300（+24% Magic）magic damages when activated a second time, MiYue will teelport to the shadow dealing 200/220/240/260/280/300（+24% Magic）to nearby enemies. If so she will spawn a servant'
            },
            {
              'id': 'illusionary_servant', 'name': 'Illusionary servant', 'cooldown': 9, 'description': 'MiYue release a shadow chain in specified direction lasting at most 4s, stealing to the first target hit 15（+2% Magic）life, 10 physical damages and 30 magic damages and dealing 50/60/70/80/90/100（+7% Magic). If the link is maintained, MiYue will spawn a servant'
            },
            {
              'id': 'moon_shadow', 'name': 'Moon shadow', 'cooldown': '24/22/20', 'description': 'Ultimate: MiYue escape in the shadow 2s gaining 30%seed and become immune to any effect. Upon start and termination, she deals 400/500/600（+50% Magic）magic damages to nearby enemies if she deals damage to an enemy coing back she will spawn a shadow servant. Passive: MiYue attacks deal 40（+100 Physical）（+20%Magic) damages slow enemies of 10% adnd generate 10 Shadow force'
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
          'name': 'wangzhaojun', 'types': ['mage'], 'ready':1,
          'skills': [
            {
              'id': 'frozen_heart', 'name': 'Frozen heart', 'description': 'Passive: When out of combat for 3s WangZhaoJun will get an ice shield protecting 450 (+ 52% of her magic) damages. Upon breaking the shield will deal 450 (+52% magic) damage to nearby enemies and slow them down 1s at 50% of their move speed '
            },
            {
              'id': 'withering_cristals', 'name': 'Withering cristals', 'cooldown': 5, 'mana': 80, 'description': 'WangZhaoJun creates a burst of ice dealing 400/480/560/640/720/800（+65%法术加成）magic damage and slowing affected enemies 2s for 50% of theirmovement speed.'
            },
            {
              'id': 'frost_coffin', 'name': 'Frost coffin', 'cooldown': 5, 'mana': 80, 'description': 'WangZhaoJun will create a pillar of ice after a small cooldown on the designated area dealing 250/280/310/340/370/400（+47% magic）magic damages. targets in range upon trigger will be frozen for 2.5s. They will also suffer of 250/280/310/340/370/400（+50%magix damage）form WangZhaoJun',
            },
            {
              'id': 'winter_coming', 'name': 'Winter is coming', 'cooldown': 50/45/40, 'mana': 150, 'description': 'Ultimate: WangZhaoJun will trigger a blizzard at her position dealing 300/375/450（+50% magic）magic damages every 0.5s for 4.7s to enemies in range and slowing them of 30% of their move speed for 1s. She will also gain her Ice shield upon trigger blocking 600 Physical damages.'
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
              'id': 'jin_smelting', 'name': 'Jin\'s dynasty smelting', 'description': 'Passive: when hit by an enemy the attacker have 50% chance of being stoned for 1s. A hero cannot be affected more than once every 8s.'
            },
            {
              'id': 'hurricane_dash', 'name': 'Hurricane dash', 'cooldown': 5, 'mana': 50, 'description': 'ZhongWuYuan rush in the specified direction. Her next attack will deal 225/270/315/360/405/450（+120% Physical）physical damage and leave the target stunned for 2s'
            },
            {
              'id': 'intimidation_hit', 'name': 'Intimidation hit', 'cooldown': '10/9/8/7/6/5', 'mana': 70, 'description': 'ZhongwuYuna slam her sledehammer on the ground dealing 350/420/490/560/630/700（+150% Physical）physical damages to target in range. Targets in the center will suffer double damages'
            },
            {
              'id': 'hurricane_hammer', 'name': 'Hurricane hammer', 'cooldown': '40/35/30', 'mana': 100, 'description': 'Ultimate: ZhongwuYan turn with her hammer for 3.2s dealing 150/200/250（+80%物理加成）physical damage every 0.4s. Enemy in the outer range will receive an additional 40% damage. Passive: ZhongwuYan summon a rock shield protecting her from 80/120/160(+35% Physical) damages.'
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
        return "images/skills/" + $scope.selection.name + "_" + skill.id + ".png";
      };

    }
  ]);

}());
