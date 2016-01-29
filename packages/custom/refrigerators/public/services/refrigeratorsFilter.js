'use strict';
var RefrieratorBrands =
[ {
    label: 'Bosch',
    searchValue: 'Bosch',
    selected: true
}, {
    label: 'Fisher & Paykel',
    searchValue: 'Fisher & Paykel',
    selected: true
}, {
    label: 'Gaggenau',
    searchValue: 'Gaggenau',
    selected: true
}, {
    label: 'GE Profile',
    searchValue: 'GE Profile',
    selected: true
}, {
    label: 'Kenmore',
    searchValue: 'Kenmore',
    selected: true
}, {
    label: 'KitchenAid',
    searchValue: 'KitchenAid',
    selected: true
}, {
    label: 'LG',
    searchValue: 'LG',
    selected: true
}, {
    label: 'Liebherr',
    searchValue: 'Liebherr',
    selected: true
}, {
    label: 'Samsung',
    searchValue: 'Samsung',
    selected: true
}, {
    label: 'Whirlpool',
    searchValue: 'Whirlpool',
    selected: true
}];

var RefrieratorTypes = [
{
    label: 'Bottom Freezer',
    searchValue: 'Bottom Freezer',
    selected: true
},
{
    label: 'Built-In All Refrigerator',
    searchValue: 'Built-In All Refrigerator',
    selected: true
},{
    label: 'Column Refrigerator',
    searchValue: 'Column Refrigerator',
    selected: true
},{
    label: 'Side-by-Side',
    searchValue: 'Side-by-Side',
    selected: true
}
];


angular.module('mean.refrigerators').factory('RefrigeratorsFilter', [
	function($resource) {
	    return {
	    	displayName: 'Refrierators',
	    	brands: RefrieratorBrands,
	    	productTypes: RefrieratorTypes
	    }
	}
]);
