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
  .module('webuiApp', ["ngRoute","security","nvd3ChartDirectives",'ngCookies'])
  // Configure Authentication Service
  .value("security.login.url", "http://localhost:8080/poc-1.0/api/v1/security/login")
  //.value("security.login.url", "http://localhost:8080/spring-security-server-example/api/v1/security/login")
  .config(function ($routeProvider,USER_ROLES) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
//        resolve: {
//            initialization: 'initialization'
//        }
    })
    .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
    })
    .when('/login', {
        templateUrl: "views/login.html",
        controller: "LoginController",
        data: {
                public:true,
                authorizedRoles: [USER_ROLES.all]
            }
        })
    .otherwise({
        redirectTo: '/'
    });
  });
