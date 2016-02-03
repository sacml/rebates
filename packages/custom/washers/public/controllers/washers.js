'use strict';

/* jshint -W098 */
angular.module('mean.washers').controller('WashersController', ['$scope', 'Global', 'Washers',
  function($scope, Global, Washers) {
    $scope.global = Global;
    $scope.package = {
      name: 'washers'
    };
  }
]);
