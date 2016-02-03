'use strict';

angular.module('mean.washers').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('washers example page', {
      url: '/washers/example',
      templateUrl: 'washers/views/index.html'
    });
  }
]);
