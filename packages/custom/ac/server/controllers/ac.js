'use strict';

/**
 * Module dependencies.
 */
var  _ = require('lodash');
var soap = require('soap');
var url = 'http://www.greenohm.com/appliancerebatews/appliancerebatesmudws.asmx?WSDL';
 

module.exports = function(Ac) {

    return {
        /**
         * Find washer by brand and Model
         */
        ac: function(req, res, next, brand,model) {        	
        var args = {
   						Brand: brand,
   						Model: model,
   						CalculatorYears: 5
   						};
              soap.createClient(url, function(err, client) {			    
			   
             client.GetRoomAirConditionerDetail(args, function(err, result) {				 
          		var ac = result.GetRoomAirConditionerDetailResult;
          		console.log('ac:ac');
          		 req.productDetail = ac;
          		 next();
      			});
         	 });
        },
        /**
         * Show an washer
         */
        show: function(req, res) {
        	console.log('ac:show')
          res.json(req.productDetail);
        },
        /**
         * List of Ac
         */
        find: function(req, res) {
  			var args = {BrandList: 'Whirlpool,GE,Samsung'};            
          soap.createClient(url, function(err, client) {			    			    
          client.GetRoomAirConditionerSearch(args, function(err, result) {	
          		var Ac = result.GetRoomAirConditionerSearchResult.ProductList.Product;
          		 res.json(Ac)
      			});
         	});
        }
    };
}