'use strict';

/**
 * @ngdoc overview
 * @name searchUserApp
 * @description
 * # searchUserApp
 *
 * Main module of the application.
 */
angular
  .module('searchUserApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
