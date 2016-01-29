'use strict';
var AcBrands =
[ {
    label: 'Frigidaire',
    searchValue: 'Frigidaire',
    selected: 'checked'
}, {
    label: 'Midea',
    searchValue: 'Midea',
    selected: 'checked'
}];

var AcTypes = [
{
    label: 'Through the Wall',
    searchValue: 'Through the Wall',
    selected: 'checked'
},
{
    label: 'Window',
    searchValue: 'Window',
    selected: 'checked'
}
];


angular.module('mean.ac').factory('AcFilter', [
	function($resource) {
	    return {
	    	displayName: 'Air Conditioners',
	    	brands: AcBrands,
	    	productTypes: AcTypes
	    }
	}
]);
