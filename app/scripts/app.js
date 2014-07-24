'use strict';

/**
 * @ngdoc overview
 * @name webuiApp
 * @description
 * # webuiApp
 *
 * Main module of the application.
 */
angular
  .module('webuiApp', [
    'ngRoute',
    'nvd3ChartDirectives'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
