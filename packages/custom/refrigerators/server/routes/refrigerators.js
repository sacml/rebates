'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Refrigerators, app, auth, database) {

  var refrigerators = require('../controllers/refrigerators')(Refrigerators);
  app.route('/api/refrigerators')
    .get(refrigerators.find);
};
