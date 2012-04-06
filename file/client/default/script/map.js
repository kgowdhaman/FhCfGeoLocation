//default co-ordinates
var lat = 12.95312, lon = 77.699239;  

var map = function () {
  var self = {
    
    // Show the map on screen
    show: function () {
        $fh.geo( {interval:5000}, function(geoRes){
        // result contains Location of Deloitte USI Bangalore (Bengaluru), Karnataka, India
        // geo fix 77.699239 12.95312 (Longitude,Latitude of Bengaluru)
       lat = geoRes.lat;
       lon = geoRes.lon;
      } );

      //Pass lat & lon into map api, initialising map at that point
      $fh.map({
        target: document.getElementById('maps_div'),
        lat: lat,
        lon: lon,
        zoom: 15
      }, function (res) {
        // Keep the reference to the map object;
        self.map = res.map;
        // Map is being shown, lets populate it with data points
        //self.populateMap(lat, lon);
      }, function (error) {
        // something seriously wrong here. Show error
        alert(error);
      });
    }
    
  };

  return {
    show: self.show
  };
}();