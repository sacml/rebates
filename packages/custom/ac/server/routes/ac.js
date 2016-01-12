'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Ac, app, auth, database) {
  var ac = require('../controllers/ac')(Ac);
  app.route('/api/ac/-')
    .get(ac.find);

  app.route('/api/ac/:acmodel')
    .get(ac.show);
  
   // Finish with setting up the brandmodle param
  app.param('acModel', ac.ac); 
};
