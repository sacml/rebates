'use strict';
var AcBrands =
[ {
    label: 'Frigidaire',
    searchValue: 'Frigidaire',
    selected: true
}, {
    label: 'Midea',
    searchValue: 'Midea',
    selected: true
}];

var AcTypes = [
{
    label: 'Through the Wall',
    searchValue: 'Through the Wall',
    selected: true
},
{
    label: 'Window',
    searchValue: 'Window',
    selected: true
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
