'use strict';

module.exports = function(Greenohm, app, auth) {

  var greenohm = require('../controllers/greenohm')(Greenohm);

  app.route('/api/greenohm')
    .get(greenohm.all)  
};