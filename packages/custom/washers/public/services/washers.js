'use strict';

angular.module('mean.washers').factory('Washers', ['$resource',
	function($resource) {
        return $resource('/api/washers/:brand-:model', { brand:'@brand', model:'@model' })  
    } 

]);
