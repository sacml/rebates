'use strict';
var featuredWashers = [
	{
		"Brand" : "Samsung",
		"Model": "A23019 Washer",
    "img": "http://rebatesfromsmud.com/images/mg1.png",
    "efr": "10.12",
    "link": "/washers/Samsung-WF56H91**A*"
	},
  {
    "Brand" : "GE",
    "Model": "GFWR2700H Washer",
    "img": "http://rebatesfromsmud.com/images/mg2.jpeg",
    "efr": "10.12",
    "link": "/washers/GE-GFWR2700H***"
  },{
    "Brand" : "Whirlpool",
    "Model": "WFW81HED*+ Washer",
    "img": "http://rebatesfromsmud.com/images/mg3.jpg",
    "efr": "10.12",
    "link": "/washers/Whirlpool-WFW81HED*+"
  },
];


var featuredDryers = [
  {
    "Brand" : "Samsung",
    "Model": "A23019 Washer",
    "img": "http://rebatesfromsmud.com/images/mg1.png",
    "efr": "10.12",
    "link": "/washers/Samsung-WF56H91**A*"
  },
  {
    "Brand" : "GE",
    "Model": "GFWR2700H Washer",
    "img": "http://rebatesfromsmud.com/images/mg2.jpeg",
    "efr": "10.12",
    "link": "/washers/GE-GFWR2700H***"
  },{
    "Brand" : "Whirlpool",
    "Model": "WFW81HED*+ Washer",
    "img": "http://rebatesfromsmud.com/images/mg3.jpg",
    "efr": "10.12",
    "link": "/washers/Whirlpool-WFW81HED*+"
  },
];

var featuredRefrigerators = [
  {
    "Brand" : "Samsung",
    "Model": "A23019 Washer",
    "img": "http://rebatesfromsmud.com/images/mg1.png",
    "efr": "10.12",
    "link": "/washers/Samsung-WF56H91**A*"
  },
  {
    "Brand" : "GE",
    "Model": "GFWR2700H Washer",
    "img": "http://rebatesfromsmud.com/images/mg2.jpeg",
    "efr": "10.12",
    "link": "/washers/GE-GFWR2700H***"
  },{
    "Brand" : "Whirlpool",
    "Model": "WFW81HED*+ Washer",
    "img": "http://rebatesfromsmud.com/images/mg3.jpg",
    "efr": "10.12",
    "link": "/washers/Whirlpool-WFW81HED*+"
  },
];

var featuredAirConditioners = [
  {
    "Brand" : "Samsung",
    "Model": "A23019 Washer",
    "img": "http://rebatesfromsmud.com/images/mg1.png",
    "efr": "10.12",
    "link": "/washers/Samsung-WF56H91**A*"
  },
  {
    "Brand" : "GE",
    "Model": "GFWR2700H Washer",
    "img": "http://rebatesfromsmud.com/images/mg2.jpeg",
    "efr": "10.12",
    "link": "/washers/GE-GFWR2700H***"
  },{
    "Brand" : "Whirlpool",
    "Model": "WFW81HED*+ Washer",
    "img": "http://rebatesfromsmud.com/images/mg3.jpg",
    "efr": "10.12",
    "link": "/washers/Whirlpool-WFW81HED*+"
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

