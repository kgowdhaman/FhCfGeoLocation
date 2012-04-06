var lat = 52.88, 
          lon = -7.96;

var map = function () {
  var self = {
    // Show the map on screen
    show: function () {
     
      $fh.geo( {interval:5000}, function(geoRes){
        lat = geoRes.lat;
        lon = geoRes.lon;
      } );
      //Pass lat & lon into map api, initialising map at that point
      $fh.map({
        target: '#maps_div',
        lat: lat,
        lon: lon,
        zoom: 15
      }, function (res) {
        // Keep the reference to the map object;
        self.map = res.map;
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
