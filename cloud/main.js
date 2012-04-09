var util = require('util');
/* main.js
 * All calls here are publicly exposed as REST API endpoints.
 * - all parameters must be passed in a single JSON paramater.
 * - the return 'callback' method signature is 'callback (error, data)', where 'data' is a JSON object.
*/

/* 'getConfig' server side REST API method.
 * Trivial example of pulling in a shared config file.
 */
exports.getConfig = function(params, callback) {
  console.log("In getConfig() call");
  var cfg = require("config.js");
  return callback(null, {config: cfg.config});
};

exports.getPlacemarks = function (params, callback) {
  console.log('in getPlacemarks');
  
  var lat = 'undefined' !== typeof params.lat ? params.lat : 12.95312,
      lon = 'undefined' !== typeof params.lon ? params.lon : 77.699239;
  
  // Add the passed in location to a points array
  var points = [{lat: lat, lon: lon, title: 'Deloitte USI Bengaluru'}];
    
  // Push some more closeby points onto the array
  //points.push({lat: lat + 0.002, lon: lon - 0.002, title: 'Top Left'});
  //points.push({lat: lat + 0.002, lon: lon, title: 'Top Middle'});
  //points.push({lat: lat + 0.002, lon: lon + 0.002, title: 'Top Right'});
  
  //points.push({lat: lat, lon: lon - 0.002, title: 'Middle Left'});  
  //points.push({lat: lat, lon: lon + 0.002, title: 'Middle Right'});
  
  
  //points.push({lat: lat - 0.002, lon: lon - 0.002, title: 'Bottom Left'});
  //points.push({lat: lat - 0.002, lon: lon, title: 'Bottom Middle'});
  //points.push({lat: lat - 0.002, lon: lon + 0.002, title: 'Bottom Right'});
  
  return callback(null, {points: points});
};