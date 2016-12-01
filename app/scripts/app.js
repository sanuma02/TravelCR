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
      .otherwise({
        redirectTo: '/'
      });
  });
