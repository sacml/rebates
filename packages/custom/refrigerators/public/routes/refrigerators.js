'use strict';

angular.module('mean.refrigerators').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('refrigerators example page', {
      url: '/refrigerators/example',
      templateUrl: 'refrigerators/views/index.html'
    });
  }
]);
