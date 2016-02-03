'use strict';

//Setting up route
angular.module('mean.products').config(['$stateProvider',
  function($stateProvider) {

    // states for my app
    $stateProvider
      .state('all products', {
        url: '/admin/products',
        templateUrl: '/products/views/list.html',
        requiredCircles : {
          circles: ['authenticated'],
          denyState: 'auth.login'
        }
      })    
      .state('product by id', {
        url: '/admin/products/:productId',
        templateUrl: '/products/views/product.html',
        requiredCircles : {
          circles: ['authenticated'],
          denyState: 'auth.login'
        }
      });
  }
]);
