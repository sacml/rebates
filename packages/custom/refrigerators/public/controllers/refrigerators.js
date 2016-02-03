'use strict';

/* jshint -W098 */
angular.module('mean.refrigerators').controller('RefrigeratorsController', ['$scope', 'Global', 'Refrigerators',
  function($scope, Global, Refrigerators) {
    $scope.global = Global;
    $scope.package = {
      name: 'refrigerators'
    };
  }
]);
