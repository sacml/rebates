'use strict';

angular.module('mean.dryers').factory('Dryers',['$resource',
	function($resource) {
        return $resource('/api/dryers/:brand-:model', { brand:'@brand', model:'@model' });
    } 
]);
