'use strict';
var RefrieratorBrands =
[ {
    label: 'Bosch',
    searchValue: 'Bosch',
    selected: 'checked'
}, {
    label: 'Fisher & Paykel',
    searchValue: 'Fisher & Paykel',
    selected: 'checked'
}, {
    label: 'Gaggenau',
    searchValue: 'Gaggenau',
    selected: 'checked'
}, {
    label: 'GE Profile',
    searchValue: 'GE Profile',
    selected: 'checked'
}, {
    label: 'Kenmore',
    searchValue: 'Kenmore',
    selected: 'checked'
}, {
    label: 'KitchenAid',
    searchValue: 'KitchenAid',
    selected: 'checked'
}, {
    label: 'LG',
    searchValue: 'LG',
    selected: 'checked'
}, {
    label: 'Liebherr',
    searchValue: 'Liebherr',
    selected: 'checked'
}, {
    label: 'Samsung',
    searchValue: 'Samsung',
    selected: 'checked'
}, {
    label: 'Whirlpool',
    searchValue: 'Whirlpool',
    selected: 'checked'
}];

var RefrieratorTypes = [
{
    label: 'Bottom Freezer',
    searchValue: 'Bottom Freezer',
    selected: 'checked'
},
{
    label: 'Built-In All Refrigerator',
    searchValue: 'Built-In All Refrigerator',
    selected: 'checked'
},{
    label: 'Column Refrigerator',
    searchValue: 'Column Refrigerator',
    selected: 'checked'
},{
    label: 'Side-by-Side',
    searchValue: 'Side-by-Side',
    selected: 'checked'
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
