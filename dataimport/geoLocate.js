var _ = require('underscore');
require('../packages/custom/products/server/models/product.js');
var mongoose = require('mongoose'),
    async = require('async'),
    Product = mongoose.model('Product'),
    Feature = mongoose.model('Feature'),
    OfflineRetailer = mongoose.model('OnlineRetailer'),
    OnlineRetailers = mongoose.model('OfflineRetailer'),
    Address = mongoose.model('Address')
config = require('meanio').loadConfig();



var geocoderProvider = 'google';

var HttpsAdapter = require('node-geocoder/lib/httpadapter/httpsadapter.js')
var httpAdapter = 'http'

var geocoder = require('node-geocoder')(geocoderProvider, httpAdapter, {});
var query = Address.find();
query.exec(function(err, Addresses) {
    async.map(Addresses, function(add ,callback) {
        if (!add.Lat && !add.lon){
            var addr = add.Address + ' ' + add.City + ' ' + add.State + ' ' + add.Zip;
            geocoder.geocode(addr, function(err, res) {
                if (!err) {

                    add.Lat = res[0].latitude;
                    add.Lon = res[0].longitude;

                    add.save(function(err) {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log('Saved %j', add);
                        }
                        callback(null,'done');
                    });
                } else {
                    console.log(err);
                    callback(null,'done');
                }
                
            });
        }else{
              callback(null,'nothing to do here')
        }
    }, function(err,result){
        console.log('yo dog');
    });

});