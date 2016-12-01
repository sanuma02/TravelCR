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
      .otherwise({
        redirectTo: '/'
      });
  });
