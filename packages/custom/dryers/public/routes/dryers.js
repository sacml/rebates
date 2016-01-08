'use strict';

angular.module('mean.dryers').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('dryers example page', {
      url: '/dryers/example',
      templateUrl: 'dryers/views/index.html'
    });
  }
]);
