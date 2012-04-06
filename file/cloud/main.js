function getPlacemarks() {
  var lat = 'undefined' !== typeof $params.lat ? $params.lat : 12.95312,
      lon = 'undefined' !== typeof $params.lon ? $params.lon : 77.699239;
  
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
  
  return {points: points};
}