'use strict';

//Articles service used for articles REST endpoint
angular.module('mean.greenohm').factory('Greenohm', ['$resource',
  function($resource) {
    return $resource('api/greenohm/:productId', {
      productId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);