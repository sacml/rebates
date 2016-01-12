'use strict';

angular.module('mean.refrigerators').factory('Refrigerators', ['$resource',
	function($resource) {
        return $resource('/api/refrigerators/:brand-:model', { brand:'@brand', model:'@model' }); 
    } 
]);
