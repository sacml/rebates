'use strict';

/* jshint -W098 */
angular.module('mean.ac').controller('AcController', ['$scope', 'Global', 'Ac',
  function($scope, Global, Ac) {
    $scope.global = Global;
    $scope.package = {
      name: 'ac'
    };
  }
]);
