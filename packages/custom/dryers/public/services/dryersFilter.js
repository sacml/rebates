'use strict';
var dryersBrands =
[ {
    label: 'Blomberg',
    searchValue: 'Blomberg',
    selected: true
}, {
    label: 'Kenmore',
    searchValue: 'Kenmore',
    selected: true
}, {
    label: 'LG',
    searchValue: 'LG',
    selected: true
}, {
    label: 'Whirlpool',
    searchValue: 'whirlpool',
    selected: true
}];

var dryersTypes = [
{
    label: 'Front Loader',
    searchValue: 'Front Loader',
    selected: true
}
];


angular.module('mean.dryers').factory('DryersFilter', [
	function($resource) {
	    return {
	    	displayName: 'Dryers',
	    	brands: dryersBrands,
	    	productTypes: dryersTypes
	    }
	}
]);
