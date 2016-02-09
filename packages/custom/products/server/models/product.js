'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
var AddressSchema = new Schema({
   Retailer:{
    type: String,
    required: true,
    trim: true
  },
  Address:{
    type: String,
    required: true,
    trim: true
  },
  City: {
    type: String,
    required: true,
    trim: true
  },
  State:{
    type: String,
    required: true,
    trim: true
  },
  Zip: {
    type: String,
    required: false,
    trim: true
  },
  Lat: {
    type: Number,
    required: false
  },
  Lon: {
    type: Number,
    required: false
  }
});

var OnlineRetailerSchema = new Schema({
  Retailer: {
    type: String,
    required: true,
    trim: true
  },
  Price: {
    type: Number,
    required: false
  },
  URL: {
    type: String,
    required: true,
    trim: true
  }
});

var FeatureSchema = new Schema({
  Feature: {
    type: String,
    required: true,
    trim: true
  },
  Value: {
    type: String,
    required: false,
    trim: true
  }
});

var OfflineRetailerSchema = new Schema({
   Retailer:{
    type: String,
    required: true,
    trim: true
  },
  Address:{
    type: String,
    required: true,
    trim: true
  },
  City: {
    type: String,
    required: true,
    trim: true
  },
  State:{
    type: String,
    required: true,
    trim: true
  },
  Zip: {
    type: String,
    required: false,
    trim: true
  },
  Price: {
    type: Number,
    required: false
  },
  Lat: {
    type: Number,
    required: false
  },
  Lon: {
    type: Number,
    required: false
  }
});

/**
 * Article Schema
 */
var ProductSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  category :{
    type: String,
    required: true,
    trim: true
  },
  brand: {
    type: String,
    required: true,
    trim: true
  },
  model: {
    type: String,
    required: true,
    trim: true
  },
  rebate:{
    type: Number,
    required: false,
    default: 75
  },
  image:{
    type: String,
    required: false
  },
  description:{
    type: String,
    required: false
    
  },
  featureDescription:{
    type: String,
    required: false
  },
  width: {
    type: Number,
    required: false,
    trim: true
  },
  height: {
    type: Number,
    required: false,
    trim: true
  },
  capacity: {
    type: Number,
    required: false,
    trim: true
  },
  productType: {
    type: String,
    required: false,
    trim: true
  },
  color: {
    type: Array,
    required: false,
    trim: true
  },
  models: {
    type: Array,
    required: false,
    trim: true
  },
  price: {
    type: Number,
    required: false
  },
  energySavings:{
    type: Number,
    required: false
  },
  costSavings:{
    type: Number,
    required: false
  },
  energyScore:{
    type: Number,
    required: false
  },
  calculatorYears:{
    type: Number,
    required: false,
    default: 5
  },
  loadsPerWeek:{
    type: Number,
    required: false,
    default: 5
  },
  onlineRetailers:[OnlineRetailerSchema],
  offlineRetailers :[OfflineRetailerSchema],
  features: [FeatureSchema],
  updated: {
    type: Array
  }
});

/**
 * Validations
 */
ProductSchema.path('brand').validate(function(brand) {
  return !!brand;
}, 'Brand cannot be blank');

ProductSchema.path('model').validate(function(model) {
  return !!model;
}, 'ModelName cannot be blank');


mongoose.model('Product', ProductSchema);
mongoose.model('Feature', FeatureSchema);

mongoose.model('OnlineRetailer', OnlineRetailerSchema);
mongoose.model('OfflineRetailer', OfflineRetailerSchema);
mongoose.model('Address', AddressSchema);
