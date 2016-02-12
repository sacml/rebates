'use strict';
var dryersBrands =
[ {
    label: 'Blomberg',
    searchValue: 'Blomberg',
    selected: false
}, {
    label: 'Kenmore',
    searchValue: 'Kenmore',
    selected: false
}, {
    label: 'LG',
    searchValue: 'LG',
    selected: false
}, {
    label: 'Whirlpool',
    searchValue: 'whirlpool',
    selected: false
}];

var dryersTypes = [
{
    label: 'Front Loader',
    searchValue: 'Front Loader',
    selected: false
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
