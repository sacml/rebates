var _ = require('lodash');
require('../packages/custom/products/server/models/product.js');
var mongoose = require('mongoose'),
    async = require('async'),
    Product = mongoose.model('Product'),
    Feature = mongoose.model('Feature'),
    OfflineRetailer = mongoose.model('OnlineRetailer'),
    OnlineRetailers = mongoose.model('OfflineRetailer'),
    Address = mongoose.model('Address')
    config = require('meanio').loadConfig();



function processOfflineRetailer(retailer,callback){
     var filter = {
                'Retailer': retailer.Retailer,
                'Address': retailer.Address,
                'City': retailer.City,
                'State': retailer.State,
                'Zip': retailer.Zip
            };
            var queryAddress = Address.findOne(filter, '_id Lat Lon', function(err, addr) {
                if (addr === null) {
                    addr = new Address();

                    addr.Retailer = retailer.Retailer;
                    addr.Address = retailer.Address;
                    addr.City = retailer.City;
                    addr.State = retailer.State;
                    addr.Zip = retailer.Zip;

                    addr.save(function(err) {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log('Saved %j', addr);
                        }
                        callback(err,'done');
                    });
                }else{
                    retailer.Lat = addr.Lat;
                    retailer.Lon = addr.Lon;                                     
                    callback(err,'done');
                }
            });
}

function processProduct(product,callback){
       console.log(product._id);
       async.map(product.offlineRetailers,processOfflineRetailer,function (err,result){ 
                product.save(function(err) {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log('Saved %j', product._id);
                        }
                        callback(err,'done');
                    });
       });

}


var query = Product.find();
query.select('_id offlineRetailers');
query.exec(function(err, products) {
        async.map(products,processProduct,function(err,result){
        console.log('products complete')

    });
});
