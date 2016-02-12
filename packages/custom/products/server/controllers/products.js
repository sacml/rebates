'use strict';

/**
 * Module dependencies.
 */
require('../models/product.js');
var mongoose = require('mongoose'),
    Product = mongoose.model('Product'),
    config = require('meanio').loadConfig(),
    _ = require('lodash');

module.exports = function(Products) {

    return {
        /**
         * Find product by id
         */
        product: function(req, res, next, id) {
            Product.findOne( {'_id' : id }, function(err, product) {
                if (err) return next(err);
                if (!product) return next(new Error('Failed to load product ' + id));
                req.product = product;
                next();
            });
        },
        // /**
        //  * Create an product
        //  */
        // create: function(req, res) {
        //     var product = new Product(req.body);
        //     product.user = req.user;

        //     product.save(function(err) {
        //         if (err) {
        //             return res.status(500).json({
        //                 error: 'Cannot save the product'
        //             });
        //         }

        //         Products.events.publish({
        //             action: 'created',
        //             user: {
        //                 name: req.user.name
        //             },
        //             url: config.hostname + '/products/' + product._id,
        //             name: product.title
        //         });

        //         res.json(product);
        //     });
        // },
        // /**
        //  * Update an product
        //  */
        update: function(req, res) {
            var product = req.product;

            product = _.extend(product, req.body);
            product.save(function(err) {
                if (err) {
                    return res.status(500).json({
                        error: 'Cannot update the product'
                    });
                }            
                res.json(product);
            });
        },
        // /**
        //  * Delete an product
        //  */
        // destroy: function(req, res) {
        //     var product = req.product;


        //     product.remove(function(err) {
        //         if (err) {
        //             return res.status(500).json({
        //                 error: 'Cannot delete the product'
        //             });
        //         }

        //         Products.events.publish({
        //             action: 'deleted',
        //             user: {
        //                 name: req.user.name
        //             },
        //             name: product.title
        //         });

        //         res.json(product);
        //     });
        // },
        /**
         * Show an product
         */
        show: function(req, res) {        
            res.json(req.product);
        },
        /**
         * List of Products
         */
        all: function(req, res){    
            var query, args;
            var query =Product.find({});
            if (req.query.category){
                query.where('category', req.query.category);
            }
           
            if (req.query.brands){
                query.where('brand').in(req.query.brands.split(','));
            }
            
            if (req.query.types){
                 query.where('productType').in(req.query.types.split(','));
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

        }
    };
}