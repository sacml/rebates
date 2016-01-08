'use strict';

/* jshint -W098 */
angular.module('mean.dryers').controller('DryersController', ['$scope', 'Global', 'Dryers',
  function($scope, Global, Dryers) {
    $scope.global = Global;
    $scope.package = {
      name: 'dryers'
    };
  }
]);
