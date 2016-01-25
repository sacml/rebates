'use strict';

// Article authorization helpers
var hasAuthorization = function(req, res, next) {
  if (!req.user.isAdmin) {
    return res.status(401).send('User is not authorized');
  }
  next();
};

var hasPermissions = function(req, res, next) {

    req.body.permissions = req.body.permissions || ['authenticated'];

    for (var i = 0; i < req.body.permissions.length; i++) {
      var permission = req.body.permissions[i];
      if (req.acl.user.allowed.indexOf(permission) === -1) {
            return res.status(401).send('User not allowed to assign ' + permission + ' permission.');
        };
    };

    next();
};

module.exports = function(Products, app, auth) {
  
  var products = require('../controllers/products')(Products);

  app.route('/api/products')
    .get(products.all)
  //  .post(auth.requiresLogin, hasPermissions, products.create);
  app.route('/api/products/:productId')
    .get(products.show)
    .put(products.update)
  // // Finish with setting up the productId param
   app.param('productId', products.product);
};
