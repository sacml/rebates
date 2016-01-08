'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Refrigerators = new Module('refrigerators');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Refrigerators.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Refrigerators.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Refrigerators.menus.add({
    title: 'refrigerators example page',
    link: 'refrigerators example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Refrigerators.aggregateAsset('css', 'refrigerators.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Refrigerators.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Refrigerators.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Refrigerators.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Refrigerators;
});
