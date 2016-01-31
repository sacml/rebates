'use strict';
var featuredWashers = [
	{
		"Brand" :"",
		"Model":"",
    "img": "",
    "efr": "10.12",
    "link": "/product/56a65a8952d2e8b0208be7dd"
	},
  {
    "Brand" :"",
    "Model":"",
    "img": "",
    "efr": "10.12",
    "link": "/product/56a65a8952d2e8b0208be7ed"
  },{
    "Brand" :"",
    "Model":"",
    "img": "",
    "efr": "10.12",
    "link": "/product/56a65b093bc386b9207f4a8b"
  },
];


var featuredDryers = [
  {
    "Brand" :"",
    "Model":"",
    "img": "",
    "efr": "10.12",
    "link": ""
  },
  {
    "Brand" :"",
    "Model": "",
    "img": "",
    "efr": "10.12",
    "link": ""
  },{
    "Brand" :"",
    "Model":"",
    "img": "",
    "efr": "10.12",
    "link": ""
  },
];

var featuredRefrigerators = [
  {
    "Brand" :"",
    "Model":"",
    "img": "",
    "efr": "10.12",
    "link": ""
  },
  {
    "Brand" :"",
    "Model":"",
    "img": "",
    "efr": "10.12",
    "link": ""
  },{
    "Brand" :"",
    "Model":"",
    "img": "",
    "efr": "10.12",
    "link": ""
  },
];

var featuredAirConditioners = [
  {
    "Brand" :"Comfort Aire",
    "Model":"BG-123P",
    "img": "/products/assets/img/RAC/B73-211cl.jpg",
    "efr": "10.12",
    "link": "/product/56a65b74d03a65d020876895"
  },
  {
    "Brand" :"LG",
    "Model":"LW1016ER",
    "img": "/products/assets/img/RAC/lg-LW1016ER.png",
    "efr": "10.12",
    "link": "product/56a65b74d03a65d02087686d"
  },{
    "Brand" :"Haier",
    "Model":"ESA406R-E",
    "img": "/products/assets/img/RAC/ESA406R-E.jpg",
    "efr": "10.12",
    "link": "/product/56a65b74d03a65d02087684d"
  },
];


/* jshint -W098 */
angular.module('mean.home').controller('HomeController', ['$scope', 'Global', 'Home',
  function($scope, Global, Home) {
  	console.log('mean.home');
    $scope.global = Global;
    $scope.package = {
      name: 'home'
    };
    $scope.washers =[];
    $scope.dryers =[];
    $scope.refrigerators =[];
    $scope.airConditioners =[];
	


    $scope.findWashers = function() {   
      $scope.washers = featuredWashers;      
    };
    $scope.findDryers = function() {   
      $scope.dryers = featuredDryers;      
    };
    $scope.findRefrigerators = function() {   
      $scope.refrigerators = featuredRefrigerators;      
    };
    $scope.findAirConditioners = function() {   
      $scope.airConditioners = featuredAirConditioners;      
    };

	}]
    
);

