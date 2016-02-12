'use strict';
var AcBrands =
[ {
    label: 'Frigidaire',
    searchValue: 'Frigidaire',
    selected: false
}, {
    label: 'Midea',
    searchValue: 'Midea',
    selected: false
}];

var AcTypes = [
{
    label: 'Through the Wall',
    searchValue: 'Through the Wall',
    selected: false
},
{
    label: 'Window',
    searchValue: 'Window',
    selected: false
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
