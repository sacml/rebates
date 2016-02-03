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


function getDryers(client,product){
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
	        client.GetClothesDryerDetail(args, function(err, result) {	
 		          	var DryerRaw = result.GetClothesDryerDetailResult;  
 		          	w.category = 'dryers'                      	          		
	        		w.brand = args.Brand;
	        		w.model = args.Model;
	        		w.width = product.Width;
	        		w.height = product.Height;
	        		
	        		var capacity = DryerRaw.FeatureList.ProductFeature.filter( function(obj){return obj.Feature ===  'Capacity (cu. ft.)';} )[0].Value;
 		          	var productType = DryerRaw.FeatureList.ProductFeature.filter( function(obj){return obj.Feature ===  'Type';} )[0].Value;
	        		w.capacity = capacity;
	        		w.productType = productType;

	        		w.color = (product.Color) ? product.Color.replace('\n', ' ').split(' ') : undefined;
	        		w.price = product.Price;
	        		w.energySavings = DryerRaw.EnergySavings;
	          		w.costSavings = DryerRaw.CostSavings;
	          		w.energyScore = DryerRaw.EnergyScore;
	          		w.calculatorYears = 5;
	          		w.loadsPerWeek = 5;

	          		if (DryerRaw.WhereToBuyOnlineList.OnlineRetailer){	          		
	          			w.onlineRetailers = DryerRaw.WhereToBuyOnlineList.OnlineRetailer;
	          		}
	          		
	          		if(DryerRaw.WhereToBuyOfflineList.OfflineRetailer){ 
	          			w.offlineRetailers = DryerRaw.WhereToBuyOfflineList.OfflineRetailer;
	          		}
	          		if (DryerRaw.FeatureList){
	          			w.features = DryerRaw.FeatureList.ProductFeature;
	          		 }
	          		
	          		w.save(function(err){
	          			if (err) {console.log(err);
	          				console.log(DryerRaw.FeatureList.ProductFeature);
	          			}else{	 
	          				console.log('Saved',w.brand, w.model);
	          			}
	          		});
			});
	    });
}

function getWashers(client,callback){
	  client.GetClothesDryerSearch(args, function(err, result) {
      	var ProductList = result.GetClothesDryerSearchResult.ProductList.Product;      	
      	_.each(ProductList,function(product){
      		getDryers(client,product);
      	})
      	callback();
      });      
}


var url = 'http://www.greenohm.com/appliancerebatews/appliancerebatesmudws.asmx?WSDL';
var args = {};
soap.createClient(url, function(err, client) {
	    getWashers(client,fin);
});