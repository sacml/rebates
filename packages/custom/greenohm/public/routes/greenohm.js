'use strict';

angular.module('mean.greenohm').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('Washer List page', {
      url: '/washers',
      templateUrl: 'greenohm/views/list.html'
    }).state('Dryers List page', {
      url: '/dryers',
      templateUrl: 'greenohm/views/list.html'
    }).state('Refrigerators List page', {
      url: '/refrigerators',
      templateUrl: 'greenohm/views/list.html'
    }).state('airconditioners List page', {
      url: '/airconditioners', 
      templateUrl: 'greenohm/views/list.html'
    }).state('Product Detail Page', {
      url: '/product/:productId',
      templateUrl: 'greenohm/views/product.html'
    });
  }
]);
