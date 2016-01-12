'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Dryers, app, auth, database) {

  var dryers = require('../controllers/dryers')(Dryers);
  	app.route('/api/dryers/-')
    .get(dryers.find);

     app.route('/api/dryers/:dryerModel')
    .get(dryers.show);
  
   // Finish with setting up the brandmodle param
    app.param('dryerModel', dryers.dryer); 

};
