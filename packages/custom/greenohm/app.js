'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Greenohm = new Module('greenohm');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Greenohm.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Greenohm.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Greenohm.menus.add({
    title: 'greenohm example page',
    link: 'greenohm example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Greenohm.aggregateAsset('css', 'greenohm.css');
  Greenohm.aggregateAsset('js', 'jquery-1.10.2.js');
  
  Greenohm.aggregateAsset('js', 'lodash.min.js');
  Greenohm.aggregateAsset('js', 'angular-simple-logger.min.js');

  Greenohm.aggregateAsset('js', 'mscrollbar/jquery.mCustomScrollbar.js');
  Greenohm.aggregateAsset('js', 'markerclusterer.min.js');
  Greenohm.aggregateAsset('js', 'custom.js');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Greenohm.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Greenohm.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Greenohm.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Greenohm;
});
