'use strict';
var WasherBrands =
[{
    label: 'Amana',
    searchValue: 'Amana',
    selected: 'checked'
}, {
    label: 'GE',
    searchValue: 'GE',
    selected: 'checked'
}, {
    label: 'LG',
    searchValue: 'LG',
    selected: 'checked'
}, {
    label: 'Maytag',
    searchValue: 'Maytag',
    selected: 'checked'
}, {
    label: 'Samsung',
    searchValue: 'Samsung',
    selected: 'checked'
}, {
    label: 'Whirlpool',
    searchValue: 'whirlpool',
    selected: 'checked'
}];

var WasherTypes = [
{
    label: 'Front Loader',
    searchValue: 'Top Load',
    selected: 'checked'
},
{
    label: 'Front Load',
    searchValue: 'Top Loader',
    selected: 'checked'
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
