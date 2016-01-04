'use strict';

angular.module('mean.home').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('home page', {
      url: '/',
      templateUrl: 'home/views/index.html'
    });
  }
]);
