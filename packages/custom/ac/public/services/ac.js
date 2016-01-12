'use strict';

angular.module('mean.ac').factory('Ac',['$resource',
	function($resource) {
        return $resource('/api/ac/:brand-:model', { brand:'@brand', model:'@model' }, {'query': { isArray:false   }});
    } 
]);
