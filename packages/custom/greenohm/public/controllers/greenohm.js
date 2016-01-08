'use strict';



/* jshint -W098 */
angular.module('mean.greenohm').controller('GreenohmController', ['$scope','Global', 'Greenohm','$location', 
    'Washers','WashersFilter',
	'Dryers','DryersFilter',
    'Ac','AcFilter',
    'Refrigerators','RefrigeratorsFilter',
  function($scope, Global, Greenohm,$location, Washers, WashersFilter,	Dryers, DryersFilter, Ac, AcFilter ,Refrigerators, RefrigeratorsFilter) {
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
                dataFilter = WashersFilter      
            break;
            case '/dryers':
    	    	data = Dryers;           
                dataFilter = DryersFilter
            break;
            case '/refrigerators':
    	    	data = Refrigerators;    
                dataFilter = RefrigeratorsFilter       
            break;
            case '/airconditioners':
    	    	data = Ac;           
                dataFilter= AcFilter;
            break;
        }

        $scope.sectionName = dataFilter.displayName;   
        $scope.brandNames = dataFilter.brands;
        $scope.productTypes = dataFilter.productTypes;  
         
        data.query(function(results) {
            
            $scope.results= { data: results };
            console.log($scope.results);
        });
    
    };
  }
]);


