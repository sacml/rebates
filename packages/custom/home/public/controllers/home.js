'use strict';
var featuredWashers = [
	{
		"Brand" :"LG",
		"Model":"WM8000H",
    "img": "/products/assets/img/CW/WM8000HVA.jpg",
    "efr": "10.12",
    "link": "/product/56a65a8952d2e8b0208be7dd"
	},
  {
    "Brand" :"Whirlpool",
    "Model":"WFW95HED",
    "img": "/products/assets/img/CW/wht_front_3f68a.jpg",
    "efr": "10.12",
    "link": "/product/56a65a8952d2e8b0208be7ed"
  },{
    "Brand" :"Samsung",
    "Model":"WF56H91",
    "img": "/products/assets/img/CW/wf56h9100a_white_front_aaa18.png",
    "efr": "10.12",
    "link": "/product/56a65a8952d2e8b0208be7eb"
  },
];


var featuredDryers = [
  {
    "Brand" :"Whirlpool",
    "Model":"WED99HED",
    "img": "/products/assets/img/CD/wed99hedw_6337a.jpg",
    "efr": "10.12",
    "link" : "/product/56a65b093bc386b9207f4a8b"
  },
  {
    "Brand" :"Kenmore",
    "Model": "8158",
    "img": "/products/assets/img/CD/spin_prod_1258395512.jpg",
    "efr": "10.12",
    "link" : "/product/56a65b093bc386b9207f4a89"
  },{
    "Brand" :"LG",
    "Model":"DLHX4072",
    "img": "/products/assets/img/CD/dlhx4072v_front_02c3f.jpg",
    "efr": "10.12",
    "link" : "/product/56a65b093bc386b9207f4a8c"
  },
];

var featuredRefrigerators = [
  {
    "Brand" :"GE",
    "Model":"PFH28PSH",
    "img": "/products/assets/img/RF/GE-PFH28PSH.jpg",
    "efr": "10.12",
    "link": "product/56a65b22eb43dfc220499f1c"
  },
  {
    "Brand" :"Samsung",
    "Model":"RF28HFPDB",
    "img": "/products/assets/img/RF/PFH28PSH.jpg",
    "efr": "10.12",
    "link": "/product/56a65b22eb43dfc220499f2c"
  },{
    "Brand" :"LG",
    "Model":"LFC24786",
    "img": "/products/assets/img/RF/LFC24786.jpg",
    "efr": "10.12",
    "link": "/product/56a65b22eb43dfc220499f0f"
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

