'use strict';

/**
 * @ngdoc function
 * @name webuiApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the webuiApp
 */
angular.module('webuiApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
