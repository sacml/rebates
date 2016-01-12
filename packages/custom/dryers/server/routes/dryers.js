'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Dryers, app, auth, database) {

  var dryers = require('../controllers/dryers')(Dryers);
  app.route('/api/dryers')
    .get(dryers.find);
     app.route('/api/dryers/:brandmodel')
    .get(dryers.show);
  
   // Finish with setting up the brandmodle param
  app.param('brandmodel', dryers.dryer); 
};
