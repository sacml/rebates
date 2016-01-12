'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Washers, app, auth, database) {

 var washers = require('../controllers/washers')(Washers);
  app.route('/api/washers')
    .get(washers.find);

   app.route('/api/washers/:brandmodel')
    .get(washers.show);
  
   // Finish with setting up the brandmodle param
  app.param('brandmodel', washers.washer); 
};
