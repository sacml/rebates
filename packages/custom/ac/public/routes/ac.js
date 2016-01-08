'use strict';

angular.module('mean.ac').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('ac example page', {
      url: '/ac/example',
      templateUrl: 'ac/views/index.html'
    });
  }
]);
