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


function getWasher(client,product){
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
	        client.GetClothesWasherDetail(args, function(err, result) {	
 		          	var WasherRaw = result.GetClothesWasherDetailResult;  
 		          	w.category = 'washers'                      	          		
	        		w.brand = args.Brand;
	        		w.model = args.Model;
	        		w.width = product.Width;
	        		w.height = product.Height;
	        		w.capacity = product.capacity;
	        		w.color = (product.Color) ? product.Color.replace('\n', ' ').split(' ') : undefined;
	        		w.price = product.Price;
	        		w.energySavings = WasherRaw.EnergySavings;
	          		w.costSavings = WasherRaw.CostSavings;
	          		w.energyScore = WasherRaw.EnergyScore;
	          		w.calculatorYears = 5;
	          		w.loadsPerWeek = 5;

	          		if (WasherRaw.WhereToBuyOnlineList.OnlineRetailer){	          		
	          			w.onlineRetailers = WasherRaw.WhereToBuyOnlineList.OnlineRetailer;
	          		}
	          		
	          		if(WasherRaw.WhereToBuyOfflineList.OfflineRetailer){ 
	          			w.offlineRetailers = WasherRaw.WhereToBuyOfflineList.OfflineRetailer;
	          		}
	          		if (WasherRaw.FeatureList){
	          			w.features = WasherRaw.FeatureList.ProductFeature;
	          		 }
	          		
	          		w.save(function(err){
	          			if (err) {console.log(err);
	          				console.log(WasherRaw.FeatureList.ProductFeature);
	          			}else{	 
	          				console.log('Saved',w.brand, w.model);
	          			}
	          		});
			});
	    });
}

function getWashers(client,callback){
	  client.GetClothesWasherSearch(args, function(err, result) {
      	var ProductList = result.GetClothesWasherSearchResult.ProductList.Product;      	
      	_.each(ProductList,function(product){
      		getWasher(client,product);
      	})
      	callback();
      });      
}


var url = 'http://www.greenohm.com/appliancerebatews/appliancerebatesmudws.asmx?WSDL';
var args = {};
soap.createClient(url, function(err, client) {
	    getWashers(client,fin);
});