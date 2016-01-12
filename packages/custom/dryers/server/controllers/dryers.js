'use strict';

/**
 * Module dependencies.
 */
var  _ = require('lodash');
var soap = require('soap');
var url = 'http://www.greenohm.com/appliancerebatews/appliancerebatesmudws.asmx?WSDL';
 

module.exports = function(Dryers) {

    return {
        /**
         * Find washer by brand and Model
         */
        dryer: function(req, res, next, brandModel) {        	  	
        var brand = brandModel.split('-')[0];
        var model = brandModel.split('-')[1];   
   			var args = {
   						Brand: brand,
   						Model: model,
   						CalculatorYears: 5,
   						LoadsPerWeek: 5
   						};
              soap.createClient(url, function(err, client) {			    
			   
             client.GetClothesDryerDetail(args, function(err, result) {				 
          		var dryer = result.GetClothesDryerDetailResult;
          		console.log('dryer:washer');
          		 req.productDetail = dryer;
          		 next();
      			});
         	 });
        },
        /**
         * Show an washer
         */
        show: function(req, res) {
        	console.log('dryer:show')
          res.json(req.productDetail);
        },
        /**
         * List of Dryers
         */
        find: function(req, res) {
  			var args = {};            
          soap.createClient(url, function(err, client) {			    			    
          client.GetClothesDryerSearch(args, function(err, result) {	
          		var Dryers = result.GetClothesDryerSearchResult.ProductList.Product;
          		 res.json(Dryers)
      			});
         	});
        }
    };
}