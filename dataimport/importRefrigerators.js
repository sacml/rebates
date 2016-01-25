var soap = require('soap');
var _ = require('underscore');

require('../packages/custom/products/server/models/product.js');

var mongoose = require('mongoose'),

    Product = mongoose.model('Product'),
    Feature = mongoose.model('Feature'),
    OfflineRetailer = mongoose.model('OnlineRetailer'),
    OnlineRetailers = mongoose.model('OfflineRetailer'),
    config = require('meanio').loadConfig();



function fin(){
	console.log('fin');
}


function getRefrigerator(client,product){
			var args = {
   						Brand: product.Brand,
   						Model: product.Model,
   						CalculatorYears: 5,
   						LoadsPerWeek: 5
   						};	   

   			var query = Product.findOne({ 'brand': product.Brand, 'model': product.Model});
   			query.select('_id brand model width height capacity color price energySavings features description loadsPerWeek calculatorYears onlineRetailers offlineRetailers');
   			query.exec(function (err, w) {
   			
   			if( w === null){
   				w = new Product();
   			}
	        client.GetRefrigeratorDetail(args, function(err, result) {	
 		          	var AirConditionerRaw = result.GetRefrigeratorDetailResult;  
 		          	w.category = 'refrigerators'                      	          		
	        		w.brand = args.Brand;
	        		w.model = args.Model;
	        		w.width = product.Width;
	        		w.height = product.Height;
	        		w.capacity = product.capacity;
	        		w.color = (product.Color) ? product.Color.replace('\n', ' ').split(' ') : undefined;
	        		w.price = product.Price;
	        		w.energySavings = AirConditionerRaw.EnergySavings;
	          		w.costSavings = AirConditionerRaw.CostSavings;
	          		w.energyScore = AirConditionerRaw.EnergyScore;
	          		w.calculatorYears = 5;
	          		w.loadsPerWeek = 5;

	          		if (AirConditionerRaw.WhereToBuyOnlineList.OnlineRetailer){	          		
	          			w.onlineRetailers = AirConditionerRaw.WhereToBuyOnlineList.OnlineRetailer;
	          		}
	          		
	          		if(AirConditionerRaw.WhereToBuyOfflineList.OfflineRetailer){ 
	          			w.offlineRetailers = AirConditionerRaw.WhereToBuyOfflineList.OfflineRetailer;
	          		}
	          		if (AirConditionerRaw.FeatureList){
	          			w.features = AirConditionerRaw.FeatureList.ProductFeature;
	          		 }
	          		
	          		w.save(function(err){
	          			if (err) {
	          				console.log(err);	          			
	          			}else{	 
	          				console.log('Saved',w.brand, w.model);
	          			}
	          		});
			});
	    });
}

function getRefrigerators(client,callback){
	  client.GetRefrigeratorSearch(args, function(err, result) {
      	var ProductList = result.GetRefrigeratorSearchResult.ProductList.Product;      	
      	_.each(ProductList,function(product){
      		getRefrigerator(client,product);
      	})
      	callback();
      });      
}


var url = 'http://www.greenohm.com/appliancerebatews/appliancerebatesmudws.asmx?WSDL';
var args = {};
soap.createClient(url, function(err, client) {
	    getRefrigerators(client,fin);
});