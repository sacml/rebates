'use strict';

angular.module('mean.products').controller('ProductsController', ['$scope', '$stateParams', '$location', 'Global', 'Products', 'MeanUser', 'Circles',
  function($scope, $stateParams, $location, Global, Products, MeanUser, Circles) {
    $scope.global = Global;

    $scope.hasAuthorization = function(product) {
      if (!product || !product.user) return false;
      return MeanUser.isAdmin || product.user._id === MeanUser.user._id;
    };

    $scope.availableCircles = [];

    Circles.mine(function(acl) {
        $scope.availableCircles = acl.allowed;
        $scope.allDescendants = acl.descendants;
    });

    $scope.selectPermission = function() {
        $scope.descendants = [];
    };

    $scope.create = function(isValid) {
      if (isValid) {
        // $scope.product.permissions.push('test test');
        var product = new Products($scope.product);

        product.$save(function(response) {
          $location.path('admin/products/' + response._id);
        });

        $scope.product = {};

      } else {
        $scope.submitted = true;
      }
    };

    $scope.remove = function(product) {
      if (product) {
        product.$remove(function(response) {
          for (var i in $scope.products) {
            if ($scope.products[i] === product) {
              $scope.products.splice(i, 1);
            }
          }
          $location.path('products');
        });
      } else {
        $scope.product.$remove(function(response) {
          $location.path('products');
        });
      }
    };

    $scope.update = function(isValid) {
      if (isValid) {
        var product = $scope.product;
        if (!product.updated) {
          product.updated = [];
        }
        product.updated.push(new Date().getTime());

        product.$update(function() {
          $location.path('admin/products/' + product._id);
        });
      } else {
        $scope.submitted = true;
      }
    };
    $scope.init = function() {
      Products.query(function(products) {
        $scope.products = products;
      });
    };

    $scope.find = function() {
      
      Products.query({category: $scope.search.category},function(products) {
        $scope.products = products;
      });
      
    };

    $scope.findOne = function() {
      Products.get({
        productId: $stateParams.productId
      }, function(product) {
        $scope.product = product;
      });
    };
  }
]);