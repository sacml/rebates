'use strict';

angular.module('mean.greenohm').config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
})
angular.module('mean.greenohm').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('search', {
      url: '/search',
      templateUrl: 'greenohm/views/list.html'
    }).state('Washer List page', {
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
])