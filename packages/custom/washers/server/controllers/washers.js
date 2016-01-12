'use strict';

/**
 * Module dependencies.
 */
var  _ = require('lodash');
var soap = require('soap');
var url = 'http://www.greenohm.com/appliancerebatews/appliancerebatesmudws.asmx?WSDL';
 

module.exports = function(Washers) {

    return {
        /**
         * Find washer by brand and Model
         */
        washer: function(req, res, next, brandModel) {
        
        var brand = brandModel.split('-')[0];
        var model = brandModel.split('-')[1];        	
   			var args = {
   						Brand: brand,
   						Model: model,
   						CalculatorYears: 5,
   						LoadsPerWeek: 5
   						};
              soap.createClient(url, function(err, client) {			    
			   
             client.GetClothesWasherDetail(args, function(err, result) {				 
          		var Washer = result.GetClothesWasherDetailResult;                        	
          		 req.productDetail = Washer;
          		 next();
      			});
         	 });
        },
        /**
         * Show an washer
         */
        show: function(req, res) {        	
          res.json(req.productDetail);
        },
        /**
         * List of Washers
         */
        find: function(req, res) {
  			var args = {};            
          soap.createClient(url, function(err, client) {			    			    
          client.GetClothesWasherSearch(args, function(err, result) {	
          		var Washers = result.GetClothesWasherSearchResult.ProductList.Product;
          		 res.json(Washers)
      			});
         	});
        }
    };
}