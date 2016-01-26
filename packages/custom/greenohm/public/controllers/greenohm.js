'use strict';



/* jshint -W098 */
angular.module('mean.greenohm').controller('GreenohmController', ['$scope','$stateParams','Global', 'Greenohm','$location', 
    'Products','WashersFilter',
	'DryersFilter',
    'AcFilter',
    'RefrigeratorsFilter',
  function($scope, $stateParams, Global, Greenohm,$location, Products, WashersFilter,DryersFilter,  AcFilter , RefrigeratorsFilter) {
    $scope.global = Global;
    $scope.package = {
      name: 'greenohm'
    };

    $scope.brandNames =[];
    $scope.productTypes =[];

    $scope.find = function() {      	
    	var path = $location.path();
        var category,dataFilter;
    	switch(path) {
        	case '/washers':
    	    	category = 'washers';	        
                dataFilter = WashersFilter;      
                console.log('1');
            break;
            case '/dryers':
    	    	category = 'dryers';           
                dataFilter = DryersFilter;
                console.log('4');
            break;
            case '/refrigerators':
    	    	category = 'refrigerators';    
                dataFilter = RefrigeratorsFilter;       
                console.log('3');
            break;
            case '/airconditioners':
    	    	category = 'airconditioners';           
                dataFilter= AcFilter;
                console.log('2');
            break;
        }

        $scope.sectionName = dataFilter.displayName;   
        $scope.brandNames = dataFilter.brands;
        $scope.productTypes = dataFilter.productTypes;  
        $scope.path = path; 
        
        Products.query({category:category},function(results) {
            console.log(results);
            $scope.results= { data: results };
        });
    
    };
    $scope.loadProduct = function() {          
        
        console.log("hi");
        
        
        Products.get({
        productId: $stateParams.productId
      },function(results) {
            $scope.brand = $stateParams.brand;
            $scope.model = $stateParams.model;
            
            $scope.product = results;

        });
    
    };
  }
]);


