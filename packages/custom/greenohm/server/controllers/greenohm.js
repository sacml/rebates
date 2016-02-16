'use strict';

/**
 * Module dependencies.
 */
var soap = require('soap');
var url = 'http://www.greenohm.com/appliancerebatews/appliancerebatesmudws.asmx?WSDL';
var args = {};

require('../../../products/server/models/product.js');
var mongoose = require('mongoose'),
    Product = mongoose.model('Product'),
    config = require('meanio').loadConfig(),
    _ = require('lodash');

module.exports = function(Products) {

    return {
        /**
         * Search all Products
         */
        all: function(req, res){    
        	soap.createClient(url, function(err, client) {
				client.GetGeneralSearchDetails({keyword: req.query.term}, function(err, result) {					
					var items = result.GetGeneralSearchDetailsResult.ProductList.ExtendedProduct;
					var models = [];
					_.forEach(items,function(value) {
						models.push(value.Model);					
					});

					var query, args;
		            var query =Product.find({});
		            if (req.query.category){
		                query.where('category').in(req.query.category.split(','));
		            }
		           
		            if (models){
		                query.where('model').in(models);
		            }		            
		            query.select('_id category brand model width height price color image capacity');           
		            query.sort('-created').exec(function(err, products) {
		                if (err) {
		                    return res.status(500).json({
		                        error: 'Cannot list the products'
		                    });
		                }

		                res.json(products)
		            });
				});
			});
        }
    };
}