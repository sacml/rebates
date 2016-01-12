'use strict';



/* jshint -W098 */
angular.module('mean.greenohm').controller('GreenohmController', ['$scope','$stateParams','Global', 'Greenohm','$location', 
    'Washers','WashersFilter',
	'Dryers','DryersFilter',
    'Ac','AcFilter',
    'Refrigerators','RefrigeratorsFilter',
  function($scope, $stateParams, Global, Greenohm,$location, Washers, WashersFilter,	Dryers, DryersFilter, Ac, AcFilter ,Refrigerators, RefrigeratorsFilter) {
    $scope.global = Global;
    $scope.package = {
      name: 'greenohm'
    };

    $scope.brandNames =[];
    $scope.productTypes =[];

    $scope.find = function() {      	
    	var path = $location.path();
        var data,dataFilter;
    	switch(path) {
        	case '/washers':
    	    	data = Washers;	        
                dataFilter = WashersFilter;      
                console.log('1');
            break;
            case '/dryers':
    	    	data = Dryers;           
                dataFilter = DryersFilter;
                console.log('4');
            break;
            case '/refrigerators':
    	    	data = Refrigerators;    
                dataFilter = RefrigeratorsFilter;       
                console.log('3');
            break;
            case '/airconditioners':
    	    	data = Ac;           
                dataFilter= AcFilter;
                console.log('2');
            break;
        }

        $scope.sectionName = dataFilter.displayName;   
        $scope.brandNames = dataFilter.brands;
        $scope.productTypes = dataFilter.productTypes;  
        $scope.path = path; 
        
        data.query(function(results) {
            console.log(results);
            $scope.results= { data: results };
        });
    
    };
    $scope.findOne = function() {          
        var path = $location.path().split('/')[1],data;        
        switch(path) {
            case 'washers':
                data = Washers;         
            break;
            case 'dryers':
                data = Dryers;           
            break;
            case 'refrigerators':
                data = Refrigerators;    
            break;
            case 'airconditioners':
                data = Ac;                          
            break;
        }            

        
        data.get({brand: $stateParams.brand, model: $stateParams.model},function(results) {
            $scope.brand = $stateParams.brand;
            $scope.model = $stateParams.model;
            
            $scope.product = results;

        });
    
    };
  }
]);


