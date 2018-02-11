(function () {

  'use strict';

  angular.module('HonorApp', [])
  .config(function($httpProvider) {
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
  })
  .controller('HonorController', ['$scope', '$log', '$http',
    function($scope, $log, $http) {



    //$scope.contents = [{heading:"Content heading", description:"The actual content"}];
    //Just a placeholder. All web content will be in this format

      $scope.types = ['soldier', 'tank', 'mage', 'assassin', 'archer', 'support'];
      $scope.filter = undefined;

      $scope.items = [];


      $http.get('static/heroes.json')
      .success(function(data) {
        console.log('heroes data fetched.');
        $scope.heroes=data;
      })
      .error(function(data,status,error,config){
        console.log('error '+error);
        $scope.contents = [{heading:"Error",description:"Could not load json   data"}];
      });

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
