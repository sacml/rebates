'use strict';
var dryersBrands =
[ {
    label: 'Blomberg',
    searchValue: 'Blomberg',
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
    label: 'Whirlpool',
    searchValue: 'whirlpool',
    selected: 'checked'
}];

var dryersTypes = [
{
    label: 'Front Loader',
    searchValue: 'Front Loader',
    selected: 'checked'
}
];


angular.module('mean.dryers').factory('DryersFilter', [
	function($resource) {
	    return {
	    	displayName: 'dryers',
	    	brands: dryersBrands,
	    	productTypes: dryersTypes
	    }
	}
]);
