'use strict';

/**
 * @ngdoc overview
 * @name angularApp
 * @description
 * # angularApp
 *
 * Main module of the application.
 */
var mainAngularApp = angular.module('angularApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);

  mainAngularApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/angular', {
        templateUrl: 'views/angular.html',
        controller: 'mvLearnCtrl'
      })
      .when('/memory-game', {
        templateUrl: 'views/memory-game.html',
        controller: 'mvMemoryGame'
      })
      .when('/memory-game-no-angular', {
        templateUrl: 'views/memory-game-no-angular.html'

      })
      .when('/xmen-prototype', {
        templateUrl: 'views/xmen-prototype.html'

      })
      .otherwise({
        redirectTo: '/'
      });
  });
