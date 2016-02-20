'use strict';
var RefrieratorBrands =
[ {
    label: 'Bosch',
    searchValue: 'Bosch',
    selected: false
}, {
    label: 'Fisher & Paykel',
    searchValue: 'Fisher & Paykel',
    selected: false
}, {
    label: 'Gaggenau',
    searchValue: 'Gaggenau',
    selected: false
}, {
    label: 'GE Profile',
    searchValue: 'GE Profile',
    selected: false
}, {
    label: 'Kenmore',
    searchValue: 'Kenmore',
    selected: false
}, {
    label: 'KitchenAid',
    searchValue: 'KitchenAid',
    selected: false
}, {
    label: 'LG',
    searchValue: 'LG',
    selected: false
}, {
    label: 'Liebherr',
    searchValue: 'Liebherr',
    selected: false
}, {
    label: 'Samsung',
    searchValue: 'Samsung',
    selected: false
}, {
    label: 'Whirlpool',
    searchValue: 'Whirlpool',
    selected: false
}];

var RefrieratorTypes = [
{
    label: 'Bottom Freezer',
    searchValue: 'Bottom Freezer',
    selected: false
},
{
    label: 'Built-In All Refrigerator',
    searchValue: 'Built-In All Refrigerator',
    selected: false
},{
    label: 'Column Refrigerator',
    searchValue: 'Column Refrigerator',
    selected: false
},{
    label: 'Side-by-Side',
    searchValue: 'Side-by-Side',
    selected: false
}
];


angular.module('mean.refrigerators').factory('RefrigeratorsFilter', [
	function($resource) {
	    return {
	    	displayName: 'Refrigerators',
	    	brands: RefrieratorBrands,
	    	productTypes: RefrieratorTypes
	    }
	}
]);
