'use strict';

/**
 * @ngdoc overview
 * @name travelApp
 * @description
 * # travelApp
 *
 * Main module of the application.
 */
angular
  .module('travelApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'vm'
      })
      .when('/honey', {
        templateUrl: 'views/honey.html',
        controller: 'HoneyCtrl',
        controllerAs: 'honey'
      })
      .when('/forest', {
        templateUrl: 'views/forest.html',
        controller: 'ForestCtrl',
        controllerAs: 'forest'
      })
      .when('/multi', {
        templateUrl: 'views/multi.html',
        controller: 'MultiCtrl',
        controllerAs: 'multi'
      })
      .when('/oneday', {
        templateUrl: 'views/oneday.html',
        controller: 'OnedayCtrl',
        controllerAs: 'oneday'
      })
      .when('/taste', {
        templateUrl: 'views/taste.html',
        controller: 'TasteCtrl',
        controllerAs: 'taste'
      })
      .when('/traditional', {
        templateUrl: 'views/traditional.html',
        controller: 'TraditionalCtrl',
        controllerAs: 'traditional'
      })
      .when('/arenal', {
        templateUrl: 'views/arenal.html',
        controller: 'ArenalCtrl',
        controllerAs: 'arenal'
      })
      .when('/braulio', {
        templateUrl: 'views/braulio.html',
        controller: 'BraulioCtrl',
        controllerAs: 'braulio'
      })
      .when('/cahuita', {
        templateUrl: 'views/cahuita.html',
        controller: 'CahuitaCtrl',
        controllerAs: 'cahuita'
      })
      .when('/canopy', {
        templateUrl: 'views/canopy.html',
        controller: 'CanopyCtrl',
        controllerAs: 'canopy'
      })
      .when('/canyoning', {
        templateUrl: 'views/canyoning.html',
        controller: 'CanyoningCtrl',
        controllerAs: 'canyoning'
      })
      .when('/canonegro', {
        templateUrl: 'views/canonegro.html',
        controller: 'CanonegroCtrl',
        controllerAs: 'canonegro'
      })
      .when('/carara', {
        templateUrl: 'views/carara.html',
        controller: 'CararaCtrl',
        controllerAs: 'carara'
      })
      .when('/chirripo', {
        templateUrl: 'views/chirripo.html',
        controller: 'ChirripoCtrl',
        controllerAs: 'chirripo'
      })
      .when('/chocolate', {
        templateUrl: 'views/chocolate.html',
        controller: 'ChocolateCtrl',
        controllerAs: 'chocolate'
      })
      .when('/corcovado', {
        templateUrl: 'views/corcovado.html',
        controller: 'CorcovadoCtrl',
        controllerAs: 'corcovado'
      })
      .when('/curu', {
        templateUrl: 'views/curu.html',
        controller: 'CuruCtrl',
        controllerAs: 'curu'
      })
      .when('/irazu', {
        templateUrl: 'views/irazu.html',
        controller: 'IrazuCtrl',
        controllerAs: 'irazu'
      })
      .when('/baldi', {
        templateUrl: 'views/baldi.html',
        controller: 'BaldiCtrl',
        controllerAs: 'baldi'
      })
      .when('/silencio', {
        templateUrl: 'views/silencio.html',
        controller: 'SilencioCtrl',
        controllerAs: 'silencio'
      })
      .when('/donjuan', {
        templateUrl: 'views/donjuan.html',
        controller: 'DonjuanCtrl',
        controllerAs: 'donjuan'
      })
      .when('/danaus', {
        templateUrl: 'views/danaus.html',
        controller: 'DanausCtrl',
        controllerAs: 'danaus'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
