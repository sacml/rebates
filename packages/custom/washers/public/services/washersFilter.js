'use strict';
var WasherBrands =
[{ 
   label: 'All',
    searchValue: 'Amana,GE,Kenmore,LG,Maytag,Whirlpool',
    selected: 'checked'
}, {
    label: 'Amana',
    searchValue: 'Amana',
    selected: 'checked'
}, {
    label: 'GE',
    searchValue: 'GE',
    selected: 'checked'
}, {
    label: 'Kenmore',
    searchValue: 'Kenmore',
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
    label: 'Whirlpool',
    searchValue: 'whirlpool',
    selected: 'checked'
}];

var WasherTypes = [
{
    label: 'Top Load',
    searchValue: 'Top Load',
    selected: 'checked'
},
{
    label: 'Front Load',
    searchValue: 'Front Load',
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
