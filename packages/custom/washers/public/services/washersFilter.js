'use strict';
var WasherBrands =
[{
    label: 'Amana',
    searchValue: 'Amana',
    selected: true
}, {
    label: 'GE',
    searchValue: 'GE',
    selected: true
}, {
    label: 'LG',
    searchValue: 'LG',
    selected: true
}, {
    label: 'Maytag',
    searchValue: 'Maytag',
    selected: true
}, {
    label: 'Samsung',
    searchValue: 'Samsung',
    selected: true
}, {
    label: 'Whirlpool',
    searchValue: 'whirlpool',
    selected: true
}];

var WasherTypes = [
{
    label: 'Front Loader',
    searchValue: 'Top Load',
    selected: true
},
{
    label: 'Front Load',
    searchValue: 'Top Loader',
    selected: true
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
