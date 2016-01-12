'use strict';

/**
 * Module dependencies.
 */
var  _ = require('lodash');
var soap = require('soap');
var url = 'http://www.greenohm.com/appliancerebatews/appliancerebatesmudws.asmx?WSDL';
 

module.exports = function(Refrigerators) {

    return {
        /**
         * Find washer by brand and Model
         */
        refrigerator: function(req, res, next, brandModel) {  	    
        var brand = brandModel.split('-')[0];
        var model = brandModel.split('-')[1];      	
   			var args = {
   						Brand: brand,
   						Model: model,
   						CalculatorYears: 5
   						};
              soap.createClient(url, function(err, client) {			    
			   
             client.GetRefrigeratorDetail(args, function(err, result) {				 
          		var Refrigerator = result.GetRefrigeratorDetail.Result;          		

          		 req.productDetail = Refrigerator;
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
         * List of Refrigerators
         */
        find: function(req, res) {
  			var args = {};            
          soap.createClient(url, function(err, client) {			    			    
          client.GetRefrigeratorSearch(args, function(err, result) {	
          		var Refrigerators = result.GetRefrigeratorSearchResult.ProductList.Product;
          		 res.json(Refrigerators)
      			});
         	});
        }
    };
}