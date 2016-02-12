'use strict';
var WasherBrands =
[{
    label: 'Amana',
    searchValue: 'Amana',
    selected: false
}, {
    label: 'GE',
    searchValue: 'GE',
    selected: false
}, {
    label: 'LG',
    searchValue: 'LG',
    selected: false
}, {
    label: 'Maytag',
    searchValue: 'Maytag',
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

var WasherTypes = [
{
    label: 'Front Loader',
    searchValue: 'Front Loader',
    selected: false
},
{
    label: 'Top Loader',
    searchValue: 'Top Loader',
    selected: false
}
];


angular.module('mean.washers').factory('WashersFilter', [
	function($resource) {
	    return {
	    	displayName: 'Washers',
	    	brands: WasherBrands,
	    	productTypes: WasherTypes
	    }
	}
]);
