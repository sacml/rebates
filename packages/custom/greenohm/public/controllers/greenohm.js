'use strict';

angular.module('mean.greenohm', ['angularUtils.directives.dirPagination']);

angular.module('mean.greenohm').filter('capitalize', function() {
    return function(input) {
        return (!!input) ? input.split(' ').map(function(wrd){return wrd.charAt(0).toUpperCase() + wrd.substr(1).toLowerCase();}).join(' ') : '';
    }
});


/* jshint -W098 */
angular.module('mean.greenohm').controller('GreenohmController', ['$scope', '$filter','$stateParams','Global', 'Greenohm','$location', 
    'Products','WashersFilter',
	'DryersFilter',
    'AcFilter',
    'RefrigeratorsFilter',
  function($scope, $filter,$stateParams, Global, Greenohm,$location, Products, WashersFilter,DryersFilter,  AcFilter , RefrigeratorsFilter) {
    $scope.global = Global;
    $scope.package = {
      name: 'greenohm'
    };
     var orderBy = $filter('orderBy');
    $scope.brandNames =[];
    $scope.productTypes =[];
    $scope.brands = [];
    $scope.types = [];
    $scope.compareItems ={};
    
    $scope.currentPage = 1;
    $scope.pageSize = 10;
    $scope.predicate = "";
    function active_tabs() {
      $(".content-tab-item").hide();
      $(".content-tab-item").eq(0).addClass("active");
      
     $(".title-tab ul li").click(function(){
         var index = $(this).index();
         $(".title-tab ul li").removeClass("active");
         $(this).addClass("active");
         $(".content-tab-item").each(function(){
             $(".content-tab-item").removeClass("active");
             $(".content-tab-item").eq(index).addClass("active");
         });         
     });
    }

    $scope.order = function(predicate) {
      $scope.predicate = predicate;
      $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
      $scope.results.data = orderBy($scope.results.data, predicate, $scope.reverse);
    };

    $scope.showTab = function(index) {   
      $(".title-tab ul li").removeClass("active");
      $(".title-tab ul li").eq(index).addClass("active") ;

      $(".content-tab-item").hide();
      $(".content-tab-item").eq(index).addClass("active");           
        $(".content-tab-item").each(function(){
             $(".content-tab-item").removeClass("active");
             $(".content-tab-item").eq(index).addClass("active");
         });        
    }

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
        var args = {  category:category};
        $scope.brands = $scope.brandNames.filter(function(obj){return obj.selected;})
        $scope.types = $scope.productTypes.filter(function(obj){return obj.selected;})


        if ($scope.brands){
            var brands = [];
            $scope.brands.forEach(function(element){
                brands.push(element.searchValue);
            });
           args.brands = brands.join(); 
        }
        if ($scope.types){
           var types = []
           $scope.types.forEach(function(element){
                types.push(element.searchValue);
            });
           args.types = types.join();   
        }

        Products.query(args,function(results) {          
          results.forEach(function(i) {
              i.selected = false;
          });
                    
          $scope.results= { data: results };
        
        });
    
    };

    $scope.toggleBrand = function (brand) {
        brand.selected = !brand.selected;
        $scope.find();
    };

    $scope.toggleProductType = function (productType) {
        productType.selected = !productType.selected;
        $scope.find();
    };

    $scope.toggleCompare = function(product) {            
        
        product.selected = !product.selected;
        if(product.selected){        
        Products.get({
            productId: product._id
          },function(results) {          
                results.selected   = true;      
                $scope.compareItems[product._id] = results;      
            });
        }else{
            delete $scope.compareItems[product._id];                  
        };        
    }
    $scope.showCompare = function (argument) {
      $('.popup-compare').show()
    }
    $scope.hideCompare = function (argument) {
      $('.popup-compare').hide();
    }
    $scope.loadProduct = function() {                
        Products.get({
        productId: $stateParams.productId
      },function(results) {
            $scope.brand = $stateParams.brand;
            $scope.model = $stateParams.model;
            
            $scope.product = results;
            active_tabs();
        });
    


    };
  }
]);


