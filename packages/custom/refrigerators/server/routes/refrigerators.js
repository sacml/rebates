'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Refrigerators, app, auth, database) {

  var refrigerators = require('../controllers/refrigerators')(Refrigerators);
  app.route('/api/refrigerators')
    .get(refrigerators.find);

 app.route('/api/refrigerators/:brandmodel')
    .get(refrigerators.show);
  
   // Finish with setting up the brandmodle param
  app.param('brandmodel', refrigerators.refrigerator); 
};
