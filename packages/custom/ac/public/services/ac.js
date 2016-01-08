'use strict';

angular.module('mean.ac').factory('Ac',['$resource',
	function($resource) {
        return $resource('/api/ac/:brandModel')  
    } 
]);
